import type { ContactPayload } from "../schemas/contact.js";

export const TARGET_GOOGLE_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/1KdcDSPdn_dODVah6Z2u9MCLCNlf3vRZG6-5kxZLb0qc/edit?gid=0#gid=0";

export async function saveToGoogleSheet(payload: ContactPayload): Promise<boolean> {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

  if (!webhookUrl) {
    console.log(
      `[GoogleSheet] Message saved locally. To push directly to your Google Sheet (${TARGET_GOOGLE_SHEET_URL}), add GOOGLE_SHEETS_WEBHOOK_URL to server/.env`
    );
    return false;
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      redirect: "follow",
      body: JSON.stringify({
        timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        name: payload.name,
        email: payload.email,
        message: payload.message,
        sheetUrl: TARGET_GOOGLE_SHEET_URL,
      }),
    });

    if (!res.ok && res.status !== 0) {
      console.error(`[GoogleSheet] Webhook failed with status ${res.status}`);
      return false;
    }

    console.log(`[GoogleSheet] Successfully forwarded message from ${payload.name} to Google Sheet!`);
    return true;
  } catch (error) {
    console.error("[GoogleSheet] Error forwarding message to Google Sheet webhook:", error);
    return false;
  }
}
