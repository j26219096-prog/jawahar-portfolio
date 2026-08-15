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
    category: "Data Engineering",
    icon: "database",
    skills: [
      "ETL Pipelines",
      "Data Ingestion",
      "Data Caching",
      "API Design",
      "Real-Time Processing",
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
      "GitHub Pages",
      "Render",
      "VS Code",
      "Google Analytics",
      "Excel",
      "Google Sheets",
    ],
  },
];

export const exploringSkills: string[] = [
  "Apache Kafka",
  "Apache Spark",
  "Apache Airflow",
  "AWS",
  "dbt",
  "Japanese (JLPT N5)",
];
