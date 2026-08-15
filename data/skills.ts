export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    icon: "code",
    skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Development",
    icon: "layers",
    skills: ["FastAPI", "Uvicorn", "Three.js", "REST APIs"],
  },
  {
    category: "Cloud & Warehousing",
    icon: "database",
    skills: [
      "Google BigQuery",
      "Google Cloud Platform",
      "AWS",
      "PostgreSQL (Neon)",
      "SQL Analytics",
    ],
  },
  {
    category: "AI / ML",
    icon: "cpu",
    skills: ["NLP", "Computer Vision", "Machine Learning", "Generative AI"],
  },
  {
    category: "Tools",
    icon: "tool",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "VS Code",
      "Excel",
      "Google Sheets",
    ],
  },
  {
    category: "Data Engineering",
    icon: "database",
    skills: [
      "Apache Kafka",
      "Apache Spark (PySpark)",
      "Apache Airflow",
      "dbt",
      "ETL / ELT Pipelines",
      "Data Ingestion",
      "Data Quality (Great Expectations)",
      "Real-Time Stream Processing",
    ],
  },
];

export const exploringSkills: string[] = [
  "Databricks",
  "AWS Glue / Redshift",
  "Advanced Distributed Systems",
  "Japanese (JLPT N5)",
];
