import { Router } from "express";
import { ZodError } from "zod";
import { contactSchema } from "../schemas/contact.js";
import { saveMessage } from "../lib/messageStore.js";
import { sendContactEmail } from "../lib/mailer.js";
import { saveToGoogleSheet } from "../lib/googleSheet.js";
import { rateLimiter } from "../middleware/rateLimiter.js";

export const contactRouter = Router();

contactRouter.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

contactRouter.post("/contact", rateLimiter, async (req, res) => {
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    const details = parsed.error instanceof ZodError
      ? parsed.error.flatten().fieldErrors
      : {};
    return res.status(400).json({ message: "Validation failed", details });
  }

  const payload = parsed.data;
  const record = await saveMessage(payload);

  let emailSent = false;
  let sheetSaved = false;

  try {
    sheetSaved = await saveToGoogleSheet(payload);
  } catch (err) {
    console.error("[googleSheet]", err);
  }

  try {
    emailSent = await sendContactEmail(payload);
  } catch (err) {
    console.error("[mailer]", err);
  }

  return res.status(201).json({
    message: "Message received — thank you!",
    id: record.id,
    sheetSaved,
    emailSent,
  });
});
