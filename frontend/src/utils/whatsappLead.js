/** Digits only, international format without + (e.g. India 91xxxxxxxxxx). */
const DEFAULT_LEAD_NUMBER = "918142438759";

function normalizeLeadNumber(raw) {
  const d = (raw || DEFAULT_LEAD_NUMBER).replace(/\D/g, "");
  return d || DEFAULT_LEAD_NUMBER;
}

export const WHATSAPP_LEAD_NUMBER = normalizeLeadNumber(
  process.env.REACT_APP_WHATSAPP_LEAD_NUMBER
);

/**
 * Opens WhatsApp with a pre-filled lead message (no backend).
 * @param {{ first_name: string, last_name: string, email: string, phone?: string, description: string, context?: string }} payload
 */
export function getWhatsAppLeadUrl(payload) {
  const { first_name, last_name, email, phone, description, context } = payload;
  const desc = context ? `[${context}] ${description}` : description;
  const lines = [
    "New lead — website contact form",
    `Name: ${first_name} ${last_name}`.trim(),
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : null,
    `Message: ${desc}`,
  ].filter(Boolean);
  const text = lines.join("\n");
  return `https://wa.me/${WHATSAPP_LEAD_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function openWhatsAppLead(payload) {
  const url = getWhatsAppLeadUrl(payload);
  const win = window.open(url, "_blank", "noopener,noreferrer");
  if (!win) window.location.href = url;
}
