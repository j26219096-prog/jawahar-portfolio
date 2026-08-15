export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const achievements: Achievement[] = [
  {
    id: "ai-for-bharat",
    icon: "trophy",
    title: "National-Level AI For Bharat Hackathon",
    description:
      "Selected at the AI For Bharat Hackathon 2026 with Kisan-Sahayak — a multilingual NLP assistant that gives rural farmers access to crop disease diagnostics and market prices in Tamil, Hindi, and English.",
  },
  {
    id: "college-expo",
    icon: "award",
    title: "College Project Expo Recognition",
    description:
      "Showcased the Live City Pulse ETL pipeline at the college project expo — a live system ingesting weather and AQI data across five global cities into an interactive public dashboard.",
  },
  {
    id: "production-projects",
    icon: "rocket",
    title: "4 Deployed Data Engineering Projects",
    description:
      "Built and shipped four end-to-end data systems covering Kafka streaming, PySpark batch jobs, FastAPI serving layers, NLP pipelines, and Streamlit dashboards — each publicly available on GitHub.",
  },
  {
    id: "google-cloud-cert",
    icon: "cloud",
    title: "Google Cloud Data Analytics Certified",
    description:
      "Earned the Google Cloud Data Analytics Certificate through EduSkills, validating hands-on proficiency with cloud data pipelines, BigQuery analytics, and distributed data processing workflows.",
  },
];
