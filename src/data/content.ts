export const profile = {
  name: "Garrett Thompson",
  tagline:
    "Servant leader diving into the field of cyber security to better serve those around me.",
  bio:
    "I'm a senior studying Cyber Security Engineering at Iowa State University. I'm interested in network security, embedded systems, and the places where hardware and software security overlap. Outside of coursework, I like breaking things in CTFs and figuring out how to put them back together more securely.",
  location: "Iowa State University, Class of 2027",
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
  { title: "General Education Reflection", href: "/general-education-reflection.pdf" },
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
      "Alongside my research and lab work, I want to keep working full-time in the field to get real-world experience. Pairing that with what I've learned in the lab will help me grow into a well-rounded security professional.",
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
    tag: "Senior Design Capstone (In Progress, May 2027)",
    title: "CyDegree",
    description:
      "An AI-assisted academic advising platform for Iowa State Software Engineering students. The information students need to plan their degree is spread across Workday, the course catalog, and their advisors, so problems like a missed prerequisite often get caught too late. Students sign in with their NetID, and CyDegree reads their Academic Progress Report and checks it against ISU's course requirements. An AI assistant flags prerequisite conflicts, answers questions, and recommends a course sequence that keeps them on track to graduate.",
    role: "Security Engineer on a five-person team. I'm responsible for the security side of the platform, including NetID sign-in, protecting the student academic records the app handles, and making sure the AI assistant can't be used to expose data it shouldn't.",
    skillsGained: [
      "Threat modeling a web application that handles sensitive student records",
      "Securing authentication with university NetID sign-in",
      "Understanding the security risks of AI features, like prompt injection and data leakage",
      "Protecting student data in line with privacy requirements like FERPA",
      "Working on a large team through design documents and weekly progress reports",
    ],
    bigPicture: "Course planning mistakes can cost students a semester or more. CyDegree is meant to catch those problems early and make good advising easier to get. It's also a project I really enjoy, because I like user-centered design and here the users are students like me.",
    stack: ["TypeScript", "AI / LLM integration", "NetID authentication", "ISU-hosted servers"],
    links: [{ label: "Team Website", href: "https://sdmay27-17.sd.ece.iastate.edu/" }],
  },
  {
    tag: "Embedded Systems (CPRE 2880)",
    title: "Autonomous CyBot Navigation",
    description:
      "Bare-metal C firmware for an iRobot Create-based CyBot. The robot sweeps an IR and ultrasonic sensor on a servo to find obstacles, figures out which gaps are wide enough to drive through, and navigates a test field on its own while avoiding boundary tape, cliffs, and bumps. It keeps searching until it finds and touches a balloon target. A second bot runs in manual mode and is driven from a Python GUI using a one-byte command protocol over UART.",
    role: "Worked on the robot's embedded firmware as part of a team. My work covered autonomous navigation, sensor scanning and noise filtering, IR calibration, and the UART protocol our PC control GUI used to talk to the robot.",
    skillsGained: [
      "Register-level programming on the TI TM4C123 (GPIO interrupts, ADC, timers, UART)",
      "Filtering noisy IR and ultrasonic readings with exponential smoothing and spike rejection",
      "Calibrating the IR sensor with a power regression against ultrasonic distance readings",
      "Designing a one-byte binary protocol for communication between the robot and a PC",
      "Turning angular scan data into object widths and drivable gaps for path planning",
    ],
    bigPicture: "We took the robot from raw sensor voltages to a fully autonomous search. The biggest lesson for me was how unreliable hardware data can be, and how much filtering it takes before you can make decisions based on it.",
    stack: ["C", "TI TM4C123 (Tiva C)", "Code Composer Studio", "iRobot Create Open Interface", "Python", "PySide6", "Matplotlib"],
    links: [],
  },
  {
    tag: "Software Design & Development (COMS 3090)",
    title: "CyMind",
    description:
      "A full-stack Android app that connects college students with mental health professionals. Students can track their mood, keep a journal, book appointments, and chat with counselors. Professionals can publish articles and exercises and get notified in real time. Students, professionals, and guests each get their own version of the app.",
    role: "Android frontend developer on a four-person team (two frontend, two backend). I built and tested screens including group chat, professional resource management, and the student mood and journal tracker, and connected them to our Spring Boot backend using REST and WebSockets.",
    skillsGained: [
      "Android development in Java, including activities, fragments, RecyclerView adapters, and role-based navigation",
      "Calling REST APIs with Volley, including authenticated requests",
      "Building live chat and notifications over WebSockets",
      "Charting mood history with MPAndroidChart",
      "UI testing with Espresso and code coverage reports",
      "Working on a team with Git, GitLab CI/CD pipelines, and shared design docs",
    ],
    bigPicture: "A lot of students never reach out for mental health support because finding help feels like too much effort. CyMind puts mood tracking, resources, and a direct line to professionals in one app. Building it end to end showed me how the frontend, backend, and database of a multi-user system work together.",
    stack: ["Java", "Android", "Volley", "WebSockets", "Espresso", "Spring Boot", "MySQL / MariaDB", "GitLab CI"],
    links: [],
  },
  {
    tag: "Cyber Security Education (CPRE 5300)",
    title: "Securing Your Home Network",
    description:
      "An interactive Android app that teaches homeowners and renters without a technical background how to secure their home network. It covers router passwords, SSIDs, Wi-Fi encryption, risky defaults like WPS and UPnP, guest networks, and firmware updates. Each short lesson is followed by scenarios where you choose what to do. If you pick an unsafe option, the app explains the risk and lets you try again.",
    role: "Sole developer. I researched the content using CISA and NSA guidance, wrote the script for every lesson and quiz screen, and designed and built the app in Android Studio.",
    skillsGained: [
      "Android development in Kotlin, including layouts, screen navigation, and quiz state",
      "Home network security, including WPA2/WPA3 and why WPS, UPnP, and remote management are risky to leave on",
      "Explaining technical security guidance to a non-technical audience (roughly ages 20 to 70)",
      "Using adult-learning research to favor short scenarios with instant feedback over long readings",
      "Planning a solo project from research all the way to a signed release build",
    ],
    bigPicture: "Most home networks still run on insecure factory settings because the people who own them don't know what those settings do. This project takes CISA and NSA recommendations and puts them in a form an everyday person can follow, bringing security awareness to people outside of enterprise environments.",
    stack: ["Kotlin", "Android Studio", "Android SDK"],
    links: [{ label: "GitHub Repo", href: "https://github.com/garrett-lane/cpre-5300-project" }],
  },
];

export type Credential = {
  name: string;
  issuer: string;
  // Direct one-click verification link, when the issuer supports it.
  verifyHref?: string;
  // Fallback for issuers (like Certiport) whose verify page can't be deep-linked,
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
    period: "Aug 2026 - Present",
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
    org: "Iowa State University (CYBE 2310 & CYBE 3310)",
    period: "Aug 2026 - Present",
    location: "Ames, IA",
    bullets: [
      "Working under Dr. Julie Rursch",
      "Delivered lab coursework for CYBE 2310 and 3310, courses in penetration testing and cryptography, to undergraduate students",
      "Responsible for grading CYBE 2310 coursework, as well as validating functionality and upgrading labs for both courses",
    ],
  },
  {
    role: "Peer Mentor / Teaching Assistant",
    org: "Iowa State University (CPRE 1840, 1850 & 1860)",
    period: "Aug 2025 - May 2026",
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
    period: "Aug 2025 - May 2026",
    location: "Ames, IA",
    bullets: [
      "Working under Dr. Shana Moothedath and Ph.D. student Mahesh Bhat",
      "Conducted research on the use of machine learning to more efficiently identify wireless 6G network traffic for security classification",
    ],
  },
];
