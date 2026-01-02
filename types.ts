export type ExperienceEntry = {
  company: string;
  title: string;
  startDate: string;
  endDate: string | "Present";
  description: string[];
  logo?: string;
  tech: string[];
};

export type ProjectEntry = {
  title: string;
  description: string;
  image?: string;
  tags: string[];
  demoUrl?: string;
  sourceUrl?: string;
  highlight?: boolean;
};

export type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

export type SkillCategory = {
  category: string;
  items: {
    name: string;
    icon?: string;
    level: SkillLevel;
  }[];
};
