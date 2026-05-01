import { google } from "googleapis";

export type ContactRow = {
  name: string;
  phone: string;
  email: string;
  student: string;
  message: string;
};

function getSheetsConfig() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const rawKey = process.env.GOOGLE_PRIVATE_KEY;
  const sheetTab = process.env.GOOGLE_SHEETS_TAB ?? "Sheet1";

  if (!spreadsheetId || !clientEmail || !rawKey) {
    return null;
  }

  const privateKey = rawKey.includes("\\n") ? rawKey.replace(/\\n/g, "\n") : rawKey;

  return { spreadsheetId, clientEmail, privateKey, sheetTab };
}

export function isGoogleSheetsConfigured(): boolean {
  return getSheetsConfig() !== null;
}

export async function appendContactRow(row: ContactRow): Promise<void> {
  const cfg = getSheetsConfig();
  if (!cfg) {
    throw new Error("GOOGLE_SHEETS_SPREADSHEET_ID / GOOGLE_SERVICE_ACCOUNT_EMAIL / GOOGLE_PRIVATE_KEY are not set.");
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
