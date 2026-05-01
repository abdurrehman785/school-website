import { google } from "googleapis";

export type ContactRow = {
  name: string;
  phone: string;
  email: string;
  student: string;
  message: string;
};

type ServiceAccountCreds = {
  clientEmail: string;
  privateKey: string;
};

function normalizePrivateKey(key: string): string {
  const k = key.trim();
  if (k.includes("\\n")) return k.replace(/\\n/g, "\n");
  return k;
}

function credsFromJson(value: unknown): ServiceAccountCreds | null {
  if (!value || typeof value !== "object") return null;
  const o = value as Record<string, unknown>;
  const clientEmail = o.client_email;
  const privateKey = o.private_key;
  if (typeof clientEmail !== "string" || typeof privateKey !== "string") return null;
  if (!clientEmail.includes("@") || !privateKey.includes("BEGIN")) return null;
  return { clientEmail, privateKey: normalizePrivateKey(privateKey) };
}

function resolveServiceAccount(): ServiceAccountCreds | null {
  /** Best for Vercel: paste base64-encoded full service account JSON (one line). */
  const b64 = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64?.trim();
  if (b64) {
    try {
      const decoded = Buffer.from(b64, "base64").toString("utf8");
      const json = JSON.parse(decoded);
      const c = credsFromJson(json);
      if (c) return c;
    } catch {
      /* fall through */
    }
  }

  /** Single-line/minified JSON in one env var (Vercel-friendly). */
  const rawJson = process.env.GOOGLE_SERVICE_ACCOUNT_JSON?.trim();
  if (rawJson) {
    try {
      const json = JSON.parse(rawJson);
      const c = credsFromJson(json);
      if (c) return c;
    } catch {
      /* fall through */
    }
  }

  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  const rawKey = process.env.GOOGLE_PRIVATE_KEY?.trim();
  if (clientEmail && rawKey) {
    return { clientEmail, privateKey: normalizePrivateKey(rawKey) };
  }

  return null;
}

function getSheetsConfig() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID?.trim();
  const sheetTab = process.env.GOOGLE_SHEETS_TAB?.trim() || "Sheet1";
  const sa = resolveServiceAccount();

  if (!spreadsheetId || !sa) {
    return null;
  }

  return { spreadsheetId, ...sa, sheetTab };
}

export function isGoogleSheetsConfigured(): boolean {
  return getSheetsConfig() !== null;
}

export async function appendContactRow(row: ContactRow): Promise<void> {
  const cfg = getSheetsConfig();
  if (!cfg) {
    throw new Error(
      "Missing GOOGLE_SHEETS_SPREADSHEET_ID and/or service account credentials (GOOGLE_SERVICE_ACCOUNT_KEY_BASE64, GOOGLE_SERVICE_ACCOUNT_JSON, or EMAIL+PRIVATE_KEY)."
    );
  }

  const auth = new google.auth.JWT({
    email: cfg.clientEmail,
    key: cfg.privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: cfg.spreadsheetId,
    range: `${cfg.sheetTab}!A:F`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          new Date().toISOString(),
          row.name,
          row.phone,
          row.email,
          row.student,
          row.message.replace(/\u0000/g, ""),
        ],
      ],
    },
  });
}
