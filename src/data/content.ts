// Placeholder content — swap these values out for your real info.

export const profile = {
  name: "Garrett Thompson",
  tagline:
    "Servant leader diving into the field of cyber security to better serve those around me.",
  bio: `I'm a senior studying Cyber Security Engineering at Iowa State University. I'm
interested in network security, embedded systems, and the places where hardware
and software security overlap. Outside of coursework, I like breaking things in
CTFs and figuring out how to put them back together more securely.`,
  location: "Iowa State University — Class of 2027",
  // Written out like this (not a real @ / mailto link) so scrapers don't pick it up.
  email: "gthomp(at)iastate(dot)edu",
};

// Small, non-highlight mention — rendered as a plain link, not a card.
export const ethicsPaper = {
  label: "Read my paper on cybersecurity ethics",
  href: "/cybersecurity-ethics-essay.pdf",
};

export type Goal = {
  heading: string;
  org?: string;
  blurb: string;
};

export const futurePlans: Goal[] = [
  {
    heading: "Master of Science in Cyber Security",
    org: "Iowa State University",
    blurb: `After finishing my undergrad, I plan to stay at Iowa State to pursue a
Master of Science in Cyber Security, continuing to build on the network
security and embedded systems work from my coursework, research, and
internships.`,
  },
  {
    heading: "Full-Time Industry Experience",
    blurb: `Alongside my research and lab work, I want to keep pursuing full-time
work in the field to gain hands-on, real-world experience — complementing
what I've learned in the lab and building toward becoming a well-rounded
security professional.`,
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/garrett-lane" },
  { label: "LinkedIn", href: "https://linkedin.com/in/garrettthompson" },
];

export type ProjectEntry = {
  tag?: string;
  title: string;
  description: string;
  role: string;
  skillsGained: string[];
  bigPicture: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const projects: ProjectEntry[] = [
  {
    tag: "Senior Design Capstone",
    title: "[Project Title]",
    description: "[One to two sentence description — what it does and the problem it solves.]",
    role: "[Add your role]",
    skillsGained: ["[Add skills or knowledge gained]"],
    bigPicture: "[Add big-picture contribution]",
    stack: ["[Tech]", "[Tech]"],
    links: [{ label: "GitHub Repo", href: "#" }],
  },
  {
    tag: "Embedded Systems — CPRE 2880",
    title: "[Project Title]",
    description: "[One to two sentence description — what it does and the problem it solves.]",
    role: "[Add your role]",
    skillsGained: ["[Add skills or knowledge gained]"],
    bigPicture: "[Add big-picture contribution]",
    stack: ["[Tech]", "[Tech]"],
    links: [{ label: "GitHub Repo", href: "#" }],
  },
  {
    tag: "Software Design & Development — COMS 3090",
    title: "[Project Title]",
    description: "[One to two sentence description — what it does and the problem it solves.]",
    role: "[Add your role]",
    skillsGained: ["[Add skills or knowledge gained]"],
    bigPicture: "[Add big-picture contribution]",
    stack: ["[Tech]", "[Tech]"],
    links: [{ label: "GitHub Repo", href: "#" }],
  },
  {
    tag: "Cyber Security Education — CPRE 5300",
    title: "[Project Title]",
    description: "[One to two sentence description — what it does and the problem it solves.]",
    role: "[Add your role]",
    skillsGained: ["[Add skills or knowledge gained]"],
    bigPicture: "[Add big-picture contribution]",
    stack: ["[Tech]", "[Tech]"],
    links: [{ label: "GitHub Repo", href: "#" }],
  },
];

export type Credential = {
  name: string;
  issuer: string;
  // Direct one-click verification link, when the issuer supports it.
  verifyHref?: string;
  // Fallback for issuers (like Certiport) whose verify page can't be deep-linked —
  // shown as a code to copy into their manual verification form.
  verifyCode?: { href: string; code: string };
};

export const credentials: Credential[] = [
  {
    name: "ITF+",
    issuer: "CompTIA",
    verifyHref:
      "https://cp.certmetrics.com/comptia/en/public/verify/credential/KBGQE2V7M890FD3K",
  },
  {
    name: "A+",
    issuer: "CompTIA",
    verifyHref:
      "https://cp.certmetrics.com/comptia/en/public/verify/credential/Q4ZX2KLZ3NQE155D",
  },
  {
    name: "PenTest+",
    issuer: "CompTIA",
    verifyHref:
      "https://cp.certmetrics.com/CompTIA/en/public/verify/credential/ff1de78a44c54dac80bf16b7e586cd3d",
  },
  {
    name: "Office Specialist: Expert (Microsoft 365 Apps)",
    issuer: "Microsoft",
    verifyCode: { href: "https://www.certiport.com/verify", code: "Sxwq-uSVc" },
  },
];

export type CourseGroup = {
  department: string;
  courses: { code: string; title: string }[];
};

// Course titles pulled from the official ISU course catalog (catalog.iastate.edu).
export const coursework: CourseGroup[] = [
  {
    department: "Cyber Security Engineering (CYBE)",
    courses: [
      { code: "CYBE 2300", title: "Cyber Security Fundamentals" },
      { code: "CYBE 2310", title: "Cyber Security Concepts and Tools" },
      { code: "CYBE 2340", title: "Legal, Professional, and Ethical Issues in Cyber Systems" },
      { code: "CYBE 3310", title: "Application of Cryptographic Concepts to Cyber Security" },
      { code: "CYBE 4360", title: "Digital Forensics" },
    ],
  },
  {
    department: "Computer Engineering (CPR E)",
    courses: [
      { code: "CPR E 2880", title: "Embedded Systems I: Introduction" },
      { code: "CPR E 3810", title: "Computer Organization and Assembly Level Programming" },
      { code: "CPR E 4890", title: "Computer Networking and Data Communications" },
      { code: "CPR E 5300", title: "Network Protocols and Security" },
    ],
  },
  {
    department: "Cyber Security (CYBSC)",
    courses: [
      { code: "CYBSC 5310", title: "Information System Security" },
      { code: "CYBSC 5320", title: "Information Warfare" },
      { code: "CYBSC 5330", title: "Cryptography" },
      { code: "CYBSC 5360", title: "Computer and Network Forensics" },
    ],
  },
  {
    department: "Computer Science (COM S)",
    courses: [
      { code: "COM S 2270", title: "Object-Oriented Programming" },
      { code: "COM S 2280", title: "Introduction to Data Structures" },
      { code: "COM S 2520", title: "Linux Operating System Essentials" },
      { code: "COM S 3090", title: "Software Development Practices" },
      { code: "COM S 3110", title: "Introduction to the Design and Analysis of Algorithms" },
    ],
  },
];

export type ScoutingAward = {
  name: string;
  org: string;
  date?: string;
};

export const scoutingAwards: ScoutingAward[] = [
  { name: "Eagle Scout", org: "Scouting America", date: "Sept. 2021" },
  { name: "Founder's Award", org: "Scouting America", date: "Dec. 2024" },
  { name: "Spirit of the Ordeal", org: "Scouting America", date: "Dec. 2025" },
];

export type ExperienceEntry = {
  role: string;
  org: string;
  period: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Information Security Analyst I",
    org: "American Equity",
    period: "Aug 2026 – Present",
    location: "Des Moines, IA",
    bullets: [
      "Responsible for daily operations within the Information Security team",
      "Respond to SIEM alerts, triaging and addressing incidents as they arise",
      "Conduct regular security posture checks spanning SAST, DAST, endpoint protection, and vulnerability management",
    ],
  },
  {
    role: "Information Security Intern",
    org: "American Equity",
    period: "Summer 2026",
    location: "Des Moines, IA",
    bullets: [
      "Gained experience with a wide range of cyber security tools within an enterprise environment through foundational intern projects and mentorship",
      "Led the growth of the company's data-loss prevention (DLP) program through a transition to a new system with expanded capabilities",
      "Facilitated regular security posture tasks to help ensure compliance and internet safety across the company",
    ],
  },
  {
    role: "Teaching Assistant",
    org: "Iowa State University — CYBE 2310 & CYBE 3310",
    period: "Aug 2026 – Present",
    location: "Ames, IA",
    bullets: [
      "Working under Dr. Julie Rursch",
      "Delivered lab coursework for CYBE 2310 and 3310, courses in penetration testing and cryptography, to undergraduate students",
      "Responsible for grading CYBE 2310 coursework, as well as validating functionality and upgrading labs for both courses",
    ],
  },
  {
    role: "Peer Mentor / Teaching Assistant",
    org: "Iowa State University — CPRE 1840, 1850 & 1860",
    period: "Aug 2025 – May 2026",
    location: "Ames, IA",
    bullets: [
      "Working under Dr. Thomas Daniels",
      "Mentored undergraduate students in CPRE 1850, helping them master C programming fundamentals and laboratory assignments",
      "Delivered one-on-one instruction to clarify course material and improve student comprehension",
    ],
  },
  {
    role: "Boeing Research Fellow",
    org: "Iowa State University",
    period: "Aug 2025 – May 2026",
    location: "Ames, IA",
    bullets: [
      "Working under Dr. Shana Moothedath and Ph.D. student Mahesh Bhat",
      "Conducted research on the use of machine learning to more efficiently identify wireless 6G network traffic for security classification",
    ],
  },
];
