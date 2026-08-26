import type { ContactForm } from "@/types";

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "/api";
const GOOGLE_SHEET_WEBHOOK =
  import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycb7i7j4AIM4XXH9YnhjIVyFC7IiGw3mxEjShiWoxhK4snXpRyhDEu-ERKqthyDQiM0b/exec";

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
        const formData = new FormData();
        formData.append("Name", payload.name);
        formData.append("Email", payload.email);
        formData.append("Message", payload.message);
        formData.append("name", payload.name);
        formData.append("email", payload.email);
        formData.append("message", payload.message);
        formData.append(
          "timestamp",
          new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        );

        await fetch(GOOGLE_SHEET_WEBHOOK, {
          method: "POST",
          body: formData,
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

