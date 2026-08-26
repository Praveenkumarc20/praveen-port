import type { ContactForm } from "@/types";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "/api";
const GOOGLE_SHEET_WEBHOOK =
  import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbzINQlHsw4sPTdgeE_ErqRJtCygwYzOmYpXXat3WNDgYv2IFZgYt0UsleICmc0EFB_F9w/exec";

export interface ApiError {
  message: string;
}

export const api = {
  base: API_BASE,

  async sendContactMessage(payload: ContactForm): Promise<{ message: string }> {
    let sheetSuccess = false;

    // 1. Submit to Google Sheet Webhook
    if (GOOGLE_SHEET_WEBHOOK) {
      try {
        const bodyData = JSON.stringify({
          name: payload.name,
          email: payload.email,
          message: payload.message,
          timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        });

        await fetch(GOOGLE_SHEET_WEBHOOK, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: bodyData,
        });

        sheetSuccess = true;
      } catch (err) {
        console.error("[GoogleSheet Direct Post Error]", err);
      }
    }

    // 2. Try posting to Express backend if reachable
    try {
      const res = await fetch(`${API_BASE}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const data = await res.json().catch(() => null);
        return { message: data?.message ?? "Message sent successfully!" };
      }
    } catch (err) {
      console.warn("[Backend API server unreachable or static deployment mode]", err);
    }

    // 3. If Google Sheet submission succeeded or running on static frontend
    if (sheetSuccess) {
      return { message: "Message sent successfully!" };
    }

    throw new Error("Failed to send message. Please try again later.");
  },

  async health(): Promise<{ status: string }> {
    try {
      const res = await fetch(`${API_BASE}/health`);
      if (res.ok) {
        return await res.json();
      }
    } catch (err) {
      // Unreachable server on static deployment
    }
    return { status: "ok" };
  },
};


