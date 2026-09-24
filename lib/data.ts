export { SITE_URL } from "./site";
export const GA_ID = "G-1FJ937GPK7";
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjkywbjr";

export const person = {
  name: "Saroj Ghimire",
  firstName: "Saroj",
  lastName: "Ghimire",
  jobTitle: "QA Engineer",
  email: "ghimires090@gmail.com",
  phone: "+977 9843951178",
  phoneHref: "+9779843951178",
  location: "Kathmandu, Nepal",
  resume: "/media/cv.pdf",
};

export const navLinks = [
  { href: "/#home", label: "Home", id: "home" },
  { href: "/#about", label: "About Me", id: "about" },
  { href: "/#timeline", label: "Timeline", id: "timeline" },
  { href: "/#services", label: "Services", id: "services" },
  { href: "/#portfolio", label: "Projects", id: "portfolio" },
  { href: "/#contact", label: "Contact Me", id: "contact" },
];

export const bottomNavLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export type SocialKey = "facebook" | "instagram" | "x" | "linkedin" | "github";

export const socials: { key: SocialKey; label: string; href: string }[] = [
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/sarojghimire090" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/ghimire_saroj09/" },
  { key: "x", label: "X (Twitter)", href: "https://x.com/SG_CFC02CL" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ghimire-saroj/" },
  { key: "github", label: "GitHub", href: "https://github.com/ghimiresaroj09" },
];

export const aboutStats = [
  { value: "1+", label: "Experience" },
  { value: "10+", label: "Projects" },
  { value: "1000+", label: "Bugs Found" },
];

export const aboutRoles = ["QA Analyst", "QA Engineer", "Software Tester"];

export type TimelineCategory = "work" | "academics";

export interface TimelineEntry {
  category: TimelineCategory;
  image: string;
  alt: string;
  dateTime: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
}

export const timeline: TimelineEntry[] = [
  {
    category: "work",
    image: "/assets/Dome.png",
    alt: "Dome Infosys logo",
    dateTime: "2025-02",
    date: "Feb 2025 - Present",
    title: "Associate QA",
    subtitle: "Dome Infosys, New Baneshwor, Kathmandu",
    description:
      "Executed independent manual testing for web and mobile apps across ERP, e-commerce, job portals, education platforms, women's healthcare, and doctor-patient systems; documented defects with reproduction steps and evidence; performed regression testing during releases; and collaborated with developers for clarification, retesting, and production validation.",
  },
  {
    category: "academics",
    image: "/assets/Texas.png",
    alt: "Texas College of Management and IT logo",
    dateTime: "2021-12",
    date: "Dec 2021 - May 2025",
    title: "Texas College of Management & IT",
    subtitle: "Bachelor of Information Technology (BIT), Mitrapark, Kathmandu",
    description:
      "Bachelor of Information Technology program covering software development, databases, networking, and foundational IT skills.",
  },
  {
    category: "academics",
    image: "/assets/JMC.png",
    alt: "Jaya Multiple Campus logo",
    dateTime: "2019-07",
    date: "Jul 2019 - Sep 2021",
    title: "Jaya Multiple Campus",
    subtitle: "+2, Science, Makalbari, Kathmandu",
    description: "Completed +2 (Science) with coursework in physics, chemistry, and mathematics.",
  },
  {
    category: "academics",
    image: "/assets/MESS.png",
    alt: "Mount Everest Secondary School logo",
    dateTime: "2006-04",
    date: "Apr 2006 - Mar 2019",
    title: "Mount Everest Secondary School",
    subtitle: "SEE, Thali, Kathmandu",
    description: "Completed School Leaving Certificate (SEE) with a broad foundation across core subjects.",
  },
];

export type ServiceIcon = "bug" | "robot" | "cloud" | "gauge" | "mobile";

export const services: { icon: ServiceIcon; title: string; description: string }[] = [
  {
    icon: "bug",
    title: "Manual Testing",
    description:
      "Perform detailed manual testing of web and software applications to identify bugs, validate functionality, and ensure a seamless user experience. Skilled in test case creation, functional testing, and exploratory testing.",
  },
  {
    icon: "robot",
    title: "Automation Testing",
    description:
      "Develop and execute automated test scripts using Selenium with Python and PyTest to reduce testing time, improve accuracy, and ensure consistent software quality across releases.",
  },
  {
    icon: "cloud",
    title: "API Testing",
    description:
      "Test RESTful and SOAP APIs using Postman to ensure data integrity, correct response handling, and seamless communication between applications, enhancing overall system reliability.",
  },
  {
    icon: "gauge",
    title: "Performance Testing",
    description:
      "Conduct performance and load testing using JMeter to analyze system stability, speed, and scalability, ensuring applications perform efficiently under high user loads.",
  },
  {
    icon: "mobile",
    title: "App Testing",
    description:
      "Test native, hybrid, and mobile web applications across devices and emulators to ensure compatibility, responsiveness, and functional correctness. Performs UI, compatibility, and regression checks on mobile platforms to deliver consistent user experiences.",
  },
];

export const skills = [
  { name: "Python", image: "/assets/skills/python.png", alt: "Python logo" },
  { name: "Selenium", image: "/assets/skills/selenium.png", alt: "Selenium logo" },
  { name: "Postman", image: "/assets/skills/postman.png", alt: "Postman logo" },
  { name: "JMeter", image: "/assets/skills/jmeter.png", alt: "Apache JMeter logo" },
  { name: "Git", image: "/assets/skills/git.png", alt: "Git logo" },
  { name: "GitHub", image: "/assets/skills/github.png", alt: "GitHub logo" },
  { name: "Jenkins", image: "/assets/skills/jenkins.png", alt: "Jenkins logo" },
  { name: "Jira", image: "/assets/skills/jira.png", alt: "Jira logo" },
  { name: "MS SQL", image: "/assets/skills/mssql.png", alt: "Microsoft SQL Server logo" },
  { name: "Django", image: "/assets/skills/django.png", alt: "Django logo" },
];

export type ProjectType = "web" | "app" | "automation";

export interface Project {
  /** URL slug: /projects/[slug]. Lowercase, stable once published. */
  slug: string;
  /** Display name and H1. */
  title: string;
  /** Optional override for the <title>; defaults to "{title} | Saroj Ghimire". */
  seoTitle?: string;
  /** Optional override for the meta description; otherwise generated from project data. */
  seoDescription?: string;
  type: ProjectType;
  category: string;
  /** Saroj's factual role on the project. */
  role: string;
  /** Primary screenshot. */
  image: string;
  /**
   * Optional extra screenshots.
   * Web projects: the laptop screen cycles through them every 5 seconds.
   * App projects: the first two are shown in the angled iPhone mockups.
   */
  images?: string[];
  /** Web projects only: a mobile screenshot shown in a single iPhone beside the laptop. */
  phoneImage?: string;
  alt: string;
  description: string;
  /** Optional role/feature bullets shown under the description. */
  roles?: string[];
  /** QA focus areas or technologies, shown as chips. */
  stack: string[];
  /** Label above the chips (defaults to "QA focus"). */
  stackLabel?: string;
  /** GitHub repository, if public. */
  href?: string;
  liveUrl?: string;
  /** Internal/client project with no public link. */
  isPrivate?: boolean;
}

export const projects: Project[] = [
  {
    title: "Jobscater.com – Job Portal Platform",
    seoTitle: "Jobscater.com – Job Portal Platform | Saroj Ghimire",
    slug: "jobscater",
    role: "QA Engineer",
    type: "web",
    category: "Quality Assurance",
    image: "/assets/Project/jobscater-1.png",
    images: ["/assets/Project/jobscater-1.png", "/assets/Project/jobscater-2.png"],
    alt: "Jobscater job portal home page and employer dashboard screenshots",
    description:
      "A job recruitment platform connecting job seekers and employers through a streamlined web-based hiring ecosystem, with separate interfaces for Job Seekers, Employers, and Administrators covering job discovery, applications, recruitment management, and platform administration.",
    roles: [
      "Job Seeker: browse and search jobs, manage profiles, apply for positions, and track applications.",
      "Employer: create and manage job postings, review applicants, and manage the recruitment process.",
      "Admin: manage users, job postings, applications, employers, and overall platform operations.",
    ],
    stack: [
      "Functional Testing",
      "UI/UX Validation",
      "API Testing",
      "Form Validation",
      "Role-Based Access Testing",
      "End-to-End Workflow Testing",
    ],
    liveUrl: "https://np.jobscater.com/",
  },
  {
    title: "Jobscater App",
    slug: "jobscater-app",
    role: "QA Engineer",
    type: "app",
    category: "Mobile Testing",
    image: "/assets/Project/jobscater-app-1.png",
    images: ["/assets/Project/jobscater-app-1.png", "/assets/Project/jobscater-app-2.png"],
    alt: "Jobscater mobile app home screen and job listing screen",
    description:
      "A mobile job recruitment application designed to connect job seekers and employers in one platform. The app enables users to discover opportunities, manage profiles, apply for jobs, and manage recruitment activities through a simple mobile experience.",
    stack: [
      "Functional Testing",
      "UI/UX Validation",
      "API Testing",
      "Form Validation",
      "Authentication",
      "Role-Based Access",
      "Notifications",
      "End-to-End Job Application Workflows",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.dome.jobPortal",
  },
  {
    title: "YatriFly",
    slug: "yatrifly",
    role: "QA Engineer",
    type: "web",
    category: "Quality Assurance",
    image: "/assets/Project/yatrifly-1.png",
    images: [
      "/assets/Project/yatrifly-1.png",
      "/assets/Project/yatrifly-2.png",
      "/assets/Project/yatrifly-3.png",
      "/assets/Project/yatrifly-4.png",
      "/assets/Project/yatrifly-5.png",
    ],
    alt: "YatriFly travel booking platform screenshots: home page, destinations, visa services, holiday packages, and flight results",
    description:
      "A comprehensive travel booking and management platform supporting domestic and international flight booking, car rental, hotel booking, bus booking, visa services, holiday packages, and agency management.",
    roles: [
      "Frontend: search and book travel services, manage bookings, payments, and customer information.",
      "Agency: manage agency operations, bookings, customers, and travel-related services.",
      "Admin: manage users, agencies, bookings, payments, configurations, content, and overall platform operations.",
    ],
    stack: [
      "Functional Testing",
      "API Testing",
      "UI/UX Validation",
      "Payment and Booking Workflows",
      "Role-Based Access Control",
      "Form Validation",
      "Filters",
      "Status Management",
      "End-to-End Testing",
    ],
    liveUrl: "https://yatrifly.com/",
  },
  {
    title: "YatriFly App",
    slug: "yatrifly-app",
    role: "QA Engineer",
    type: "app",
    category: "Mobile Testing",
    image: "/assets/Project/yatrifly-app-1.png",
    images: ["/assets/Project/yatrifly-app-1.png", "/assets/Project/yatrifly-app-2.png"],
    alt: "YatriFly mobile app home screen and flight search results screen",
    description:
      "A mobile travel booking application that allows users to search and book domestic and international flights, hotels, buses, visa services, and holiday packages through a single platform.",
    stack: [
      "Functional Testing",
      "UI/UX Validation",
      "API Testing",
      "Booking and Payment Workflows",
      "Form Validation",
      "Search and Filtering",
      "Status Management",
      "End-to-End Travel Booking Testing",
    ],
    liveUrl: "https://yatrifly.com/",
  },
  {
    title: "NAFEA",
    slug: "nafea",
    role: "QA Engineer",
    type: "web",
    category: "Quality Assurance",
    image: "/assets/Project/nafea-1.png",
    images: ["/assets/Project/nafea-1.png", "/assets/Project/nafea-2.png"],
    phoneImage: "/assets/Project/nafea-app.png",
    alt: "NAFEA platform home page, job portal, and mobile app home screen",
    description:
      "NAFEA is a comprehensive recruitment and workforce management platform designed to manage the complete employee lifecycle. It covers company and job vacancy management, candidate recruitment, interviews, job offers, medical processing, visa processing, insurance, SSF, labour permits, and ticket management.",
    roles: [
      "Operations: accounting, membership, subscription, user, role, and permission management.",
      "Super Admin: central system for overseeing recruitment and workforce operations across the platform.",
      "Mobile application: streamlined access to recruitment and workforce workflows on the go.",
    ],
    stack: [
      "Functional Testing",
      "API Testing",
      "End-to-End Recruitment Workflows",
      "Role-Based Access Control",
      "Form and Data Validation",
      "Status Transitions",
      "Mobile Application Testing",
      "Regression Testing",
    ],
    liveUrl: "https://nafea.org.np/",
  },
  {
    title: "LDV ERP",
    slug: "ldv-erp",
    role: "QA Engineer",
    type: "web",
    category: "Quality Assurance",
    image: "/assets/Project/ldv-erp-1.png",
    alt: "LDV ERP dashboard showing tender status cards, pending actions, and activity log",
    description:
      "A comprehensive enterprise resource planning (ERP) system designed to manage procurement, tenders, projects, budgets, suppliers, items, inventory, and warehouse operations. The platform supports end-to-end business workflows, including purchase requests, purchase orders, goods receipt, material requests, stock transfers, stock management, and warehouse operations, with role-based access for different users.",
    stack: [
      "Functional Testing",
      "End-to-End Workflow Testing",
      "Procurement and Inventory Validation",
      "CRUD Operations",
      "Role-Based Access Control",
      "Form Validation",
      "API Testing",
      "Data Integrity",
      "Status and Approval Workflows",
      "Search and Filtering",
      "Regression Testing",
    ],
    isPrivate: true,
  },
  {
    title: "Ziva",
    slug: "ziva",
    role: "QA Engineer",
    type: "web",
    category: "Quality Assurance",
    image: "/assets/Project/ziva-1.png",
    phoneImage: "/assets/Project/ziva-app.png",
    alt: "Ziva website home page and Ziva Assistant mobile app chat screen",
    description:
      "A digital insight and content platform that provides users with access to articles, audio, video, FAQs, bookmarks, likes, and chatbot support. The platform includes user authentication, content management, and personalized interactions, allowing users to discover, consume, and engage with digital content.",
    stack: [
      "Functional Testing",
      "UI/UX Validation",
      "Authentication Testing",
      "Content Management",
      "Media Validation",
      "API Testing",
      "Bookmark and Like Functionality",
      "Chatbot Workflows",
      "Form Validation",
      "End-to-End User Interaction Testing",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.dome.ziva",
  },
  {
    title: "Sahara Doctor & Patient App",
    slug: "sahara-app",
    role: "QA Engineer",
    type: "app",
    category: "Mobile Testing",
    image: "/assets/Project/sahara-app-1.png",
    images: ["/assets/Project/sahara-app-1.png", "/assets/Project/sahara-app-2.png"],
    alt: "Sahara patient app home screen and appointment details screen",
    description:
      "A digital healthcare platform connecting doctors and patients through dedicated mobile applications. Patients can manage their profiles, explore doctors, and access healthcare services, while doctors can manage their profiles, appointments, and patient interactions.",
    stack: [
      "Functional Testing",
      "UI/UX Validation",
      "Authentication",
      "Profile Management",
      "Appointment Workflows",
      "Doctor-Patient Interactions",
      "API Testing",
      "Form Validation",
      "Notifications",
      "Role-Based Access",
      "End-to-End Workflow Testing",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.dome.sahara_patient",
  },
  {
    title: "Babylon Teacher & Student App",
    slug: "babylon-app",
    role: "QA Engineer",
    type: "app",
    category: "Mobile Testing",
    image: "/assets/Project/babylon-app-1.png",
    images: ["/assets/Project/babylon-app-1.png", "/assets/Project/babylon-app-2.png"],
    alt: "Babylon student app home screen and teacher dashboard screen",
    description:
      "A digital education platform connecting teachers and students through dedicated mobile applications. The platform supports learning and teaching activities, enabling students to access educational content and manage their learning activities while teachers can manage courses, lessons, and student-related activities.",
    stack: [
      "Functional Testing",
      "UI/UX Validation",
      "Authentication",
      "Profile Management",
      "Course and Lesson Workflows",
      "Content Validation",
      "Teacher-Student Interactions",
      "API Testing",
      "Form Validation",
      "Notifications",
      "Role-Based Access",
      "End-to-End Education Workflows",
    ],
    liveUrl: "https://play.google.com/store/apps/details?id=com.dome.school_ai",
  },
  {
    title: "Vatsalya",
    slug: "vatsalya",
    role: "QA Engineer",
    type: "web",
    category: "Quality Assurance",
    image: "/assets/Project/vatsalya-1.png",
    alt: "Vatsalya Natural IVF website home page",
    description:
      "A fertility care and reproductive health platform providing information and access to assisted reproductive services, fertility diagnostics, preservation, and IVF-related treatments. The platform supports patients throughout their fertility journey, from appointment booking and initial consultation to medical assessments, treatment planning, and ongoing support.",
    roles: [
      "Services: IVF, ICSI, IUI, egg and sperm freezing, PGT, fertility diagnostics, and advanced embryology care.",
    ],
    stack: [
      "Functional Testing",
      "Appointment Booking",
      "Patient Workflows",
      "Form Validation",
      "Service and Content Validation",
      "UI/UX Testing",
      "API Testing",
      "Data Validation",
      "End-to-End Patient Journey Testing",
    ],
    liveUrl: "https://vatsalya.com.np/",
  },
  {
    title: "Selenium Automation Framework",
    slug: "selenium-automation",
    role: "Author (personal project)",
    type: "automation",
    category: "Test Automation",
    image: "/assets/Project/selenium-framework-1.png",
    alt: "Selenium framework project open in VS Code showing the test_login.py file and project structure",
    description:
      "A scalable Selenium WebDriver automation framework built with Python and Pytest, designed for efficient, maintainable, and reliable web application testing. The framework follows modern automation practices with reusable components, structured test execution, comprehensive reporting, and CI/CD readiness.",
    roles: [
      "Key features: Page Object Model (POM), environment-based configuration, secure credential management, Chrome/Firefox/Edge support, headless execution, explicit/fluent wait utilities, reusable assertion helpers, automatic screenshots, structured logging, Allure and HTML reporting, performance monitoring, parallel execution, and test retry support.",
    ],
    stackLabel: "Tech stack",
    stack: ["Python", "Selenium WebDriver", "Pytest", "pytest-xdist", "Allure", "Selenium Manager", "Git/GitHub"],
    href: "https://github.com/ghimiresaroj09/Selenium-Framework",
  },
];
