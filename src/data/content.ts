export const profile = {
  name: "Garrett Thompson",
  tagline:
    "Servant leader diving into the field of cyber security to better serve those around me.",
  bio:
    "I'm a senior studying Cyber Security Engineering at Iowa State University. I'm interested in network security, embedded systems, and the places where hardware and software security overlap. Outside of coursework, I like breaking things in CTFs and figuring out how to put them back together more securely.",
  location: "Iowa State University — Class of 2027",
  // Written out like this (not a real @ / mailto link) so scrapers don't pick it up.
  email: "gthomp(at)iastate(dot)edu",
};

export type Essay = {
  title: string;
  href: string;
};

export const essays: Essay[] = [
  { title: "Cybersecurity Ethics Essay", href: "/cybersecurity-ethics-essay.pdf" },
  { title: "Cumulative Reflection", href: "/cumulative-reflection.pdf" },
  // TODO: add once written.
  { title: "General Education Reflection Essay", href: "#" },
];

export type Goal = {
  heading: string;
  org?: string;
  blurb: string;
};

export const futurePlans: Goal[] = [
  {
    heading: "Master of Science in Cyber Security",
    org: "Iowa State University",
    blurb:
      "After finishing my undergrad, I plan to stay at Iowa State to pursue a Master of Science in Cyber Security, continuing to build on the network security and embedded systems work from my coursework, research, and internships.",
  },
  {
    heading: "Full-Time Industry Experience",
    blurb:
      "Alongside my research and lab work, I want to keep pursuing full-time work in the field to gain hands-on, real-world experience — complementing what I've learned in the lab and building toward becoming a well-rounded security professional.",
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/garrett-lane" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/garrettlthompson/" },
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
    title: "Autonomous CyBot Navigation",
    description:
      "Bare-metal C firmware for an iRobot Create–based CyBot that sweeps a servo-mounted IR and ultrasonic sensor to map obstacles, computes gaps wide enough to drive through, and navigates a test field on its own — avoiding boundary tape, cliffs, and bumps — until it finds and touches a balloon target. A second bot runs in manual mode, driven remotely from a Python GUI over a compact bit-packed UART protocol.",
    role: "Team member on the robot's embedded firmware — autonomous navigation, sensor scanning and noise filtering, IR calibration, and the UART command protocol shared with the team's PC control GUI.",
    skillsGained: [
      "Register-level peripheral programming on the TI TM4C123 (GPIO interrupts, ADC, timers, UART)",
      "Sensor fusion and noise filtering — exponential smoothing and spike rejection across IR and ultrasonic readings",
      "IR sensor calibration via power regression against ultrasonic ground truth",
      "Designing a compact one-byte binary protocol for robot ↔ PC communication",
      "Geometry-based path planning: turning angular scan data into object widths and drivable gaps",
    ],
    bigPicture: "Took a robot from raw sensor voltages to a full autonomous search — the same sense, decide, act loop behind real-world autonomous systems — and showed how much reliability depends on filtering noisy hardware data before trusting it.",
    stack: ["C", "TI TM4C123 (Tiva C)", "Code Composer Studio", "iRobot Create Open Interface", "Python", "PySide6", "Matplotlib"],
    // TODO: add GitHub link once the code is uploaded.
    links: [],
  },
  {
    tag: "Software Design & Development — COMS 3090",
    title: "CyMind",
    description:
      "A full-stack Android app connecting college students with mental health professionals. Students track their mood and journal over time, book appointments, and chat live with counselors, while professionals publish articles and exercises and get real-time notifications — with separate experiences for students, professionals, and guests.",
    role: "Android frontend developer on a four-person team (two frontend, two backend) — built and tested client screens including real-time group chat, professional resource management, and the student mood and journal tracker, wired to the Spring Boot backend over REST and WebSockets.",
    skillsGained: [
      "Android development in Java — activities, fragments, RecyclerView adapters, and role-based navigation",
      "Client–server integration with Volley REST requests and authenticated API calls",
      "Real-time features over WebSockets for live chat and push-style notifications",
      "Data visualization of mood history with MPAndroidChart",
      "UI system testing with Espresso and code coverage reporting",
      "Team software practices — Git workflow, GitLab CI/CD pipelines, and shared design documentation",
    ],
    bigPicture: "Students often don't reach out for mental health support because finding help feels like a hurdle. CyMind puts self-tracking, trusted resources, and a direct line to professionals in one place — and building it end to end taught me how the frontend, backend, and database of a real multi-user system fit together.",
    stack: ["Java", "Android", "Volley", "WebSockets", "Espresso", "Spring Boot", "MySQL / MariaDB", "GitLab CI"],
    // TODO: add GitHub link once the code is uploaded.
    links: [],
  },
  {
    tag: "Cyber Security Education — CPRE 5300",
    title: "Securing Your Home Network",
    description:
      "An interactive Android app that teaches non-technical homeowners and renters how to lock down their home network. Short lessons on router credentials, SSIDs, Wi-Fi encryption, risky defaults like WPS and UPnP, guest networks, and firmware are each followed by decision-based scenarios — pick an unsafe option and the app explains the risk before letting you retry.",
    role: "Sole developer — researched the content from CISA and NSA guidance, wrote the full screen-by-screen lesson and quiz script, and designed and built the app in Android Studio.",
    skillsGained: [
      "Android app development in Kotlin — UI layouts, screen navigation, and state for interactive quizzes",
      "Home network security — WPA2/WPA3, and why defaults like WPS, UPnP, and remote management are risky",
      "Translating technical security guidance for a non-technical audience (ages ~20–70)",
      "Applying adult-learning research: short scenarios with immediate feedback over long reading",
      "Planning and scoping a solo project from research through a signed release build",
    ],
    bigPicture: "Home networks are mostly left on insecure factory defaults because their owners don't know what the settings mean. This project turns CISA and NSA best practices into something an everyday user can actually act on — pushing security awareness beyond enterprise environments to the people who usually go without it.",
    stack: ["Kotlin", "Android Studio", "Android SDK"],
    links: [{ label: "GitHub Repo", href: "https://github.com/garrett-lane/cpre-5300-project" }],
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
