import type { ExperienceEntry, ProjectEntry, SkillCategory } from "../types";

export const profile = {
  name: "Bayu Dian Nugroho",
  role: "Software Engineer (Onsite / Remote)",
  summary:
    "Experienced Software Engineer with 10+ years building and deploying scalable, high-performance systems using Go, Python, and C#. Skilled in microservices, AI/ML, DevOps, and observability with a strong focus on performance and cost optimization.",
  location: "Indonesia",
  languages: ["Indonesian (native)", "English (professional working proficiency)"],
  interests: ["Full-stack development", "Golang", "Python", "AI/ML", "DevOps"],
  social: {
    github: "https://github.com/rhythmwave",
    linkedin: "https://www.linkedin.com/in/bayu-dian-nugroho/",
    email: "mailto:kleirose.bayu@gmail.com",
  },
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    items: [
      { name: "Go", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "Node.js", level: "Intermediate" },
      { name: "Rust", level: "Beginner" },
      { name: "C#", level: "Intermediate" },
      { name: "C/C++", level: "Intermediate" },
      { name: "PHP", level: "Advanced" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Kubernetes", level: "Intermediate" },
      { name: "Azure", level: "Intermediate" },
      { name: "AWS", level: "Intermediate" },
      { name: "GCP", level: "Intermediate" },
      { name: "Tencent Cloud", level: "Intermediate" },
      { name: "Docker", level: "Advanced" },
      { name: "Podman", level: "Intermediate" },
      { name: "ArgoCD", level: "Intermediate" },
      { name: "Jenkins", level: "Intermediate" },
      { name: "GitHub / GitLab CI", level: "Intermediate" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "JavaScript", level: "Advanced" },
      { name: "React", level: "Intermediate" },
      { name: "Vue", level: "Intermediate" },
      { name: "HTML5", level: "Advanced" },
      { name: "CSS3", level: "Advanced" },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "Bootstrap", level: "Advanced" },
    ],
  },
  {
    category: "Data & Messaging",
    items: [
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" },
      { name: "MongoDB", level: "Intermediate" },
      { name: "OracleDB", level: "Intermediate" },
      { name: "Vector DB", level: "Intermediate" },
      { name: "Kafka", level: "Intermediate" },
      { name: "RabbitMQ", level: "Intermediate" },
    ],
  },
  {
    category: "AI / ML & Advanced Tech",
    items: [
      { name: "RAG", level: "Intermediate" },
      { name: "LangChain", level: "Intermediate" },
      { name: "YOLOv8", level: "Intermediate" },
      { name: "OpenCV", level: "Intermediate" },
      { name: "Document processing (PDF/Office)", level: "Advanced" },
      { name: "Search & ranking (TF/IDF, fuzzy)", level: "Advanced" },
    ],
  },
  {
    category: "Observability & Tools",
    items: [
      { name: "Grafana", level: "Intermediate" },
      { name: "Prometheus / Mimir", level: "Intermediate" },
      { name: "Loki", level: "Intermediate" },
      { name: "Tempo", level: "Intermediate" },
      { name: "OpenTelemetry", level: "Intermediate" },
      { name: "Git", level: "Advanced" },
      { name: "Linux", level: "Advanced" },
    ],
  },
];

export const experiences: ExperienceEntry[] = [
  {
    company: "PT Berlian Sistem Informasi",
    title: "Software Engineer",
    startDate: "May 2024",
    endDate: "Present",
    description: [
      "Built a distributed Golang upload service with Redis-based coordination for multipart/chunked uploads, enabling safe concurrent processing.",
      "Created a Python document extraction service (PDF, Excel, Word, PPT) that converts files into structured JSON, reducing processing time from ~2–3 minutes to 10–30 seconds.",
      "Developed a Python retrieval service using TF/IDF, reverse frequency, fuzzy matching, and terminology expansion to deliver search quality comparable to embeddings at lower cost.",
      "Implemented an observability gateway in Go using NSQ + Fasthttp, streaming logs, metrics, and traces into Loki, Tempo, and Mimir.",
      "Built WebSocket infrastructure for real-time status monitoring of image processing pipelines consumed by a Flutter client.",
      "Scaled object-detection datasets and microservices (Go + Python) to improve throughput and accuracy.",
      "Integrated LLMs (OpenAI, Azure, Google) into Kubernetes microservices with careful resource tuning and cost controls.",
    ],
    tech: [
      "Go",
      "Python",
      "Redis",
      "NSQ",
      "Kubernetes",
      "Loki",
      "Tempo",
      "Mimir",
      "WebSocket",
      "Docker",
    ],
  },
  {
    company: "SCCIC ITB",
    title: "Software Engineer",
    startDate: "Sep 2023",
    endDate: "Apr 2024",
    description: [
      "Integrated ML models such as YOLO for video analysis, including face and object detection.",
      "Deployed applications to cloud and on-prem environments using Docker, Airflow, and Nginx.",
      "Built microservices in Go and contributed to full-stack solutions using Node.js, Python, and PHP.",
    ],
    tech: ["Go", "Python", "Node.js", "PHP", "YOLO", "Docker", "Airflow", "Nginx"],
  },
  {
    company: "PT Neuronworks Indonesia",
    title: "DevOps Engineer",
    startDate: "Jan 2023",
    endDate: "Sep 2023",
    description: [
      "Implemented Kubernetes-based orchestration to reduce infrastructure costs and improve deployment reliability.",
      "Containerized applications with Docker and set up GitLab CI/CD pipelines for automated deployment.",
      "Configured monitoring and alerting with Prometheus, Grafana, and related tooling.",
    ],
    tech: ["Kubernetes", "Docker", "GitLab CI", "Prometheus", "Grafana", "Linux"],
  },
  {
    company: "PT Neuronworks Indonesia",
    title: "Junior System Analyst",
    startDate: "Jan 2020",
    endDate: "Jan 2023",
    description: [
      "Analyzed and documented business and system requirements across multiple projects.",
      "Led migration of monolithic applications to microservices using Docker, Kubernetes, and MinIO.",
      "Implemented geolocation-based fraud prevention features.",
    ],
    tech: ["Docker", "Kubernetes", "MinIO", "PostgreSQL", "MySQL"],
  },
  {
    company: "PT Neuronworks Indonesia",
    title: "Software Developer",
    startDate: "Mar 2013",
    endDate: "Dec 2019",
    description: [
      "Developed web applications using PHP and Zend Framework.",
      "Implemented ETL-based data analytics pipelines.",
      "Contributed to documentation and code standardization efforts.",
    ],
    tech: ["PHP", "Zend Framework", "MySQL", "ETL", "Linux"],
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "Distributed Document Processing Platform",
    description:
      "End-to-end platform for bulk document ingestion, extraction, and semantic search using Go, Python, and modern search techniques.",
    tags: [
      "Go",
      "Python",
      "Redis",
      "Microservices",
      "RAG",
      "TF/IDF",
      "Kubernetes",
    ],
    highlight: true,
  },
  {
    title: "Real-time Image Processing Pipeline",
    description:
      "WebSocket-based real-time monitoring stack for image-processing workloads, integrated with Flutter clients and observability tooling.",
    tags: ["Go", "WebSocket", "NSQ", "Loki", "Tempo", "Mimir", "Kubernetes"],
  },
  {
    title: "Microservices Migration for Legacy Systems",
    description:
      "Migrated monolithic PHP applications to containerized microservices with Kubernetes and MinIO-backed storage.",
    tags: ["PHP", "Docker", "Kubernetes", "MinIO", "Microservices"],
  },
  {
    title: "Video Analytics with YOLO",
    description:
      "Integrated YOLO-based video analytics for face and object detection, deployed across cloud and private infrastructure.",
    tags: ["YOLO", "Python", "Docker", "AI/ML"],
  },
];

export const education = {
  institution: "ST INTEN",
  degree: "Information Systems",
  period: "2011 – 2015",
  highlights: [
    "Built early web applications and internal tools as part of coursework and side projects.",
    "Developed strong foundations in information systems, databases, and software engineering.",
  ],
};
