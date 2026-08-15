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
    title: "FlowMatrix: End-to-End E-Commerce Data Pipeline",
    organization: "Open Source",
    period: "Jun 2026 – Jul 2026",
    shortDescription:
      "Scalable data pipeline processing 100K+ transaction records, simulating a high-volume retail environment.",
    description: [
      "Designed a production-ready ELT pipeline that handles order events from ingestion through warehouse loading, modeled on real e-commerce traffic patterns.",
      "Built real-time stream ingestion with Apache Kafka, managing high-throughput order events with fault-tolerant consumer groups.",
      "Wrote distributed PySpark transformation jobs to clean, validate, and enrich raw event data before loading.",
      "Orchestrated the full workflow with Apache Airflow and dbt, loading analytics-ready data into a serverless Neon PostgreSQL warehouse.",
      "Enforced data quality contracts using Great Expectations and surfaced GMV trends on a custom Streamlit dashboard.",
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
      "Automated ETL pipeline capturing and visualising weather and AQI metrics across 5 global cities.",
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
