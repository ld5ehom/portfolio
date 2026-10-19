/**
 * @see docs/portfolio/liquid-light.md
 * About copy follows the resume. No fetch.
 */
import { asset } from "@/lib/base-path";

export const PROFILE_LINKS = {
  linkedin: "https://www.linkedin.com/in/ld5ehom",
  github: "https://github.com/ld5ehom",
} as const;

export const EXPERIENCE = [
  {
    org: "Selectron Industrial Co., Inc.",
    mark: asset("/images/selectron.png"),
    when: "February 2026 – Present",
    role: "Procurement Systems Engineer",
    place: "Cerritos, CA",
    lines: [
      "Architected a full-stack procurement platform using an npm-workspace monorepo (Next.js, FastAPI, PostgreSQL, .NET 8), unifying a fragmented legacy Firebird stack into a single system governing the end-to-end procurement lifecycle.",
      "Engineered a custom ETL pipeline to normalize legacy Firebird staging tables into a 3NF PostgreSQL schema across base tables and analytical views, establishing a single OLTP write path and removing staging overlays from live views.",
      "Implemented a hybrid .NET 8 WPF/WebView2 client to execute web-restricted Excel and Outlook COM automation, deployed via GitHub Actions CI/CD, Inno Setup, and an automated LAN update feed.",
      "Created Budgetary Lookup as a FastAPI sidecar service that extracts real-time distributor pricing and directly populates quote lines, eliminating secondary datastore overhead while maintaining strict transactional consistency.",
    ],
  },
  {
    org: "TechX Labs, Inc.",
    mark: asset("/images/techx-favicon.png"),
    when: "June 2025 – February 2026",
    role: "Machine Learning Engineer",
    place: "Boston, MA",
    lines: [
      "Implemented an automated anomaly detection pipeline using Isolation Forest to identify behavioral drifts and malicious signal spikes, ensuring the integrity of high-dimensional log data for downstream decision-making systems.",
      "Developed an unsupervised diagnostic model utilizing Autoencoders to detect structural artifacts and data corruption, preventing model performance degradation within large-scale embedding environments.",
      "Improved prediction reliability by applying probability calibration techniques (reliability curves, isotonic regression), reducing calibration error and stabilizing inputs for downstream decision-making systems.",
      "Implemented uplift modeling pipelines with treatment–control splitting and Qini-based evaluation to quantify incremental impact, enhancing experiment-driven model robustness.",
    ],
  },
] as const;

export const SKILL_GROUPS = [
  {
    label: "Languages & Frameworks",
    items: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "PyTorch",
      "TensorFlow",
      "FastAPI",
      "JavaScript",
      "Next.js",
    ],
  },
  {
    label: "Tools & Infrastructure",
    items: ["Pytest", "Alembic", "GitHub Actions", "Prometheus", "Grafana", "Vector Search (ANN)"],
  },
] as const;

export const PROJECT_GROUPS = ["Backend", "Frontend"] as const;

export type ProjectGroup = (typeof PROJECT_GROUPS)[number];

export type ProjectShot = {
  src: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  group: ProjectGroup;
  title: string;
  stack: string;
  shots: ProjectShot[];
  href: string;
  linkLabel: string;
  body: string[];
};

export const PROJECTS: Project[] = [
  {
    id: "store",
    group: "Backend",
    title: "Store Management System",
    stack: "FastAPI, MySQL, SQLAlchemy, Docker, Pytest, GitHub Actions, Prometheus, Grafana",
    shots: [],
    href: "https://github.com/ld5ehom/store-backend",
    linkLabel: "Github",
    body: [
      "Designed and implemented a modular FastAPI backend with scalable database modeling using SQLAlchemy and Alembic, supporting advanced filtering through tagged, categorized, and relational restaurant data.",
      "Integrated a restaurant recommendation system by deploying ML inference endpoints into the API layer, enabling asynchronous prediction workflows within the backend.",
      "Developed integration tests using Pytest and FastAPI TestClient to validate article retrieval logic and error handling.",
      "Built CI/CD pipelines with GitHub Actions to automate testing and deployment, containerized services with Docker, and implemented real-time monitoring using Prometheus and Grafana via external setup.",
    ],
  },
  {
    id: "career",
    group: "Frontend",
    title: "Career Website",
    stack: "TypeScript, React, pnpm workspace, Turborepo, Webpack, Vite, SCSS, Recoil",
    shots: [
      { src: asset("/portfolio/career-1.png"), width: 1146, height: 1082 },
      { src: asset("/portfolio/career-2.png"), width: 1159, height: 1012 },
      { src: asset("/portfolio/career-3.png"), width: 1163, height: 1131 },
      { src: asset("/portfolio/career-4.png"), width: 1167, height: 990 },
    ],
    href: "https://github.com/ld5ehom/career-web.git",
    linkLabel: "Github",
    body: [
      "Developed a single repository using Micro Frontend Architecture (MFA) to integrate multiple projects, including user account management, networking, video, job postings, and shared components like a UI-Kit and shell-router.",
      "The Shell acts as the primary host application, with each micro app functioning as a remote module. It manages authentication and leverages React Router to navigate between micro apps based on browser URLs. Webpack Module Federation connects the Shell and micro apps, enabling independent React render lifecycles for each app. This design ensures micro apps operate autonomously while remaining part of a unified system.",
      "Shared logic and components, such as the UI-Kit and Shell-Router, were extracted into standalone packages and integrated into both the Shell and micro apps during the build process. Modules are managed based on package.json configurations, with Build-Time Shared settings preventing duplication. Webpack Module Federation and peerDependencies optimize React library loading, enabling seamless integration of shared functionality while supporting independent micro app development.",
      "Designed two core modules, ui-kit and shell-router. The career-web/ui-kit delivers components for global styling and ensures visual consistency across the application. The career-web/shell-router streamlines interaction between the Shell and micro apps by managing routing and authentication information through hooks, components, and factory functions.",
    ],
  },
  {
    id: "market",
    group: "Frontend",
    title: "Marketplace Website",
    stack: "TypeScript, Next.js, React, Supabase, tailwindCSS, Storybook, Vercel",
    shots: [
      { src: asset("/portfolio/market-2.png"), width: 1137, height: 1214 },
      { src: asset("/portfolio/market-3.png"), width: 1154, height: 1150 },
      { src: asset("/portfolio/market-4.png"), width: 1147, height: 1135 },
    ],
    href: "https://github.com/ld5ehom/market-web.git",
    linkLabel: "Github",
    body: [
      "Designed and implemented a responsive product catalog layout using TailwindCSS, featuring dynamic grid views and infinite scroll for seamless performance with large datasets. Integrated React Intersection Observer and Lodash Throttle to optimize API requests and enhance performance.",
      "Enhanced search functionality by adding recent search history and auto-complete features with localStorage. Improved SEO and initial load times for search results and product detail pages using Next.js SSR.",
      "Developed and tested reusable components, including Product, Search, and Pagination, with Storybook to maintain consistent design and behavior across the application.",
      "Implemented advanced features like paginated search results and a similar products recommendation system powered by shared tags, increasing user engagement and session duration. Used Faker.js to generate mock data for testing and frontend-backend integration.",
    ],
  },
];
