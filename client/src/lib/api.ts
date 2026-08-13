import type { ContactForm } from "@/types";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "/api";
const GOOGLE_SHEET_WEBHOOK = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL ?? "";

export interface ApiError {
  message: string;
}

async function handle<T>(res: Response): Promise<T> {
  const body = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(body?.message ?? `Request failed with status ${res.status}`);
  }
  return body as T;
}

export const api = {
  base: API_BASE,

  async sendContactMessage(payload: ContactForm): Promise<{ message: string }> {
    // If Google Sheet Webhook URL is set in client environment, send directly to Google Sheet
    if (GOOGLE_SHEET_WEBHOOK) {
      try {
        await fetch(GOOGLE_SHEET_WEBHOOK, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...payload,
            timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
          }),
        });
      } catch (err) {
        console.error("[GoogleSheet Direct Post Error]", err);
      }
    }

    const res = await fetch(`${API_BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return handle<{ message: string }>(res);
  },

  async health(): Promise<{ status: string }> {
    const res = await fetch(`${API_BASE}/health`);
    return handle<{ status: string }>(res);
  },
};
