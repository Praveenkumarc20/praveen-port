import "dotenv/config";
import { createApp } from "./app.js";

const PORT = Number(process.env.PORT ?? 5000);

const app = createApp();

app.listen(PORT, () => {
  console.log(`[server] API running at http://localhost:${PORT}`);
  console.log(`[server] SMTP ${process.env.SMTP_HOST ? "configured" : "not configured (messages still stored)"}`);
});
