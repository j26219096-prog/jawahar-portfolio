export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  type: "internship" | "project" | "hackathon";
  description: string;
  highlights: string[];
  badge?: string;
  certificateId?: string;
  certificateImage?: string;
  logos?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "data-analytics-internship",
    role: "Data Analytics Intern",
    organization: "EduSkills · Supported by Google Cloud",
    period: "June – August 2026",
    type: "internship",
    description:
      "Completed an 8-week cloud data analytics programme under the AICTE National Internship Portal. Worked through real-world data workflows using BigQuery, cloud storage, and SQL-based analytics — finishing with an Outstanding grade, the programme's top tier.",
    highlights: [
      "Completed structured modules covering BigQuery, data warehousing, and cloud-native analytics",
      "Applied SQL and cloud tools on hands-on assessments throughout the programme",
      "Achieved Grade O — Outstanding, the highest performance level",
      "Programme designed and supported by Google Cloud via EduSkills and AICTE",
    ],
    badge: "Grade O — Outstanding",
    certificateId: "414f8b186f0e50891f26",
    certificateImage: "/certificates/Data Analytics Virtual Internship.pdf",
    logos: [
      "https://eduskillsfoundation.org/wp-content/uploads/2020/07/EduSkills-Logo-1.png",
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
    ]
  },
  {
    id: "aiml-internship",
    role: "AI-ML Virtual Intern",
    organization: "AICTE + EduSkills + Google for Developers",
    period: "October – December 2025",
    type: "internship",
    description:
      "Completed a 10-week AI and machine learning programme delivered jointly by AICTE, EduSkills, and Google for Developers. Studied supervised learning, computer vision, and model evaluation — applying concepts through assessed project modules built with Google Developer tooling.",
    highlights: [
      "Covered supervised learning, NLP fundamentals, and computer vision over 10 weeks",
      "Built and evaluated classification and prediction models as assessed coursework",
      "Programme curriculum developed with Google for Developers and delivered via EduSkills",
    ],
    certificateId: "d3c1b4e7f216f2f5a4b9c10bb7e5de62",
    certificateImage: "/certificates/google ai-ml internship.pdf",
    logos: [
      "https://eduskillsfoundation.org/wp-content/uploads/2020/07/EduSkills-Logo-1.png",
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
    ]
  },
];
