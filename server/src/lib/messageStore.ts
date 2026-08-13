import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { ContactPayload } from "../schemas/contact.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.resolve(__dirname, "../../data");
const MESSAGES_FILE = path.join(DATA_DIR, "messages.json");

export interface StoredMessage extends ContactPayload {
  id: string;
  receivedAt: string;
}

interface MessageRecord {
  messages: StoredMessage[];
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

async function ensureFile(): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  try {
    await readFile(MESSAGES_FILE, "utf-8");
  } catch {
    await writeFile(MESSAGES_FILE, JSON.stringify({ messages: [] }, null, 2), "utf-8");
  }
}

export async function listMessages(): Promise<StoredMessage[]> {
  await ensureFile();
  try {
    const raw = await readFile(MESSAGES_FILE, "utf-8");
    const data = JSON.parse(raw) as MessageRecord;
    return data.messages || [];
  } catch (err) {
    console.error("[messageStore] Resetting corrupted messages.json", err);
    await writeFile(MESSAGES_FILE, JSON.stringify({ messages: [] }, null, 2), "utf-8");
    return [];
  }
}

export async function saveMessage(payload: ContactPayload): Promise<StoredMessage> {
  await ensureFile();
  const messages = await listMessages();

  const record: StoredMessage = {
    ...payload,
    id: generateId(),
    receivedAt: new Date().toISOString(),
  };

  messages.push(record);
  await writeFile(MESSAGES_FILE, JSON.stringify({ messages }, null, 2), "utf-8");
  return record;
}
