// ---------------------------------------------------------------------------
// SITE CONFIG
// Edit the values below — nothing else in the codebase needs to change to
// update your name, contact links, or GitHub username.
// ---------------------------------------------------------------------------

export const site = {
  name: "Sneha",
  role: "AI / Product / Data / Automation",
  institution: "NITK Surathkal",
  program: "B.Tech",
  graduation: "2027",
  githubUsername: "Sneha-17660",

  links: {
    email: "sneha.17659@gmail.com",
    linkedin: "https://www.linkedin.com/in/sneha-096823258/",
    github: "https://github.com/Sneha-17660",
  },

  seo: {
    title: "Sneha — AI, Data & Product Builder",
    description:
      "Engineering undergraduate at NITK Surathkal building AI-powered products, intelligent automation systems and data-driven applications.",
  },
};

export type ProjectId =
  | "claim-adjudicator"
  | "ai-ops-hub"
  | "capa-iq"
  | "rag-bi";

export interface CaseStudySection {
  heading: string;
  body?: string;
  list?: string[];
}

export interface Project {
  id: ProjectId;
  index: string;
  badge: string;
  tier: "flagship" | "second" | "supporting";
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  github?: string;
  caseStudy: CaseStudySection[];
}

export const projects: Project[] = [
  // -------------------------------------------------------------------------
  // 01 — FLAGSHIP
  // -------------------------------------------------------------------------
  {
    id: "claim-adjudicator",
    index: "01",
    badge: "01 / FLAGSHIP",
    tier: "flagship",
    title: "Plum OPD Claim Adjudicator",
    subtitle: "AI-Powered Claims Automation & Adjudication",
    description:
      "A full-stack AI claims adjudication platform that processes unstructured OPD claim documents, extracts and validates evidence using OCR and LLMs, and applies deterministic policy rules to automate decisions and route uncertain cases for manual review.",
    tech: [
      "Next.js",
      "React",
      "FastAPI",
      "Python",
      "Groq",
      "OCR",
      "SQL",
      "REST APIs",
    ],
    caseStudy: [
      {
        heading: "The Problem",
        body:
          "Manual OPD claim assessment requires reviewing documents, extracting relevant information, validating evidence and applying policy rules before reaching a decision.",
      },
      {
        heading: "The Solution",
        body:
          "Built an AI-assisted adjudication workflow combining document processing, OCR, LLM-based extraction, evidence validation and deterministic policy rules.",
      },
      {
        heading: "Architecture",
        body:
          "A claim document enters through the application, passes through OCR and LLM-based structuring, undergoes evidence validation and is then evaluated by a deterministic policy engine before producing an adjudication outcome.",
      },
      {
        heading: "AI Layer",
        list: [
          "OCR and document extraction",
          "LLM-based structuring",
          "Evidence extraction",
          "Prompt engineering",
          "Hallucination checks",
        ],
      },
      {
        heading: "Decision Layer",
        list: [
          "Coverage checks",
          "Exclusion checks",
          "Limit validation",
          "Co-pay rules",
          "Pre-authorization checks",
          "Fraud and anomaly checks",
        ],
      },
      {
        heading: "Human-in-the-Loop",
        body:
          "Claims with missing evidence, conflicting information or risk indicators can be routed to manual review instead of allowing the generative model to make an unsupported final decision.",
      },
      {
        heading: "Testing",
        list: [
          "Valid claims",
          "Missing information",
          "Inconsistent documents",
          "Hallucinated extraction",
          "Prompt injection",
          "Fraud indicators",
        ],
      },
      {
        heading: "Technology",
        list: [
          "Next.js",
          "React",
          "FastAPI",
          "Python",
          "Groq",
          "OCR",
          "SQL",
          "REST APIs",
        ],
      },
      {
        heading: "Key Learning",
        body:
          "The project reinforced the importance of separating probabilistic AI tasks such as document understanding from deterministic policy logic, while designing validation and manual-review paths for uncertain cases.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 02 — AI AUTOMATION
  // -------------------------------------------------------------------------
  {
    id: "ai-ops-hub",
    index: "02",
    badge: "02 / AI AUTOMATION",
    tier: "second",
    title: "AI Operations Hub",
    subtitle: "Intelligent Workflow Automation Platform",
    description:
      "An AI-powered operations platform designed to transform repetitive business workflows into structured, intelligent and automated processes.",
    tech: [
      "Python",
      "LLMs",
      "RAG",
      "FastAPI",
      "SQL",
      "APIs",
      "Automation",
    ],
    caseStudy: [
      {
        heading: "The Problem",
        body:
          "Businesses handle many repetitive operational tasks involving documents, requests, data and decisions, creating opportunities for intelligent automation.",
      },
      {
        heading: "The Idea",
        body:
          "Use AI to interpret unstructured inputs and convert them into structured insights, actions and automated workflows.",
      },
      {
        heading: "The System",
        body:
          "User or business input passes through an AI / LLM layer, which produces structured output. A workflow layer routes that output through data and API layers to generate an automated action or analytical result.",
      },
      {
        heading: "AI Layer",
        list: [
          "LLMs",
          "RAG",
          "Prompt engineering",
          "Tool calling",
          "Structured outputs",
          "AI workflows",
        ],
      },
      {
        heading: "Automation Layer",
        list: [
          "Workflow orchestration",
          "Task generation",
          "API interactions",
          "Data processing",
          "Automated analysis",
        ],
      },
      {
        heading: "Product Layer",
        list: [
          "User workflows",
          "Feature design",
          "Requirements",
          "UX",
          "Iteration",
        ],
      },
      {
        heading: "Tech Stack",
        list: [
          "Python",
          "FastAPI",
          "SQL",
          "RAG",
          "LLMs",
          "APIs",
          "Automation",
        ],
      },
      {
        heading: "Learnings",
        body:
          "Building the system required careful thinking around reliability, structured outputs, workflow design, user experience, automation opportunities and ambiguous inputs.",
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 03 — AI QUALITY
  // -------------------------------------------------------------------------
  {
    id: "capa-iq",
    index: "03",
    badge: "03 / AI QUALITY",
    tier: "supporting",
    title: "CAPA IQ",
    subtitle: "AI-Powered Supplier Quality Intelligence Platform",
    description:
      "An AI-powered quality management platform that transforms supplier defect records into structured root-cause analysis, corrective actions, verification plans and actionable quality insights.",
    tech: [
      "Python",
      "LLMs",
      "Groq",
      "SQL",
      "Streamlit",
      "AI Workflows",
      "Data Analytics",
    ],
    github:
      "https://github.com/Sneha-17660/capa-iq-ai-quality-management",
    caseStudy: [
      {
        heading: "Problem",
        body:
          "Supplier defect records can accumulate faster than teams can analyze them. Root-cause analysis, corrective actions and verification plans are often written manually, making the process slow and inconsistent.",
      },
      {
        heading: "Solution",
        body:
          "CAPA IQ validates incoming defect data and uses an AI analysis layer to generate structured 5-Why analysis, fishbone-style causal analysis, root causes, corrective actions and verification plans.",
      },
      {
        heading: "Architecture",
        body:
          "Defect data flows through validation, AI analysis, 5-Why reasoning and fishbone analysis to reach a root cause, which produces a corrective action and verification step.",
      },
      {
        heading: "AI Workflow",
        list: [
          "Defect data validation",
          "AI-assisted 5-Why analysis",
          "Fishbone / causal structuring",
          "Root-cause synthesis",
          "Corrective action drafting",
        ],
      },
      {
        heading: "Features",
        list: [
          "Defect intake",
          "Open CAPA tracking",
          "Supplier risk view",
          "Quality insight summaries",
        ],
      },
      {
        heading: "Technology",
        list: [
          "Python",
          "LLMs",
          "Groq",
          "SQL",
          "Streamlit",
          "AI Workflows",
          "Data Analytics",
        ],
      },
      {
        heading: "Learnings",
        body:
          "Quality workflows require structured and auditable reasoning rather than unrestricted generation, which shaped how the analysis layer's outputs are constrained and verified.",
      },
      {
        heading: "Future Improvements",
        list: [
          "Supplier-level trend analysis",
          "Automated verification reminders",
          "Richer risk scoring",
        ],
      },
    ],
  },

  // -------------------------------------------------------------------------
  // 04 — RAG + DATA
  // -------------------------------------------------------------------------
  {
    id: "rag-bi",
    index: "04",
    badge: "04 / DATA + AI",
    tier: "supporting",
    title: "RAG Business Intelligence Assistant",
    subtitle: "Ask questions. Retrieve data. Generate insights.",
    description:
      "An AI-powered business intelligence assistant combining retrieval-augmented generation, vector search and business data to answer analytical questions using natural language.",
    tech: [
      "Python",
      "Groq",
      "LangChain",
      "RAG",
      "FAISS",
      "SQL",
      "Streamlit",
    ],
    caseStudy: [
      {
        heading: "Problem",
        body:
          "Business information is often spread across documents and structured data sources, making simple analytical questions difficult to answer without technical knowledge.",
      },
      {
        heading: "Solution",
        body:
          "A natural-language assistant retrieves relevant business context and uses an LLM to generate grounded responses and actionable insights.",
      },
      {
        heading: "Architecture",
        body:
          "A user query is processed through retrieval-augmented generation, relevant context is retrieved using vector search and the LLM generates a grounded business response.",
      },
      {
        heading: "Technology",
        list: [
          "Python",
          "Groq",
          "LangChain",
          "RAG",
          "Embeddings",
          "FAISS",
          "SQL",
          "Streamlit",
        ],
      },
    ],
  },
];

// ---------------------------------------------------------------------------
// EXPERIENCE
// ---------------------------------------------------------------------------

export interface ExperienceEntry {
  company: string;
  role: string;
  tag: string;
  description: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "IBM UK",
    role: "Product Strategy Intern",
    tag: "PRODUCT STRATEGY",
    description:
      "Worked across business, product and technical teams on enterprise AI solutions, combining strategic analysis, stakeholder requirements and client-facing product communication.",
    bullets: [
      "Collaborated across business, product and technical teams to translate stakeholder requirements into recommendations for enterprise AI solutions.",
      "Conducted market research, competitor benchmarking and user-feedback analysis to identify solution gaps, recommend features and support roadmap prioritization.",
      "Developed 4+ client-facing deliverables including executive presentations, business proposals, product demonstrations and solution documentation.",
    ],
  },
  {
    company: "Proso AI",
    role: "AI & Business Intern",
    tag: "AI / BUSINESS",
    description:
      "Worked on AI-enabled enterprise products and business analytics, combining LLM testing, AI product experimentation and data-driven performance analysis.",
    bullets: [
      "Analyzed sales and campaign data across 40+ B2B leads, tracking conversion, revenue pipeline and productivity metrics to identify performance trends and business opportunities.",
      "Built a centralized analytics dashboard covering 15+ KPIs, automating campaign reporting and enabling data-driven monitoring of sales and business performance.",
      "Contributed to AI-enabled products including AskProso.ai, WorkWall and WorkKudo.ai through AI testing, product experimentation, market analysis and solution-performance evaluation.",
    ],
  },
];

// ---------------------------------------------------------------------------
// TECHNICAL STACK
// ---------------------------------------------------------------------------

export interface StackCategory {
  name: string;
  items: string[];
}

export const stack: StackCategory[] = [
  {
    name: "Generative AI",
    items: [
      "LLMs",
      "Generative AI",
      "Prompt Engineering",
      "Groq",
      "OpenAI API",
      "Tool Calling",
      "AI Agents",
    ],
  },
  {
    name: "AI Applications",
    items: [
      "RAG",
      "LangChain",
      "LlamaIndex",
      "FAISS",
      "Pinecone",
      "OCR",
      "Embeddings",
    ],
  },
  {
    name: "Data",
    items: [
      "Python",
      "SQL",
      "DBMS",
      "Excel",
      "Power BI",
      "SQLite",
      "Vector Databases",
    ],
  },
  {
    name: "Development",
    items: [
      "FastAPI",
      "Streamlit",
      "Next.js",
      "React",
      "TypeScript",
      "REST APIs",
    ],
  },
  {
    name: "Product",
    items: [
      "Product Thinking",
      "Requirements",
      "PRDs",
      "User Stories",
      "Workflow Design",
      "Feature Analysis",
    ],
  },
];

// ---------------------------------------------------------------------------
// STACK → PROJECT MAPPING
// Used for hover-highlighting in the Stack section.
// ---------------------------------------------------------------------------

export const stackToProjects: Record<string, ProjectId[]> = {
  LLMs: ["claim-adjudicator", "ai-ops-hub", "capa-iq", "rag-bi"],
  "Generative AI": [
    "claim-adjudicator",
    "ai-ops-hub",
    "capa-iq",
    "rag-bi",
  ],
  "Prompt Engineering": [
    "claim-adjudicator",
    "ai-ops-hub",
    "capa-iq",
  ],
  Groq: ["claim-adjudicator", "capa-iq", "rag-bi"],
  "OpenAI API": ["ai-ops-hub"],
  "Tool Calling": ["ai-ops-hub"],
  "AI Agents": ["ai-ops-hub"],
  RAG: ["ai-ops-hub", "rag-bi"],
  LangChain: ["rag-bi"],
  LlamaIndex: ["rag-bi"],
  FAISS: ["rag-bi"],
  Pinecone: ["rag-bi"],
  OCR: ["claim-adjudicator"],
  Embeddings: ["rag-bi"],
  Python: [
    "claim-adjudicator",
    "ai-ops-hub",
    "capa-iq",
    "rag-bi",
  ],
  SQL: [
    "claim-adjudicator",
    "ai-ops-hub",
    "capa-iq",
    "rag-bi",
  ],
  DBMS: ["claim-adjudicator", "ai-ops-hub", "rag-bi"],
  Excel: ["capa-iq"],
  "Power BI": ["rag-bi"],
  SQLite: ["claim-adjudicator", "capa-iq"],
  "Vector Databases": ["rag-bi"],
  FastAPI: ["claim-adjudicator", "ai-ops-hub"],
  Streamlit: ["ai-ops-hub", "capa-iq", "rag-bi"],
  "Next.js": ["claim-adjudicator"],
  React: ["claim-adjudicator"],
  TypeScript: ["claim-adjudicator"],
  "REST APIs": ["claim-adjudicator", "ai-ops-hub"],
  "Product Thinking": ["ai-ops-hub"],
  Requirements: ["ai-ops-hub"],
  PRDs: ["ai-ops-hub"],
  "User Stories": ["ai-ops-hub"],
  "Workflow Design": [
    "claim-adjudicator",
    "ai-ops-hub",
    "capa-iq",
  ],
  "Feature Analysis": ["ai-ops-hub"],
};

// ---------------------------------------------------------------------------
// BUILD PROCESS
// ---------------------------------------------------------------------------

export const buildProcess = [
  {
    index: "01",
    title: "Understand",
    detail:
      "Get specific about the real problem before reaching for a model.",
  },
  {
    index: "02",
    title: "Structure",
    detail:
      "Break the problem into data, decisions and actions.",
  },
  {
    index: "03",
    title: "Experiment",
    detail:
      "Prototype fast with prompts, small scripts and quick tests.",
  },
  {
    index: "04",
    title: "Build",
    detail:
      "Turn the working prototype into a real, structured system.",
  },
  {
    index: "05",
    title: "Test",
    detail:
      "Check outputs for accuracy, consistency, security and edge cases.",
  },
  {
    index: "06",
    title: "Iterate",
    detail:
      "Refine based on what breaks and what is actually useful.",
  },
];

// ---------------------------------------------------------------------------
// BUILD LOG
// ---------------------------------------------------------------------------

export const buildLog = [
  {
    year: "2026",
    title: "Plum OPD Claim Adjudicator",
    detail: "AI Claims Automation",
  },
  {
    year: "2026",
    title: "AI Operations Hub",
    detail: "Intelligent Workflow Automation",
  },
  {
    year: "2026",
    title: "CAPA IQ",
    detail: "AI Quality Intelligence",
  },
  {
    year: "2026",
    title: "RAG Business Intelligence Assistant",
    detail: "Natural Language Analytics",
  },
];
