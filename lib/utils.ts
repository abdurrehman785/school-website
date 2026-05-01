import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Landline like `(051) 8469871` → `tel:+92518469871` for click-to-dial. */
export function toPakistanTelUrl(displayPhone: string): string {
  const d = displayPhone.replace(/\D/g, "")
  if (!d) return "tel:"
  const intl = d.startsWith("0") ? `+92${d.slice(1)}` : `+${d}`
  return `tel:${intl}`
}

/** Same as {@link toPakistanTelUrl} without the `tel:` prefix (e.g. JSON-LD `telephone`). */
export function toPakistanTelE164(displayPhone: string): string {
  const d = displayPhone.replace(/\D/g, "")
  if (!d) return ""
  return d.startsWith("0") ? `+92${d.slice(1)}` : `+${d}`
}
