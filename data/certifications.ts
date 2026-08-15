export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  verificationUrl: string | null;
  certificateId?: string;
}

export const certifications: Certification[] = [
  {
    id: "google-cloud-da",
    name: "Google Cloud Data Analytics Certificate",
    issuer: "Google",
    date: "Aug 2026",
    verificationUrl: null,
    certificateId: "b7f51b91-766e-4693-86c0-66b1b72a41de",
  },
  {
    id: "ibm-python-de",
    name: "Python Project for Data Engineering",
    issuer: "IBM",
    date: "Jul 2026",
    verificationUrl: null,
    certificateId: "UME2QARYGITH",
  },
  {
    id: "aws-cloud-practitioner",
    name: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    date: "Jul 2026",
    verificationUrl: null,
  },
  {
    id: "ibm-python-ds",
    name: "Python for Data Science, AI & Development",
    issuer: "IBM",
    date: "Jul 2026",
    verificationUrl: null,
    certificateId: "R8F6TVBMBMA3",
  },
  {
    id: "coursera-excel",
    name: "Getting Started with Microsoft Excel",
    issuer: "Coursera",
    date: "Apr 2026",
    verificationUrl: null,
    certificateId: "2CIWNJI43DVB",
  },
  {
    id: "ibm-intro-de",
    name: "Introduction to Data Engineering",
    issuer: "IBM",
    date: "May 2026",
    verificationUrl: null,
    certificateId: "SJOSZ2X27EI6",
  },
  {
    id: "topengineers-ds-python",
    name: "Data Science with Python Workshop",
    issuer: "Topengineers",
    date: "Jun 2026",
    verificationUrl: null,
    certificateId: "TOP 2026 309",
  },
  {
    id: "aiml-internship",
    name: "Google AI-ML Virtual Internship",
    issuer: "EduSkills Foundation®",
    date: "Dec 2025",
    verificationUrl: null,
    certificateId: "d3c1b4e7f216f2f5a4b9c10bb7e5de62",
  },
  {
    id: "nptel-computer-arch",
    name: "NPTEL Certified Computer Architecture and Organization (COA)",
    issuer: "NPTEL",
    date: "Nov 2025",
    verificationUrl: null,
    certificateId: "NPTEL25CS154S1170502130",
  },
  {
    id: "mongodb-basics",
    name: "MongoDB Basics for Students",
    issuer: "MongoDB",
    date: "Jul 2025",
    verificationUrl: null,
    certificateId: "MDBj33up74na1",
  },
  {
    id: "eduskills-da-internship",
    name: "Data Analytics Virtual Internship",
    issuer: "EduSkills Foundation®",
    date: "Aug 2026",
    verificationUrl: null,
    certificateId: "414f8b186f0e50891f26",
  }
];
