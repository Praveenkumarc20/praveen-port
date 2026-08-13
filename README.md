# Praveen Kumar — Full Stack Portfolio

A modern, scalable, full-stack portfolio built with **React 18 + TypeScript + Vite** on the frontend and **Node.js + Express + TypeScript** on the backend.

## Tech Stack

### Frontend (`client/`)
- **React 18** with hooks-based architecture
- **TypeScript** (strict mode)
- **Vite 5** for fast dev server & optimized builds
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for scroll-reveal and UI animations
- **Lucide Icons**

### Backend (`server/`)
- **Express 4** REST API
- **Zod** for request validation
- **Nodemailer** for sending contact form messages via SMTP (optional)
- JSON-file message store (zero-config persistence)
- In-memory rate limiting + centralized error handling

## Project Structure

```
├── client/                  # React frontend
│   ├── public/              # static assets (images, resume PDF)
│   └── src/
│       ├── components/
│       │   ├── layout/      # Navbar, Footer
│       │   ├── sections/    # Hero, About, Skills, Experience, Projects, Contact
│       │   └── ui/          # reusable primitives (Reveal, Badge, Timeline…)
│       ├── data/            # all content lives here — edit this to update the site
│       ├── hooks/           # useActiveSection, useTypewriter
│       ├── lib/             # API client
│       └── types/           # shared TypeScript types
├── server/                  # Express backend
│   └── src/
│       ├── routes/          # /api/contact, /api/health
│       ├── middleware/      # rate limiter, error handlers
│       ├── lib/             # mailer, message store
│       └── schemas/         # Zod validation
└── package.json             # npm workspaces + orchestration scripts
```

## Getting Started

> Requires **Node.js ≥ 18** (tested on Node 24).

```bash
# 1. Install all dependencies (client + server)
npm install

# 2. Run client + server together in dev mode
npm run dev
```

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

The Vite dev server proxies `/api/*` to the backend, so the contact form works out of the box.

## Commands

| Command              | Description                          |
| -------------------- | ------------------------------------ |
| `npm run dev`        | Run client + server in dev mode      |
| `npm run dev:client` | Run only the Vite frontend           |
| `npm run dev:server` | Run only the Express backend         |
| `npm run build`      | Build the client for production      |
| `npm run start`      | Run the compiled server              |
| `npm run typecheck`  | Type-check both workspaces           |

## Configuring Email Notifications

By default, contact messages are stored in `server/data/messages.json` and the API still returns success. To also receive them by email:

1. Copy `server/.env.example` to `server/.env`.
2. Fill in your SMTP credentials (Gmail works with an app password).
3. Restart the server. The log will confirm `SMTP configured`.

## Customizing Content

All text, projects, skills, links and images are driven by `client/src/data/content.ts` — edit that single file to update the whole site. Asset paths point to `client/public/`.

## Production Deployment

```bash
npm run build        # outputs static site to client/dist
npm run start        # serves the API (client can be served by any static host)
```

Point the built `client/dist` at any static host/CDN and run the Express server behind it, with `CLIENT_ORIGIN` set to your domain.
