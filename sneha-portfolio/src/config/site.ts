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

  // Replace with your real links. Leave a value empty ("") to hide that
  // button in the Contact and Footer sections.
  links: {
    email: "sneha.17659@gmail.com", // e.g. "sneha@example.com"
    linkedin: "https://www.linkedin.com/in/sneha-096823258/", // e.g. "https://linkedin.com/in/your-handle"
    github: "https://github.com/Sneha-17660",
  },

  seo: {
    title: "Sneha — AI, Data & Product Builder",
    description:
      "Engineering undergraduate at NITK Surathkal building AI-powered products, intelligent automation systems and data-driven applications.",
  },
};

export type ProjectId = "ai-ops-hub" | "capa-iq" | "rag-bi";

export interface CaseStudySection {
  heading: string;
  body?: string;
  list?: string[];
}

export interface Project {
  id: ProjectId;
  index: string; // "01"
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
  {
    id: "ai-ops-hub",
    index: "01",
    badge: "01 / FLAGSHIP",
    tier: "flagship",
    title: "AI Operations Hub",
    subtitle: "Intelligent Workflow Automation Platform",
    description:
      "An AI-powered operations platform designed to transform repetitive business workflows into structured, intelligent and automated processes.",
    tech: ["Python", "LLMs", "FastAPI", "Streamlit", "SQL", "APIs", "Automation"],
    caseStudy: [
      {
        heading: "The problem",
        body: "Businesses handle many repetitive operational tasks involving emails, documents, requests, data and decisions.",
      },
      {
        heading: "The idea",
        body: "Use AI to interpret unstructured inputs and convert them into structured actions and automated workflows.",
      },
      {
        heading: "The system",
        body: "User or business input passes through an input layer into an AI / LLM layer, which produces reasoning and structured output. A workflow engine routes that output through a data / API layer into an automated action, which returns a result to the user or business.",
      },
      {
        heading: "AI layer",
        list: ["LLMs", "Prompt engineering", "Structured outputs", "AI workflows", "Context processing"],
      },
      {
        heading: "Automation layer",
        list: ["Workflow orchestration", "Task generation", "API interactions", "Data processing"],
      },
      {
        heading: "Product layer",
        list: ["User workflows", "Feature design", "Requirements", "UX", "Iteration"],
      },
      {
        heading: "Tech stack",
        list: ["Python", "LLMs", "FastAPI", "Streamlit", "SQL", "APIs", "Automation"],
      },
      {
        heading: "Learnings",
        body: "Building this system meant thinking carefully about reliability, structured outputs, workflow design, user experience, automation opportunities, and how to handle ambiguous inputs gracefully rather than letting them break the pipeline.",
      },
    ],
  },
  {
    id: "capa-iq",
    index: "02",
    badge: "02 / AI QUALITY",
    tier: "second",
    title: "CAPA IQ",
    subtitle: "AI-Powered Supplier Quality Intelligence Platform",
    description:
      "An AI-powered quality management platform that transforms supplier defect records into structured root-cause analysis, corrective actions, verification plans and actionable quality insights.",
    tech: ["Python", "LLMs", "Groq", "SQL", "Streamlit", "AI Workflows", "Data Analytics"],
    github: "https://github.com/Sneha-17660/capa-iq-ai-quality-management",
    caseStudy: [
      {
        heading: "Problem",
        body: "Supplier defect records pile up faster than teams can analyze them. Root-cause analysis, corrective actions and verification plans are usually written by hand, which is slow and inconsistent across reviewers.",
      },
      {
        heading: "Solution",
        body: "CAPA IQ validates incoming defect data, then runs it through an AI analysis layer that produces a structured 5-Why breakdown and fishbone-style causal analysis, arriving at a root cause, a corrective action and a verification plan.",
      },
      {
        heading: "Architecture",
        body: "Defect data flows through validation, AI analysis, 5-Why reasoning and fishbone analysis to reach a root cause, which produces a corrective action and a verification step.",
      },
      {
        heading: "AI workflow",
        list: ["Defect data validation", "AI-assisted 5-Why analysis", "Fishbone / causal structuring", "Root-cause synthesis", "Corrective action drafting"],
      },
      {
        heading: "Features",
        list: ["Defect intake", "Open CAPA tracking", "Supplier risk view", "Quality insight summaries"],
      },
      {
        heading: "Technology",
        list: ["Python", "LLMs", "Groq", "SQL", "Streamlit", "AI Workflows", "Data Analytics"],
      },
      {
        heading: "Learnings",
        body: "Quality workflows demand structured, auditable reasoning rather than free-form generation, which shaped how the analysis layer's outputs are constrained and verified.",
      },
      {
        heading: "Future improvements",
        list: ["Supplier-level trend analysis", "Automated verification reminders", "Richer risk scoring"],
      },
    ],
  },
  {
    id: "rag-bi",
    index: "03",
    badge: "03 / DATA + AI",
    tier: "supporting",
    title: "RAG Business Intelligence Assistant",
    subtitle: "Ask questions. Retrieve data. Generate insights.",
    description:
      "An AI-powered business intelligence assistant combining retrieval-augmented generation, SQL and business data to answer analytical questions using natural language.",
    tech: ["Python", "Groq", "LangChain", "RAG", "SQL", "Power BI", "Streamlit"],
    caseStudy: [
      {
        heading: "Problem",
        body: "Business data is often locked behind SQL and BI tools that require technical fluency to query, slowing down simple analytical questions.",
      },
      {
        heading: "Solution",
        body: "A natural-language assistant retrieves relevant business data, runs SQL analysis, and interprets the results into a plain-language insight.",
      },
      {
        heading: "Architecture",
        body: "A user query is handled through retrieval-augmented generation, retrieving relevant data, running SQL analysis, and passing results through an LLM to produce a business insight.",
      },
      {
        heading: "Technology",
        list: ["Python", "Groq", "LangChain", "RAG", "SQL", "Power BI", "Streamlit"],
      },
    ],
  },
];

export interface ExperienceEntry {
  company: string;
  role: string;
  tag: string;
  description: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "IBM",
    role: "Product Intern",
    tag: "PRODUCT",
    description:
      "Worked on product-focused initiatives involving AI-enabled solutions, business requirements and product operations.",
    bullets: [
      "Worked with cross-functional teams to understand business requirements and translate them into product specifications, user stories and actionable requirements.",
      "Supported feature ideation, backlog prioritization and product documentation for AI-enabled solutions.",
      "Analyzed stakeholder feedback and identified opportunities for product and workflow improvements.",
      "Prepared product documentation, demos and presentations for stakeholder and client discussions.",
    ],
  },
  {
    company: "Proso AI",
    role: "AI Intern",
    tag: "AI",
    description:
      "Worked on Generative AI applications and AI-driven automation workflows, focusing on prompt engineering, testing and evaluation.",
    bullets: [
      "Worked on Generative AI solutions involving prompt engineering, workflow design and LLM-based applications.",
      "Tested and evaluated AI outputs for accuracy, relevance and consistency.",
      "Iterated on prompts and workflows to improve AI response quality.",
      "Supported AI solution development through experimentation, documentation and testing.",
    ],
  },
];

export interface StackCategory {
  name: string;
  items: string[];
}

export const stack: StackCategory[] = [
  { name: "Generative AI", items: ["LLMs", "Prompt Engineering", "Groq", "OpenAI API"] },
  { name: "AI Applications", items: ["RAG", "LangChain", "LlamaIndex", "FAISS", "Pinecone"] },
  { name: "Data", items: ["Python", "SQL", "Excel", "Power BI", "SQLite"] },
  { name: "Development", items: ["FastAPI", "Streamlit", "Next.js", "TypeScript", "APIs"] },
  { name: "Product", items: ["Product Thinking", "Requirements", "PRDs", "User Stories", "Workflow Design", "Feature Analysis"] },
];

// Maps a stack item to the project ids that use it, for the hover-highlight
// interaction in the Stack section.
export const stackToProjects: Record<string, ProjectId[]> = {
  LLMs: ["ai-ops-hub", "capa-iq"],
  "Prompt Engineering": ["ai-ops-hub"],
  Groq: ["capa-iq", "rag-bi"],
  "OpenAI API": ["ai-ops-hub"],
  RAG: ["rag-bi"],
  LangChain: ["rag-bi"],
  LlamaIndex: ["rag-bi"],
  FAISS: ["rag-bi"],
  Pinecone: ["rag-bi"],
  Python: ["ai-ops-hub", "capa-iq", "rag-bi"],
  SQL: ["ai-ops-hub", "capa-iq", "rag-bi"],
  Excel: ["capa-iq"],
  "Power BI": ["rag-bi"],
  SQLite: ["capa-iq"],
  FastAPI: ["ai-ops-hub"],
  Streamlit: ["ai-ops-hub", "capa-iq", "rag-bi"],
  "Next.js": [],
  TypeScript: [],
  APIs: ["ai-ops-hub"],
  "Product Thinking": ["ai-ops-hub"],
  Requirements: ["ai-ops-hub"],
  PRDs: ["ai-ops-hub"],
  "User Stories": ["ai-ops-hub"],
  "Workflow Design": ["ai-ops-hub", "capa-iq"],
  "Feature Analysis": ["ai-ops-hub"],
};

export const buildProcess = [
  { index: "01", title: "Understand", detail: "Get specific about the real problem before reaching for a model." },
  { index: "02", title: "Structure", detail: "Break the problem into data, decisions and actions." },
  { index: "03", title: "Experiment", detail: "Prototype fast with prompts, small scripts and quick tests." },
  { index: "04", title: "Build", detail: "Turn the working prototype into a real, structured system." },
  { index: "05", title: "Test", detail: "Check outputs for accuracy, consistency and edge cases." },
  { index: "06", title: "Iterate", detail: "Refine based on what breaks and what's actually useful." },
];

export const buildLog = [
  { year: "2026", title: "AI Operations Hub", detail: "Intelligent Workflow Automation" },
  { year: "2026", title: "CAPA IQ", detail: "AI Quality Intelligence" },
  { year: "2025", title: "RAG Business Intelligence Assistant", detail: "Natural Language Analytics" },
];
