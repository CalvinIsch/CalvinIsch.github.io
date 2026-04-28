export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
  year: number;
}

export interface Paper {
  authors: string[];
  title: string;
  venue: string;
  year: number;
  links: { label: string; href: string }[];
}

export interface Talk {
  title: string;
  event: string;
  location: string;
  date: string;
  links: { label: string; href: string }[];
}

export interface NewsItem {
  date: string;
  text: string;
  links?: { label: string; href: string }[];
}

// ── Fill in your own info below ───────────────────────────────────────────────

export const bio = {
  name: "Calvin Isch",
  affiliation: "University of Pennsylvania",
  department: "Annenberg School for Communication",
  role: "PhD Student",
  description:
    "I am a PhD student at the Annenberg School for Communication at the University of Pennsylvania. My research sits at the intersection of computational social science, political communication, and natural language processing. I study how people produce and consume information online.",
  email: "calvin.isch@asc.upenn.edu",
  links: {
    googleScholar: "https://scholar.google.com",
    linkedin: "https://www.linkedin.com/in/calvinisch",
    github: "https://github.com/CalvinIsch",
    cv: "/cv.pdf",
  },
};

export const news: NewsItem[] = [
  {
    date: "2026-04",
    text: "Site launched.",
  },
];

export const projects: Project[] = [
  {
    title: "Project Title",
    description:
      "A short description of the project, what problem it solves, and what makes it interesting.",
    tags: ["NLP", "Python", "Computational Social Science"],
    links: [
      { label: "Code", href: "https://github.com/CalvinIsch" },
      { label: "Demo", href: "#" },
    ],
    year: 2026,
  },
];

export const papers: Paper[] = [
  {
    authors: ["Calvin Isch", "Co-Author One", "Co-Author Two"],
    title: "Paper Title Goes Here",
    venue:
      "Proceedings of a Conference or Journal Name, Year.",
    year: 2026,
    links: [
      { label: "Paper", href: "#" },
      { label: "Code", href: "#" },
    ],
  },
];

export const talks: Talk[] = [
  {
    title: "Talk Title",
    event: "Conference or Workshop Name",
    location: "City, Country",
    date: "Month Year",
    links: [{ label: "Slides", href: "#" }],
  },
];
