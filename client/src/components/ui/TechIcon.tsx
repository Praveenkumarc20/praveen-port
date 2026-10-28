interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

export function TechIcon({ name, size = 32, className = "" }: TechIconProps) {
  const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // 1. FastAPI
  if (key.includes("fastapi")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <circle cx="64" cy="64" r="58" fill="#05998B" />
        <path d="M72 18L34 72h26l-8 38 42-58H68l12-34z" fill="#FFFFFF" />
      </svg>
    );
  }

  // 2. PostgreSQL
  if (key.includes("postgres")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path
          fill="#336791"
          d="M63.7 12c-28.5 0-51.7 23.2-51.7 51.7 0 13.9 5.5 26.5 14.5 35.8l-1.8 16.5 16.3-4.7c6.8 2.6 14.3 4.1 22.1 4.1 28.5 0 51.7-23.2 51.7-51.7S92.2 12 63.7 12z"
        />
        <path
          fill="#FFFFFF"
          d="M86.8 54.3c-1.3-4.1-3.9-9.1-8.2-12.7-4.3-3.6-9.9-5.1-15.5-5.1-6.1 0-11.8 2.1-16.1 5.9-4.3 3.8-6.9 9-7.9 14.7l6.9 1.4c.7-4.4 2.6-8.2 5.8-11 3.2-2.8 7.3-4.2 11.9-4.2 4.1 0 8 1.1 11.1 3.7 3.1 2.6 5.1 6.3 6 9.3l6-2z"
        />
        <path
          fill="#FFFFFF"
          d="M62.5 56.4c-8.9 0-16.1 6.8-16.1 15.3 0 5.4 3 10.2 7.5 12.8l2-16.8 9.8 1.4-1.9 17.7c6.9-1.2 12.1-7.1 12.1-14.4 0-9-6.9-16-13.4-16z"
        />
        <circle cx="53" cy="53" r="3.5" fill="#336791" />
        <circle cx="73" cy="53" r="3.5" fill="#336791" />
      </svg>
    );
  }

  // 3. Linux
  if (key.includes("linux")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="28" fill="#18181B" stroke="#FACC15" strokeWidth="4" />
        <path d="M42 42l22 22-22 22" stroke="#FACC15" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="72" y1="86" x2="94" y2="86" stroke="#22D3EE" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  }

  // 4. LangChain
  if (key.includes("langchain")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0C1B1B" stroke="#00A67E" strokeWidth="4" />
        <path d="M40 76c-8.8 0-16-7.2-16-16s7.2-16 16-16h16v12H40c-2.2 0-4 1.8-4 4s1.8 4 4 4h16v12H40z" fill="#00A67E" />
        <path d="M88 52c8.8 0 16 7.2 16 16s-7.2 16-16 16H72V72h16c2.2 0 4-1.8 4-4s-1.8-4-4-4H72V52h16z" fill="#38BDF8" />
        <rect x="50" y="58" width="28" height="12" rx="4" fill="#FACC15" />
      </svg>
    );
  }

  // 5. LangGraph
  if (key.includes("langgraph")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0F172A" stroke="#38BDF8" strokeWidth="3" />
        <circle cx="36" cy="40" r="14" fill="#00A67E" />
        <circle cx="92" cy="40" r="14" fill="#38BDF8" />
        <circle cx="64" cy="88" r="14" fill="#A855F7" />
        <path d="M48 40h32M44 52l14 26M84 52L70 78" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }

  // 6. Generative AI
  if (key.includes("generative") || key === "genai") {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <defs>
          <linearGradient id="genai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
        </defs>
        <rect width="128" height="128" rx="24" fill="#090D16" />
        <path
          d="M64 16c0 26.5-21.5 48-48 48 26.5 0 48 21.5 48 48 0-26.5 21.5-48 48-48-26.5 0-48-21.5-48-48z"
          fill="url(#genai-grad)"
        />
        <circle cx="98" cy="30" r="10" fill="#FACC15" />
      </svg>
    );
  }

  // 7. Large Language Models (LLMs)
  if (key.includes("llm") || key.includes("largelanguage")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0A0F1D" stroke="#6366F1" strokeWidth="3" />
        <circle cx="34" cy="40" r="9" fill="#38BDF8" />
        <circle cx="34" cy="88" r="9" fill="#38BDF8" />
        <circle cx="64" cy="32" r="9" fill="#818CF8" />
        <circle cx="64" cy="64" r="11" fill="#C084FC" />
        <circle cx="64" cy="96" r="9" fill="#818CF8" />
        <circle cx="94" cy="64" r="11" fill="#22D3EE" />
        <path d="M42 43l14-6M42 46l14 14M42 85l14-17M42 88l14 6M74 36l12 21M74 64h10M74 92l12-21" stroke="#475569" strokeWidth="3" />
      </svg>
    );
  }

  // 8. Prompt Engineering
  if (key.includes("prompt")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0F172A" stroke="#22D3EE" strokeWidth="3" />
        <path d="M26 44l24 20-24 20" stroke="#22D3EE" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <line x1="58" y1="84" x2="82" y2="84" stroke="#FACC15" strokeWidth="7" strokeLinecap="round" />
        <path d="M96 28l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" fill="#A855F7" />
      </svg>
    );
  }

  // 9. LLM API Integration
  if (key.includes("llmapi")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0C1322" stroke="#38BDF8" strokeWidth="3" />
        <rect x="38" y="38" width="52" height="52" rx="12" fill="#1E293B" stroke="#22D3EE" strokeWidth="4" />
        <circle cx="64" cy="64" r="10" fill="#38BDF8" />
        <path d="M22 64h16M90 64h16M64 22v16M64 90v16" stroke="#818CF8" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  // 10. Structured Outputs
  if (key.includes("structured")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0B132B" stroke="#10B981" strokeWidth="3" />
        <text x="32" y="74" fill="#38BDF8" fontSize="48" fontWeight="bold" fontFamily="monospace">
          &#123;
        </text>
        <path d="M52 64l10 10 20-20" stroke="#10B981" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <text x="96" y="74" fill="#38BDF8" fontSize="48" fontWeight="bold" fontFamily="monospace">
          &#125;
        </text>
      </svg>
    );
  }

  // 11. Function Calling / Tool Calling
  if (key.includes("function") || key.includes("toolcalling")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#13192B" stroke="#F59E0B" strokeWidth="3" />
        <path d="M36 44l16 20-16 20M92 44L76 64l16 20" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="64" cy="64" r="14" fill="#F59E0B" />
        <circle cx="64" cy="64" r="6" fill="#13192B" />
      </svg>
    );
  }

  // 12. Retrieval-Augmented Generation (RAG)
  if (key.includes("rag") || key.includes("retrieval")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0A1128" stroke="#06B6D4" strokeWidth="3" />
        {/* Document stack */}
        <rect x="28" y="32" width="40" height="52" rx="6" fill="#1E293B" stroke="#94A3B8" strokeWidth="3" />
        <line x1="38" y1="46" x2="58" y2="46" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
        <line x1="38" y1="56" x2="54" y2="56" stroke="#94A3B8" strokeWidth="3" strokeLinecap="round" />
        {/* Loop Arrow */}
        <path d="M68 50c16-10 32-4 34 14 2 18-14 26-26 24" stroke="#06B6D4" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M72 92l-8-6 8-6" fill="#06B6D4" />
        <circle cx="86" cy="68" r="8" fill="#FACC15" />
      </svg>
    );
  }

  // 13. Text Embeddings
  if (key.includes("embedding")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0C1527" stroke="#8B5CF6" strokeWidth="3" />
        <circle cx="36" cy="44" r="7" fill="#38BDF8" />
        <circle cx="84" cy="34" r="9" fill="#EC4899" />
        <circle cx="60" cy="74" r="10" fill="#8B5CF6" />
        <circle cx="96" cy="88" r="7" fill="#10B981" />
        <circle cx="32" cy="94" r="6" fill="#FACC15" />
        <path d="M36 44L60 74M84 34L60 74M60 74L96 88M60 74L32 94" stroke="#334155" strokeWidth="3" strokeDasharray="4 4" />
      </svg>
    );
  }

  // 14. Semantic Search
  if (key.includes("semantic") || key.includes("search")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0A1424" stroke="#0EA5E9" strokeWidth="3" />
        <circle cx="56" cy="56" r="26" stroke="#0EA5E9" strokeWidth="7" fill="none" />
        <line x1="75" y1="75" x2="100" y2="100" stroke="#0EA5E9" strokeWidth="8" strokeLinecap="round" />
        <circle cx="56" cy="56" r="8" fill="#FACC15" />
        <circle cx="48" cy="48" r="3" fill="#38BDF8" />
        <circle cx="64" cy="48" r="3" fill="#A855F7" />
      </svg>
    );
  }

  // 15. Vector Databases
  if (key.includes("vector")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#081826" stroke="#10B981" strokeWidth="3" />
        {/* Isometric Cube */}
        <path d="M64 24l36 20v40L64 104 28 84V44z" stroke="#10B981" strokeWidth="4" fill="#0F2D3A" />
        <path d="M64 24v40l36 20M64 64L28 84" stroke="#22D3EE" strokeWidth="4" />
        <circle cx="64" cy="64" r="6" fill="#FACC15" />
      </svg>
    );
  }

  // 16. Document Processing
  if (key.includes("document") || key.includes("doc")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0E1726" stroke="#64748B" strokeWidth="3" />
        <rect x="36" y="26" width="56" height="76" rx="8" fill="#1E293B" stroke="#94A3B8" strokeWidth="3" />
        <line x1="48" y1="44" x2="80" y2="44" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        <line x1="48" y1="58" x2="80" y2="58" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
        <line x1="48" y1="72" x2="68" y2="72" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
        <line x1="28" y1="64" x2="100" y2="64" stroke="#22D3EE" strokeWidth="3" strokeDasharray="3 3" />
      </svg>
    );
  }

  // 17. AI Chatbot Development
  if (key.includes("chatbot") || key.includes("chat")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0D192E" stroke="#38BDF8" strokeWidth="3" />
        {/* Chatbot Head */}
        <rect x="34" y="44" width="60" height="48" rx="14" fill="#1E293B" stroke="#22D3EE" strokeWidth="4" />
        <line x1="64" y1="26" x2="64" y2="44" stroke="#22D3EE" strokeWidth="4" strokeLinecap="round" />
        <circle cx="64" cy="24" r="6" fill="#FACC15" />
        <circle cx="50" cy="64" r="6" fill="#22D3EE" />
        <circle cx="78" cy="64" r="6" fill="#22D3EE" />
        <path d="M52 78c4 4 20 4 24 0" stroke="#FACC15" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // 18. AI Agent Development
  if (key.includes("agent")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#111827" stroke="#A855F7" strokeWidth="3" />
        <circle cx="64" cy="64" r="32" stroke="#A855F7" strokeWidth="4" strokeDasharray="8 6" fill="none" />
        <circle cx="64" cy="64" r="16" fill="#38BDF8" />
        <circle cx="64" cy="24" r="7" fill="#FACC15" />
        <circle cx="98" cy="74" r="6" fill="#10B981" />
        <circle cx="34" cy="80" r="6" fill="#EC4899" />
      </svg>
    );
  }

  // 19. Workflow Automation
  if (key.includes("workflow") || key.includes("automation")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0F172A" stroke="#F59E0B" strokeWidth="3" />
        <rect x="22" y="52" width="24" height="24" rx="6" fill="#38BDF8" />
        <rect x="82" y="32" width="24" height="24" rx="6" fill="#10B981" />
        <rect x="82" y="72" width="24" height="24" rx="6" fill="#A855F7" />
        <path d="M46 64h18M64 64V44h18M64 64v20h18" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" fill="none" />
      </svg>
    );
  }

  // 20. REST API Development
  if (key.includes("rest")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0F172A" stroke="#22D3EE" strokeWidth="3" />
        <rect x="28" y="34" width="72" height="28" rx="8" fill="#1E293B" stroke="#38BDF8" strokeWidth="2" />
        <text x="64" y="54" textAnchor="middle" fill="#22D3EE" fontSize="16" fontWeight="bold" fontFamily="monospace">
          GET /api
        </text>
        <rect x="28" y="70" width="72" height="28" rx="8" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
        <text x="64" y="90" textAnchor="middle" fill="#10B981" fontSize="16" fontWeight="bold" fontFamily="monospace">
          POST /v1
        </text>
      </svg>
    );
  }

  // 21. API Integration
  if (key.includes("apiintegration") || key.includes("integration")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0B132B" stroke="#6366F1" strokeWidth="3" />
        <path d="M32 44h28a12 12 0 0 1 12 12v16a12 12 0 0 1-12 12H32" stroke="#6366F1" strokeWidth="6" strokeLinecap="round" fill="none" />
        <path d="M96 84H68a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h28" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" fill="none" />
        <circle cx="64" cy="64" r="6" fill="#FACC15" />
      </svg>
    );
  }

  // 22. Cloud Deployment
  if (key.includes("cloud") || key.includes("deploy")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0A1628" stroke="#38BDF8" strokeWidth="3" />
        <path
          d="M40 76c-8.8 0-16-7.2-16-16 0-7.7 5.5-14.2 12.8-15.6C38.2 34 46.8 26 57 26c9.5 0 17.6 6.8 19.5 16 2.3-.6 4.7-1 7.2-1 11.2 0 20.3 9.1 20.3 20.3 0 .7 0 1.5-.1 2.2C108 65.5 112 72 112 79c0 9.4-7.6 17-17 17H40c-8.8 0-16-7.2-16-16z"
          fill="#1E293B"
          stroke="#38BDF8"
          strokeWidth="3"
        />
        <path d="M64 92V62m0 0l-10 10m10-10l10 10" stroke="#FACC15" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  // 23. API Testing
  if (key.includes("testing") || key.includes("test")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0F172A" stroke="#10B981" strokeWidth="3" />
        <path d="M64 24L36 38v30c0 20 16 34 28 38 12-4 28-18 28-38V38L64 24z" fill="#132A24" stroke="#10B981" strokeWidth="4" />
        <path d="M52 66l8 8 18-18" stroke="#34D399" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }

  // 24. SQL
  if (key === "sql" || (key.includes("sql") && !key.includes("my") && !key.includes("post"))) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0A1A2F" stroke="#00758F" strokeWidth="3" />
        <ellipse cx="64" cy="38" rx="36" ry="14" fill="#00758F" />
        <path d="M28 38v24c0 8 16 14 36 14s36-6 36-14V38" stroke="#22D3EE" strokeWidth="4" fill="none" />
        <path d="M28 62v24c0 8 16 14 36 14s36-6 36-14V62" stroke="#22D3EE" strokeWidth="4" fill="none" />
      </svg>
    );
  }

  // React
  if (key.includes("react")) {
    return (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" fill="none" className={className}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    );
  }

  // Next.js
  if (key.includes("next")) {
    return (
      <svg width={size} height={size} viewBox="0 0 180 180" fill="none" className={className}>
        <mask id="nextjs-mask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180" style={{ maskType: "alpha" }}>
          <circle cx="90" cy="90" r="90" fill="#000" />
        </mask>
        <g mask="url(#nextjs-mask)">
          <circle cx="90" cy="90" r="90" fill="#000" stroke="#fff" strokeWidth="6" />
          <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.16 149.508 157.52Z" fill="url(#nextjs-grad)" />
          <rect x="115" y="54" width="12" height="72" fill="url(#nextjs-grad2)" />
        </g>
        <defs>
          <linearGradient id="nextjs-grad" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nextjs-grad2" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // TypeScript
  if (key.includes("typescript") || key === "ts") {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path d="M72.1 76.6c1.6 2.8 4 4.8 7.3 6.1 3.3 1.3 7 2 11.2 2 4.1 0 7.7-.6 10.7-1.8 3-1.2 5.3-3 6.9-5.3s2.4-5.1 2.4-8.3c0-2.8-.7-5.1-2.1-7.1-1.4-2-3.3-3.6-5.8-4.8-2.5-1.2-5.7-2.3-9.5-3.3-4.2-1.1-7.7-2.2-10.6-3.4-2.9-1.2-5.1-2.7-6.8-4.7-1.6-2-2.5-4.6-2.5-7.9 0-3.6 1-6.7 3.1-9.3 2.1-2.6 5-4.6 8.8-6 3.8-1.4 8.2-2.1 13.2-2.1 5.4 0 10.1.9 14.2 2.8 4.1 1.9 7.2 4.6 9.4 8.2l-10.4 6.7c-1.4-2.3-3.3-4-5.6-5-2.3-1-5.1-1.5-8.3-1.5-3.3 0-6.1.6-8.5 1.7-2.4 1.1-4.1 2.7-5.3 4.8-1.1 2-1.7 4.3-1.7 6.9 0 2.5.6 4.7 1.9 6.5 1.3 1.8 3.1 3.3 5.4 4.4 2.4 1.1 5.3 2.1 8.9 3.1 4.5 1.2 8.3 2.4 11.4 3.7 3.1 1.3 5.6 3 7.3 5.1 1.8 2.2 2.6 4.9 2.6 8.3 0 3.7-1 7-3.1 9.9-2.1 2.9-5.1 5.1-9 6.7-3.9 1.6-8.6 2.4-14 2.4-6.4 0-12-1.2-16.7-3.6-4.7-2.4-8.2-6-10.6-10.7l10.9-6.9zM16.4 32.1h47.7v12.2H42.7v69.6H28.4V44.3H16.4V32.1z" fill="#FFF" />
      </svg>
    );
  }

  // JavaScript
  if (key.includes("javascript") || key === "js") {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="16" fill="#F7DF1E" />
        <path d="M67.3 90.5c1.6 2.8 3.8 4.7 6.6 5.8 2.8 1.1 6.1 1.7 9.8 1.7 3.5 0 6.6-.5 9.1-1.6 2.6-1 4.6-2.5 5.9-4.4 1.3-1.9 2-4.1 2-6.7 0-2.3-.6-4.3-1.7-5.9-1.1-1.6-2.7-3-4.7-4-2-1-4.7-2-8-2.9-4.3-1.1-7.8-2.3-10.7-3.4-2.8-1.2-5-2.7-6.5-4.6-1.5-1.9-2.3-4.4-2.3-7.5 0-3.5 1-6.5 2.9-9 2-2.5 4.7-4.4 8.2-5.7 3.5-1.3 7.6-1.9 12.3-1.9 4.7 0 8.8.8 12.4 2.4 3.5 1.6 6.3 4 8.2 7.1l-9.9 6.4c-1.3-2.1-3-3.6-4.9-4.5-2-1-4.4-1.4-7.2-1.4-3 0-5.4.5-7.3 1.5-1.9 1-3.3 2.4-4.2 4.1-.9 1.7-1.4 3.7-1.4 5.9 0 2.2.5 4 1.6 5.5 1.1 1.5 2.6 2.7 4.5 3.6 2 1 4.4 1.8 7.4 2.7 4.6 1.3 8.5 2.5 11.6 3.8 3.1 1.3 5.5 3 7.2 5.1 1.7 2.1 2.5 4.8 2.5 8.1 0 3.7-.9 6.9-2.8 9.7-1.9 2.8-4.6 5-8.2 6.5-3.6 1.5-7.9 2.3-13 2.3-6.1 0-11.3-1.2-15.6-3.5-4.3-2.3-7.5-5.8-9.6-10.4l10.8-6.3zM23.3 87.7c1.3 2.5 3.1 4.3 5.4 5.4 2.3 1.1 5.1 1.7 8.4 1.7 3.3 0 6.1-.6 8.3-1.7 2.2-1.2 3.8-3 4.9-5.5 1.1-2.5 1.6-5.8 1.6-9.8V32.1h14.3v45.9c0 6.1-.9 11.2-2.8 15.2-1.9 4.1-4.7 7.2-8.5 9.3-3.8 2.1-8.6 3.2-14.3 3.2-6.5 0-11.8-1.4-15.9-4.1-4.1-2.7-7-6.8-8.8-12.2l12.4-6.3c1.1 2.1 2.4 3.6 4.1 4.6z" fill="#000" />
      </svg>
    );
  }

  // Tailwind CSS
  if (key.includes("tailwind")) {
    return (
      <svg width={size} height={size} viewBox="0 0 48 48" fill="none" className={className}>
        <path d="M24 10C16 10 11.5 15.333 10.5 26C14 22 18 20.667 22.5 22C25.5 22.889 27.5 24.967 29.8 27.356C33.3 31.002 37.5 35.333 45.5 35.333C53.5 35.333 58 30 59 19.333C55.5 23.333 51.5 24.667 47 23.333C44 22.444 42 20.366 39.7 17.977C36.2 14.331 32 10 24 10Z" transform="scale(0.8) translate(-6, 2)" fill="#38BDF8" />
        <path d="M10.5 24C2.5 24 -2 29.333 -3 40C0.5 36 4.5 34.667 9 36C12 36.889 14 38.967 16.3 41.356C19.8 45.002 24 49.333 32 49.333C40 49.333 44.5 44 45.5 33.333C42 37.333 38 38.667 33.5 37.333C30.5 36.444 28.5 34.366 26.2 31.977C22.7 28.331 18.5 24 10.5 24Z" transform="scale(0.8) translate(-6, 2)" fill="#38BDF8" />
      </svg>
    );
  }

  // HTML5
  if (key.includes("html")) {
    return (
      <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
        <path fill="#E34F26" d="M71 460L30 0h452l-41 460-185 52z" />
        <path fill="#EF652A" d="M256 472l149-41 35-394H256z" />
        <path fill="#EBEBEB" d="M256 208h-74l-5-57h79V95H119l15 169h122zm0 152l-64-17-4-47h-57l8 88 117 32z" />
        <path fill="#FFF" d="M256 208v56h70l-7 74-63 17v56l117-32 16-171zm0-113v56h134l5-56z" />
      </svg>
    );
  }

  // WordPress
  if (key.includes("wordpress")) {
    return (
      <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
        <path fill="#21759B" d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256 114.6 0 256 0s256 114.6 256 256z" />
        <path fill="#FFF" d="M28.2 256c0 102.8 67.4 190 161.4 220.1L62.7 172.9C40.6 197.6 28.2 225.4 28.2 256zm398.2-12.7c0-26.6-9.6-45-17.8-59.5-10.9-18.4-21.2-34.1-21.2-52.6 0-20.5 15.7-39.6 37.6-39.6 1 .2 2 .5 3 .8C380.9 50.1 321.3 25.1 256 25.1c-62.7 0-120.3 23.3-164.5 61.9 4.3.4 8.7.6 12.6.6 20.5 0 52.3-2.7 52.3-2.7 10.6-.7 11.9 14.6 1.4 16 0 0-10.7 1.3-22.6 2l72.1 214.5 43.3-129.9-30.8-92.6c-10.6-.7-20.7-2-20.7-2-10.6-.7-9.3-16.7 1.3-16 0 0 32.5 2.7 52.3 2.7 20.5 0 52.3-2.7 52.3-2.7 10.6-.7 11.9 14.6 1.3 16 0 0-10.7 1.3-22.6 2l71.4 212.1 19.7-65.7c8.5-27.4 14.9-47.2 14.9-64.2zm-221.7 78.4l-60.6 176c22.6 6.7 46.5 10.3 71.3 10.3 29.5 0 57.7-5.2 83.8-14.7l-94.5-171.6zm238.4-106.8c.8 6.4 1.3 13.3 1.3 20.7 0 29.4-5.5 62.2-22 103.2l-62.2 179.8c97.7-28.1 169-118.5 169-224.9 0-33.1-6.8-64.5-19.1-93.1-2.4 4.5-4.7 9.4-7 14.3z" />
      </svg>
    );
  }

  // Elementor
  if (key.includes("elementor")) {
    return (
      <svg width={size} height={size} viewBox="0 0 512 512" className={className}>
        <rect width="512" height="512" rx="100" fill="#92003B" />
        <path fill="#FFF" d="M176 160h48v192h-48zm80 0h128v48H256zm0 72h80v48h-80zm0 72h128v48H256z" />
      </svg>
    );
  }

  // Java
  if (key.includes("java") && !key.includes("script")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path d="M46.7 97.4c-9.7 2.1-13.7 7.7-5.1 10 9 2.4 26.6 2.3 39.5.4 3.7-.6 7.4-1.3 10.7-2.3 8.3-2.5 4.3-7.5-6.6-9.6-11.7-2.3-28.8-1-38.5 1.5zm-5.7-18c-8.9 2-12.6 7.6-4.7 9.8 9.3 2.7 29.3 2.5 44 .4 4.3-.6 8.5-1.5 12.3-2.5 7.8-2.1 4.1-7.1-5.9-9.1-12.8-2.6-35.9-1.2-45.7 1.4zm23.6-21.7c4 4.8-2.9 9.3-8.2 13-10.2 7-19.3 7.8-26.2 7.8-3.4 0-5.7-.2-6.5-.4-1.1-.3-1.6-.7-1.6-1.1 0-1.2 4.4-3.2 10.9-6.3 9.4-4.5 24-9.9 31.6-13zm-11-20.7c5.2 6.1-3.6 11.7-10.6 16.5-13.1 8.9-24.8 9.9-33.8 9.9-4.3 0-7.3-.2-8.3-.5-1.4-.4-2.1-.9-2.1-1.4 0-1.5 5.7-4 14-8 12.1-5.8 30.9-12.7 40.8-16.5z" fill="#5382A1" />
        <path d="M52.3 121.2c16.3 1 36.3-.5 47-8.7-3.9 3.5-10.8 5.6-19.4 6.7-14.8 1.9-35.5 1.7-47.5-.2-2.7-.4-4.7-1-6.1-1.6 7.4 2.5 17.5 3.3 26 3.8zm39.1-39.7c7.2 4.1 6.8 8.1 4.3 12.2 4.7-4.4 5.9-9.3.9-13.8-1.5-1.4-3.3-2.5-5.2-3.4-3.4-1.6-7.3-2.9-11.4-3.8 7 2.1 11.2 5.1 11.4 8.8zm-22.7-56.1c6.5 7.5-4.5 14.5-13.2 20.4-16.3 11.1-31 12.3-42.1 12.3-5.4 0-9.1-.3-10.4-.6-1.8-.4-2.7-1.1-2.7-1.8 0-1.9 7.1-5 17.4-10 15.2-7.3 38.6-15.9 51-20.3zm18.8 45.4c12.3-14.3-6.5-27.4-6.5-27.4s11.5 10.4 2.6 20.7c-8 9.2-19.8 14-16.1 22.8 5.6-3.8 13.9-8.4 20-16.1z" fill="#E76F00" />
      </svg>
    );
  }

  // Spring Boot
  if (key.includes("spring")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#6DB33F" d="M116.5 53.6C112.9 39.8 98.7 15.8 65.6 13c-1.5-.1-3 .4-3.9 1.5-1 1-1.2 2.6-.7 3.9 3.1 8 4 19.3-1.6 27.9-5.1 7.8-13.6 12.4-23.4 12.8-1.5.1-2.9 1-3.6 2.3-.7 1.4-.6 3 .3 4.2 5.4 7.6 15.3 12.3 26 12.3 1.9 0 3.8-.1 5.8-.4 10.6-1.5 20.3-6.9 27.4-15 9.7-11.1 16.5-5.1 21.2 0 1 1.1 2.5 1.6 4 1.3 1.4-.3 2.5-1.4 2.9-2.8 1.1-3.1 2.2-6.5 2.5-7.6z" />
        <path fill="#6DB33F" d="M59.8 77.4c-6.8 0-13.1-2.9-16.7-7.6-4.5 4.9-10.9 7.7-17.6 7.7-5.9 0-11.4-2.1-15.7-6-1.1-1-2.8-1.1-4-.2-1.2.9-1.6 2.5-1.1 3.9 4.3 11.9 15.4 19.8 28 19.8 4.7 0 9.2-1.1 13.3-3.2 4.1 3.4 9.2 5.3 14.7 5.3 11 0 20.6-6.6 24.8-16.3-8.8-1.6-17.6-3.4-25.7-3.4z" />
        <path fill="#FFF" d="M64 45c-10.5 0-19 8.5-19 19s8.5 19 19 19 19-8.5 19-19-8.5-19-19-19zm0 30c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z" />
        <path fill="#FFF" d="M60.5 35h7v18h-7z" />
      </svg>
    );
  }

  // Node.js
  if (key.includes("node")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#5FA04E" d="M64 8.7L12.4 38.5v59.6L64 128l51.6-29.9V38.5L64 8.7zm0 14.1l39.5 22.8v45.6L64 114 24.5 91.2V45.6L64 22.8z" />
        <path fill="#5FA04E" d="M64 36.3L36 52.5v32.4l28 16.2 28-16.2V52.5L64 36.3z" />
      </svg>
    );
  }

  // Express.js
  if (key.includes("express")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="20" fill="#1e293b" />
        <text x="64" y="78" textAnchor="middle" fill="#FFFFFF" fontSize="42" fontWeight="800" fontFamily="sans-serif">
          ex
        </text>
      </svg>
    );
  }

  // Python
  if (key.includes("python")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#3776AB" d="M63.6 8C38.2 8 39.8 19 39.8 19l.1 11.4h24.4v3.4H23.5S8 32.1 8 57.5c0 25.5 13.5 24.6 13.5 24.6h8.1V70.2s-.4-13.9 13.7-13.9h23.7s13.3.2 13.3-13.1V19.7S84.7 8 63.6 8zm-13.1 7.4c2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7z" />
        <path fill="#FFD43A" d="M64.4 120c25.4 0 23.8-11 23.8-11l-.1-11.4H63.7v-3.4h40.8s15.5 1.7 15.5-23.7c0-25.5-13.5-24.6-13.5-24.6h-8.1v11.9s.4 13.9-13.7 13.9H41s-13.3-.2-13.3 13.1v23.5s-2.4 11.7 18.7 11.7zm13.1-7.4c-2.6 0-4.7-2.1-4.7-4.7 0-2.6 2.1-4.7 4.7-4.7 2.6 0 4.7 2.1 4.7 4.7 0 2.6-2.1 4.7-4.7 4.7z" />
      </svg>
    );
  }

  // PHP
  if (key.includes("php")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <ellipse cx="64" cy="64" rx="60" ry="38" fill="#777BB4" />
        <text x="64" y="74" textAnchor="middle" fill="#FFFFFF" fontSize="34" fontWeight="900" fontFamily="sans-serif">
          PHP
        </text>
      </svg>
    );
  }

  // MySQL
  if (key.includes("mysql")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#00758F" d="M102 36c-18-12-42-14-64-5C20 39 8 58 8 78c0 14 7 26 18 33 2 1 5 1 7-1 2-2 1-5-1-7-8-6-14-15-14-25 0-16 10-31 24-38 18-9 39-7 55 3 2 1 5 1 6-1 2-2 1-5-1-6z" />
        <path fill="#F29111" d="M120 72c0-8-5-15-12-18-2-1-5 0-6 2s0 5 2 6c5 3 8 7 8 12 0 10-8 18-18 18-2 0-4 0-6-1-2-1-5 0-6 2s0 5 2 6c3 1 7 2 10 2 16 0 28-10 28-23z" />
        <text x="64" y="72" textAnchor="middle" fill="#00758F" fontSize="22" fontWeight="900" fontFamily="sans-serif">
          MySQL
        </text>
      </svg>
    );
  }

  // MongoDB
  if (key.includes("mongo")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#47A248" d="M62.6 6.3c-1.3-.8-3-.8-4.3 0C54.1 8.9 16 33.4 16 75.3c0 26.6 19.3 43.8 45.4 46.5 1.5.1 2.9-.6 3.6-1.9 4.3-7.8 7.3-17.7 7.3-30.8 0-42.3-9.7-82.8-9.7-82.8zm2.8 119c26.1-2.7 45.4-19.9 45.4-46.5 0-41.9-38.1-66.4-42.3-69-1.3-.8-3-.8-4.3 0 0 0-4.9 20.3-6.6 44.8 7.5 15.6 11.2 36.9 7.8 70.7z" />
      </svg>
    );
  }

  // Redis
  if (key.includes("redis")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#D82C20" d="M16 48l48-24 48 24-48 24-48-24z" />
        <path fill="#A32017" d="M16 48v32l48 24V72L16 48z" />
        <path fill="#C1261B" d="M112 48v32l-48 24V72l48-24z" />
        <circle cx="64" cy="48" r="8" fill="#FFF" opacity="0.9" />
      </svg>
    );
  }

  // Docker
  if (key.includes("docker")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#2496ED" d="M123.6 57.6c-1.9-1.4-6-1.7-9.4-.9-.8-6.1-5.1-11.2-11.2-13.1l-2.4-.8-1.5 2.1c-4.4 6-5.7 13.5-3.6 20.6-2.5 1.4-6.8 2.5-12.7 2.5H6.2c-2.3 8.3-1.6 17.5 2.3 25.5 8.1 16.5 25.7 27.6 44 27.6 30.7 0 57.5-19.4 66.8-48.4 6.7.4 12.8-2.6 14.7-4.9 1.4-1.7 1.8-4.1.8-6.1-.8-1.7-2.3-3.1-3.6-4.1zm-48.9-3.7h13.2v12.4H74.7V53.9zm-16.1 0h13.2v12.4H58.6V53.9zm-16.2 0h13.2v12.4H42.4V53.9zm-16.1 0h13.2v12.4H26.3V53.9zm32.3-15h13.2v12.4H58.6V38.9zm-16.2 0h13.2v12.4H42.4V38.9zm-16.1 0h13.2v12.4H26.3V38.9zm16.1-15h13.2v12.4H42.4V23.9z" />
      </svg>
    );
  }

  // Git / GitHub
  if (key.includes("git")) {
    if (key.includes("hub")) {
      return (
        <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
          <path fill="#FFFFFF" d="M64 8a56 56 0 0 0-17.7 109.1c2.8.5 3.8-1.2 3.8-2.7v-10.4c-15.6 3.4-18.9-6.6-18.9-6.6-2.5-6.5-6.2-8.2-6.2-8.2-5.1-3.5.4-3.4.4-3.4 5.6.4 8.6 5.8 8.6 5.8 5 8.6 13.1 6.1 16.3 4.7.5-3.6 2-6.1 3.6-7.5-12.4-1.4-25.5-6.2-25.5-27.7 0-6.1 2.2-11.1 5.8-15-0.6-1.4-2.5-7.1.6-14.8 0 0 4.7-1.5 15.4 5.7a53.7 53.7 0 0 1 28 0c10.7-7.2 15.4-5.7 15.4-5.7 3.1 7.7 1.2 13.4.6 14.8 3.6 3.9 5.8 8.9 5.8 15 0 21.6-13.1 26.3-25.6 27.7 2 1.7 3.8 5.2 3.8 10.5v15.6c0 1.5 1 3.3 3.9 2.7A56 56 0 0 0 64 8z" />
        </svg>
      );
    }
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#F05032" d="M123.6 55.4L72.6 4.4c-4.5-4.5-11.8-4.5-16.3 0L42.5 18.2l20.7 20.7c4.8-1.6 10.4-.6 14.3 3.3 3.9 3.9 5 9.5 3.3 14.3l20 20c4.8-1.6 10.4-.6 14.3 3.3 5.4 5.4 5.4 14.1 0 19.5s-14.1 5.4-19.5 0c-4.2-4.2-5.2-10.4-3-15.3L73.9 65.3v35.8c1.3 1.1 2.4 2.5 3.2 4.2 3.6 7.3.7 16.3-6.6 20s-16.3.7-20-6.6c-3.6-7.3-.7-16.3 6.6-20 2.2-1.1 4.6-1.6 7-1.6v-36L43.4 81.4c-5.4 5.4-14.1 5.4-19.5 0s-5.4-14.1 0-19.5L56.3 29.5 4.4 81.4c-4.5 4.5-4.5 11.8 0 16.3l51 51c4.5 4.5 11.8 4.5 16.3 0l51.9-51.9c4.5-4.5 4.5-11.8 0-16.4z" />
      </svg>
    );
  }

  // Postman
  if (key.includes("postman") || key.includes("swagger")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <circle cx="64" cy="64" r="56" fill="#FF6C37" />
        <path fill="#FFF" d="M88.5 60.2c-1.3-3.6-4.2-6.5-8.2-8.1L45.4 39.8c-2.4-.9-5.1-.2-6.8 1.8-1.7 2-2 4.8-.8 7.1l14.2 27.5c2.4 4.7 7.2 7.7 12.5 7.7h23.9c1 0 1.8-.8 1.8-1.8 0-.9-.7-1.7-1.7-1.8z" />
      </svg>
    );
  }

  // Vercel
  if (key.includes("vercel")) {
    return (
      <svg width={size} height={size} viewBox="0 0 115 100" fill="currentColor" className={className}>
        <path d="M57.5 0L115 100H0L57.5 0Z" fill="#FFFFFF" />
      </svg>
    );
  }

  // Socket.io / BullMQ
  if (key.includes("socket") || key.includes("bullmq")) {
    return (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="24" fill="#0A0A0A" stroke="#22d3ee" strokeWidth="6" />
        <path d="M72 16L32 72h28l-8 40 40-56H64l8-40z" fill="#22d3ee" />
      </svg>
    );
  }

  // Fallback Modern Tech Badge
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-accent/10 border border-accent/30 text-accent font-bold text-xs uppercase ${className}`}
      style={{ width: size, height: size }}
    >
      {name.slice(0, 2)}
    </div>
  );
}
