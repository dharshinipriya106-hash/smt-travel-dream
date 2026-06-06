// Brand contact constants — TODO: replace with real values
export const PHONE = "+91 90000 00000";
export const PHONE_TEL = "+919000000000";
export const WHATSAPP_NUMBER = "919000000000"; // E.164 without +
export const INSTAGRAM_URL = "https://instagram.com/smtholidays";
export const MAPS_URL = "https://maps.google.com/?q=Sankarankovil,Tamil+Nadu";
export const EMAIL = "hello@smtholidays.in";

export function waUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
