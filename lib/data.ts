export interface Project {
  title: string;
  description: string;
  tags: string[];
  links: { label: string; href: string }[];
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
  email: "calvin.isch@asc.upenn.edu",
  links: {
    googleScholar:
      "https://scholar.google.com/citations?user=3VodZV4AAAAJ&hl=en",
    semanticScholar: "https://www.semanticscholar.org/author/Calvin-Isch/2047697310",
    orcid: "https://orcid.org/0000-0003-1669-0918",
    linkedin: "https://www.linkedin.com/in/calvin-isch/",
    github: "https://github.com/CalvinIsch",
    cv: "/CV_Calvin_Isch.pdf",
    resume: "/Resume_Calvin_Isch.pdf",
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
    title: "OpenSermon",
    description:
      "A large-scale database and dashboard for exploring American church sermons. The project involves scraping sermon media, transcribing audio and video, using LLMs to analyze sermon content, and building interactive visualizations of religious communication in the U.S.",
    tags: ["Web Scraping", "Speech-to-Text", "LLMs", "Data Visualization", "Computational Social Science"],
    links: [
      { label: "Project Page", href: "/projects/opensermon" },
      { label: "Site", href: "https://open-sermon.com" },
    ],
  },
];

const gs = (id: string) =>
  `https://scholar.google.com/citations?view_op=view_citation&hl=en&user=3VodZV4AAAAJ&citation_for_view=3VodZV4AAAAJ:${id}`;

export const papers: Paper[] = [
  {
    authors: ["Calvin Isch", "G. Jennings"],
    title:
      "Narrative License and Model Sycophancy in LLM Summaries of Scientific Work",
    venue: "To Appear in Proceedings of the 2026 Conference of the Association for Computational Linguistics (ACL).",
    year: 2026,
    links: [{ label: "PDF", href: "/papers/1726_Narrative_License_and_Mod.pdf" }],
  },
  {
    authors: ["Calvin Isch", "D. Centola"],
    title:
      "Experimental Evidence that Social Learning in Structured Information-Sharing Networks Corrects Anchoring Bias",
    venue: "Journal of Social Computing, 7(1), 3–13.",
    year: 2026,
    links: [{ label: "Paper", href: gs("Zph67rFs4hoC") }, { label: "PDF", href: "/papers/experimental_evidence_networks.pdf" }],
  },
  {
    authors: ["C.J. Clark", "Calvin Isch", "A. Shariff"],
    title: "Why do organizations take political stances? A review of reasons and risks",
    venue: "Social and Personality Psychology Compass, 18(7), e12985.",
    year: 2024,
    links: [{ label: "Paper", href: gs("hqOjcs7Dif8C") }, { label: "PDF", href: "/papers/why_orgs_political.pdf" }],
  },
  {
    authors: ["C.J. Clark", "Calvin Isch", "P. Connor", "P.E. Tetlock"],
    title: "Assume a can opener.",
    venue: "Behavioral & Brain Sciences, 47.",
    year: 2024,
    links: [{ label: "Paper", href: gs("roLk4NBRz8UC") }],
  },
  {
    authors: ["Calvin Isch", "P.E. Tetlock", "C.J. Clark"],
    title:
      "Reflections on adversarial collaboration from the adversaries: was it worth it?",
    venue: "Theory and Society, 1–18.",
    year: 2025,
    links: [{ label: "Paper", href: gs("MXK_kJrjxJIC") }, { label: "PDF", href: "/papers/adcollabs.pdf" }],
  },
  {
    authors: ["Calvin Isch"],
    title:
      "Media bias in portrayals of mortality risks: Comparison of newspaper coverage to death rates",
    venue: "Social Science & Medicine, 364, 117542.",
    year: 2025,
    links: [{ label: "Paper", href: gs("5nxA0vEk-isC") }, { label: "PDF", href: "/papers/media_bias_mortality.pdf" }],
  },
  {
    authors: ["Calvin Isch", "R. Brown", "P.M. Todd", "A. Aktipis", "G. Pepper"],
    title:
      "Objective risk exposure, perceived uncontrollable mortality risk, and health behaviors",
    venue: "Journal of Public Health, 33(1), 11–21.",
    year: 2025,
    links: [{ label: "Paper", href: gs("WF5omc3nYNoC") }, { label: "PDF", href: "/papers/objective_risks_uncontrollable.pdf" }],
  },
  {
    authors: ["C. Clark", "Calvin Isch", "J. Everett", "A. Shariff"],
    title:
      "Politicization undermines trust in institutions, even among the ideologically aligned public",
    venue: "2023.",
    year: 2023,
    links: [{ label: "Paper", href: gs("LkGwnXOMwfcC") }, { label: "PDF", href: "/papers/politicization_trust.pdf" }],
  },
  {
    authors: [
      "S.L. Heiman",
      "E.R. Hirt",
      "Calvin Isch",
      "J.F. Brinkworth",
      "L. Cronk",
      "J. Alcock",
      "A. Aktipis",
    ],
    title: "Identities as predictors of vaccine hesitancy during the COVID‐19 pandemic",
    venue: "Journal of Social Issues, 79(2), 556–577.",
    year: 2023,
    links: [{ label: "Paper", href: gs("Y0pCki6q_DkC") }, { label: "PDF", href: "/papers/identities_predictors.pdf" }],
  },
  {
    authors: ["C.J. Clark", "P. Connor", "Calvin Isch"],
    title: "Failing to replicate predicts citation declines in psychology",
    venue: "Proceedings of the National Academy of Sciences, 120(29), e2304862120.",
    year: 2023,
    links: [{ label: "Paper", href: gs("ufrVoPGSRksC") }, { label: "PDF", href: "/papers/clark-et-al-2023-failing-to-replicate-predicts-citation-declines-in-psychology.pdf" }],
  },
  {
    authors: ["Calvin Isch", "M. Ten Thij", "P.M. Todd", "J. Bollen"],
    title: "Quantifying changes in societal optimism from online sentiment",
    venue: "Behavior Research Methods, 55(1), 176–184.",
    year: 2023,
    links: [{ label: "Paper", href: gs("qjMakFHDy7sC") }, { label: "PDF", href: "/papers/societal_optimism.pdf" }],
  },
  {
    authors: [
      "D.G. Beltran",
      "Calvin Isch",
      "J.D. Ayers",
      "J. Alcock",
      "J.F. Brinkworth",
      "L. Cronk",
    ],
    title: "Mask wearing behavior across routine and leisure activities during COVID-19",
    venue: "PsyArXiv Preprint.",
    year: 2021,
    links: [{ label: "Preprint", href: gs("UeHWp8X0CEIC") }],
  },
  {
    authors: ["Calvin Isch", "S.A. Nordli", "P.M. Todd"],
    title:
      "Back to the Future Consequences: Consideration of Future Consequences (CFC) Measure Correlates with Exercise Intensity",
    venue: "IU Journal of Undergraduate Research, 5(1), 52–57.",
    year: 2019,
    links: [{ label: "Paper", href: gs("zYLM7Y9cAGgC") }, { label: "PDF", href: "/papers/isch_consideration_future_consequences.pdf" }],
  },
];

export const talks: Talk[] = [
  {
    title: "Politics and Causal Overreach in the Behavioral Sciences",
    event: "Behavioral Science Speakeasy",
    location: "American Enterprise Institute (AEI), Washington, DC",
    date: "May 2026",
    links: [],
  },
  {
    title: "Media portrayals of mortality risks ∥ Using large language models for large-scale qualitative analysis",
    event: "New(s) Knowledge: From Research to Intelligence",
    location: "MIT",
    date: "October 2025",
    links: [],
  },
  {
    title: "Quantifying the prevalence of overreaching causal language in the social sciences",
    event: "SCIFY, DARPA Research Group",
    location: "Philadelphia, PA",
    date: "September 2025",
    links: [],
  },
  {
    title: "Quantifying the prevalence of overreaching causal language in the social sciences",
    event: "Political Networks and Computational Social Science (PolNETs)",
    location: "Harvard University",
    date: "August 2025",
    links: [],
  },
  {
    title: "Quantifying the prevalence of overreaching causal language in the social sciences",
    event: "International Conference on Computational Social Science",
    location: "Norrköping, Sweden",
    date: "July 2025",
    links: [],
  },
  {
    title: "Media bias in portrayals of Mortality Risk",
    event: "International Conference on Computational Social Science",
    location: "Norrköping, Sweden",
    date: "July 2025",
    links: [],
  },
  {
    title: "On collaborating with Adversaries: Lessons from those who have tried it",
    event: "Philosophy of Science Association Conference",
    location: "New Orleans, LA",
    date: "November 2024",
    links: [],
  },
  {
    title: "The Political Impact of Virtue Signaling",
    event: "FIRE Faculty Conference",
    location: "Boston, MA",
    date: "October 2024",
    links: [],
  },
  {
    title: "Narrative License in the Social Sciences",
    event: "International Conference on Computational Social Science",
    location: "Philadelphia, PA",
    date: "July 2024",
    links: [],
  },
  {
    title: "Narrative License in the Social Sciences: An Exploration with GPT-4.0",
    event: "AIMOS Conference",
    location: "QUT, Brisbane, Australia",
    date: "November 2023",
    links: [],
  },
  {
    title: "Social learning can mitigate the influence of unhelpful anchors in an estimation task",
    event: "Summer Institute on Bounded Rationality",
    location: "Max Planck Institute, Berlin",
    date: "June 2023",
    links: [],
  },
  {
    title: "Temporal measures of societal optimism reveal inversion of sentiment toward the near and distant future",
    event: "Perception, Evolution and Behavior Lab",
    location: "Northumbria University, Newcastle, UK",
    date: "May 2021",
    links: [],
  },
  {
    title: "Determinants of mask wearing: Attitudes, intentions, and behaviors",
    event: "Hirt Lab",
    location: "Indiana University, Bloomington, IN",
    date: "March 2021",
    links: [],
  },
  {
    title: "Shifts in future orientation: COVID-19 mortality rates, political affiliation, and a decline in consideration of future consequences",
    event: "Allen, Nettle, & Pepper Labs",
    location: "Newcastle, UK",
    date: "March 2021",
    links: [],
  },
  {
    title: "COVID-Sociality: Community mask wearing and COVID prevalence",
    event: "Todd-Goldstone Lab",
    location: "Indiana University, Bloomington, IN",
    date: "October 2020",
    links: [],
  },
  {
    title: "Community mask wearing and COVID prevalence",
    event: "COVID-Sociality Group",
    location: "Online",
    date: "August 2020",
    links: [],
  },
  {
    title: "Thoughts on tomorrow: An exploration of future thinking in humans",
    event: "Honors Thesis Defense",
    location: "Virtual",
    date: "April 2020",
    links: [],
  },
  {
    title: "Measuring psychological distance with Twitter data",
    event: "IUJUR Research Slam",
    location: "Virtual",
    date: "March 2020",
    links: [],
  },
  {
    title: "Thoughts on tomorrow: How considering the future relates to present activity",
    event: "IU Undergraduate Research Conference",
    location: "Bloomington, IN",
    date: "November 2019",
    links: [],
  },
  {
    title: "Considerations of Future Consequences, Procrastination, and Psychological Distance",
    event: "HON-H241 Thinking about Tomorrow (Guest Lecture)",
    location: "Indiana University",
    date: "November 2019",
    links: [],
  },
  {
    title: "Skilled technical workers / Innovation with OSS",
    event: "Data Science for Public Good Symposium",
    location: "UVA, Arlington, VA",
    date: "August 2019",
    links: [],
  },
  {
    title: "Future Goals & Present Performance",
    event: "Hutton Honors College",
    location: "Indiana University",
    date: "January 2019",
    links: [],
  },
  {
    title: "Meat O'Vision: The effects of hunger on perception",
    event: "Midwest Undergraduate Cognitive Science Conference",
    location: "Indiana University, Bloomington, IN",
    date: "April 2018",
    links: [],
  },
  {
    title: "Keynote Address",
    event: "American Legion National Americanism Conference",
    location: "Indianapolis, IN",
    date: "October 2017",
    links: [],
  },
  {
    title: "Address on Education Experience",
    event: "National Children and Youth Education Conference",
    location: "Indianapolis, IN",
    date: "September 2017",
    links: [],
  },
];
