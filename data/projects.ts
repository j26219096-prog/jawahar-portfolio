import { ReactNode } from "react";

export interface Project {
  id: string;
  title: string;
  organization: string;
  period: string;
  shortDescription: string;
  description: string[];
  techStack: string[];
  repoUrl?: string;
  liveUrl?: string;
  badge?: string;
}

export const projects: Project[] = [
  {
    id: "flow-matrix",
    title: "FlowMatrix: End-to-End E-Commerce ELT Pipeline",
    organization: "Open Source",
    period: "Jun 2026 – Jul 2026",
    shortDescription:
      "End-to-end ELT pipeline for e-commerce order analytics — Kafka → PySpark → Airflow + dbt → PostgreSQL, with a live Streamlit dashboard. Verified: 1,247 events processed in a full pipeline run, 7 dbt models, 34 data-quality tests (100% pass rate), 6-task Airflow DAG, <2 min end-to-end runtime.",
    description: [
      "Designed and implemented a complete ELT pipeline modeled on e-commerce order workflows, covering stream ingestion, distributed transformation, analytics engineering, orchestration, and data quality validation.",
      "Built a Kafka stream ingestion layer with consumer groups; wrote PySpark jobs to clean, deduplicate, and schema-validate raw event records before loading.",
      "Orchestrated a 6-task Apache Airflow DAG and structured 7 dbt models to produce analytics-ready tables in a Neon serverless PostgreSQL warehouse.",
      "Enforced 34 automated Great Expectations data-quality tests (100% pass rate); processed 1,247 streaming events (500 orders + 747 payments) in a verified full-pipeline test run with end-to-end runtime under 2 minutes.",
      "Streamlit dashboard and Neon PostgreSQL are live and publicly accessible; Kafka, PySpark, and Airflow run locally via Docker during development and demo.",
    ],
    techStack: [
      "Python",
      "Apache Kafka",
      "PySpark",
      "Apache Airflow",
      "dbt",
      "PostgreSQL (Neon)",
      "Great Expectations",
      "Streamlit",
      "Docker",
      "GitHub Actions",
      "SQL",
      "Git",
    ],
    repoUrl: "https://github.com/j26219096-prog/flowmatrix-pipeline",
    liveUrl: "https://flowmarics.streamlit.app/",
    badge: "Featured",
  },
  {
    id: "weather-etl",
    title: "Weather ETL Dashboard (Live City Pulse)",
    organization: "Open Source",
    period: "Feb 2026 – Mar 2026",
    shortDescription:
      "Automated ETL pipeline capturing and visualising live weather and AQI metrics across 5 global cities.",
    description: [
      "Built a scheduled Python pipeline to extract live weather and air quality data from the OpenWeatherMap API on a recurring cadence.",
      "Applied data cleaning and normalisation transforms to standardise metrics across cities before storage.",
      "Loaded processed records into a lightweight SQL store and connected it to a responsive public dashboard.",
      "Deployed the frontend to GitHub Pages for continuous, zero-downtime public access.",
    ],
    techStack: ["Python", "SQL", "ETL", "OpenWeatherMap API"],
    repoUrl: "https://github.com/j26219096-prog/weather-etl-dashboard",
    liveUrl: "https://j26219096-prog.github.io/weather-etl-dashboard/",
  },
  {
    id: "kisan-sahayak",
    title: "Kishan Sahayak: AI-Powered Agricultural Assistant",
    organization: "Hackathon Project",
    period: "Dec 2025 – Jan 2026",
    shortDescription:
      "Multilingual AI assistant for crop disease diagnostics and real-time market price queries, built for rural farmers.",
    description: [
      "Developed a Python NLP application for the AI For Bharat Hackathon 2026, targeting low-connectivity agricultural communities.",
      "Built a query-translation layer that maps farmer inputs in Tamil, Hindi, and English to structured API requests.",
      "Delivered real-time crop disease diagnostics and local market pricing, removing the language barrier between farmers and data.",
    ],
    techStack: ["Python", "SQL", "NLP", "Data Analysis"],
    repoUrl: "https://github.com/j26219096-prog/Kisan-Sahayak",
  },
  {
    id: "3d-asset-pipeline",
    title: "Real-Time 3D Asset Data Pipeline & Serving API",
    organization: "Open Source",
    period: "2026",
    shortDescription:
      "FastAPI backend for on-demand retrieval, thread-safe caching, and delivery of 3D binary assets to a WebGL frontend.",
    description: [
      "Engineered a FastAPI serving layer that ingests NLP prompts, maps them to 3D asset identifiers, and fetches .glb files from a remote GitHub object store.",
      "Implemented a thread-safe local cache to eliminate redundant network fetches and reduce per-request latency significantly.",
      "Designed the REST API response structure to stream binary payloads directly to a Three.js WebGL renderer in the browser.",
    ],
    techStack: ["Python", "FastAPI", "Uvicorn", "Three.js", "ETL", "Caching"],
    repoUrl:
      "https://github.com/j26219096-prog/Real-Time-3D-Asset-Data-Pipeline-Serving-API",
    liveUrl:
      "https://j26219096-prog.github.io/Real-Time-3D-Asset-Data-Pipeline-Serving-API/",
  },
];
