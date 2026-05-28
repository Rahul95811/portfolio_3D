import {
    c,
    docker,
    git,
    github,
    go,
    java,
    javascript,
    linkedin,
    mongodb,
    mysql,
    nodejs,
    postgresql,
    python,
    tailwindcss,
    typescript,
    vscode,
    cybersecurity,
    datavisualization,
} from "../assets/icons";

// Import project images
import p1 from "../assets/images/project-1.webp";
import p2 from "../assets/images/project-2.webp";
import p3 from "../assets/images/project-3.webp";
import attendanceCalculator from "../assets/images/attendance-calculator.svg";
import crono from "../assets/images/crono.jpg";
import game from "../assets/images/game.jpg";

export const experiences = [
  {
    title: "Cybersecurity Intern",
    company: "Teachnook",
    type: "Internship",
    duration: "Aug 2024 - Sep 2024",
    description:
      "Gained hands-on experience in cybersecurity principles and practices. Worked on ethical hacking, network security, and threat detection. Completed various cybersecurity challenges and case studies.",
    certificateUrl: "",
  },
  {
    title: "Bug Bounty Hunter",
    company: "Self-Driven",
    type: "Freelance",
    duration: "2024 - Present",
    description:
      "Identified and responsibly disclosed security vulnerabilities in websites, including an HTML Injection vulnerability on a high-traffic Premier League football club website. Gained hands-on knowledge of common web vulnerabilities (HTML Injection, XSS, CSRF, SQL Injection, Open Redirects) and practiced identifying flaws using Burp Suite.",
    certificateUrl: "",
  },
  {
    title: "Satellite-Based Air Quality Analysis",
    company: "Research Project",
    type: "Internship",
    duration: "2024 - 2025",
    description:
      "Processed MODIS MAIAC (1 km) AOD data and derived PM2.5 using aerosol scaling models. Analyzed MERRA-2 PM2.5 and Black Carbon (0.5° × 0.625°) for regional trend comparison. Built automated scripts for time-series generation, spatial clipping, and district-level comparison.",
    certificateUrl: "",
  },
];

export const skills = [
  {
    imageUrl: java,
    name: "Java",
    type: "Programming Language",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Programming Language",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Programming Language",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS / HTML / CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Developer Tools",
  },
  {
    imageUrl: vscode,
    name: "VS Code",
    type: "Developer Tools",
  },
  {
    imageUrl: cybersecurity,
    name: "Cybersecurity",
    type: "Security & Penetration Testing",
  },
  {
    imageUrl: datavisualization,
    name: "Data Visualization & Analysis",
    type: "Geospatial & Time-Series Analytics",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Rahulkilaparthi",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/kilaparthi-rahul-63b13a293/",
  },
];

export const projects = [
  {
    name: "Granthalaya – Smart Library System",
    description:
      "A full-stack library management system featuring custom dashboards implemented with Chart.js and FullCalendar. Includes search, sorting, and barcode-based book tracking.",
    image: p1,
    exploreUrl: "https://www.linkedin.com/posts/kilaparthi-rahul-63b13a293_bonafide-ugcPost-7461021543066652673-FqBT/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcIdg8BtNzqTtG7y-egFZsNk_ckyH8OUeQ",
  },
  {
    name: "LinkShield – Android URL Security Application",
    description:
      "An Android application that intercepts and analyzes URLs before opening them, using real-time heuristic and content-based checks to detect phishing and malicious links. Automatically blocks unsafe links and features an Allowlist and Scan History.",
    image: p2,
    exploreUrl: "https://www.linkedin.com/posts/kilaparthi-rahul-63b13a293_cybersecurity-androiddevelopment-phishingdetection-activity-7408106772906831872-byGl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcIdg8BtNzqTtG7y-egFZsNk_ckyH8OUeQ",
  },
  {
    name: "Advanced AES-256 File Encryption Tool",
    description:
      "A secure file-level data protection tool using AES-256 encryption. Features secure key derivation using PBKDF2-HMAC-SHA256 with random salt and IV. Built with a user-friendly GUI in Python following secure coding standards.",
    image: p3,
    exploreUrl: "https://www.linkedin.com/posts/kilaparthi-rahul-63b13a293_cybersecurity-cryptography-aes256-activity-7409957223478517761-F0c8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcIdg8BtNzqTtG7y-egFZsNk_ckyH8OUeQ",
  },
  {
    name: "Crono-draft",
    description:
      "A virtual reality experience designed to explore the evolution of worlds from ancient civilizations to modern environments. This project focuses on creating immersive transitions across four distinct timelines, allowing users to experience how environments, structures, and atmospheres change over time.",
    image: crono,
    exploreUrl: "https://www.linkedin.com/posts/kilaparthi-rahul-63b13a293_virtualreality-vrdevelopment-innovation-activity-7460658066825465857-LRDI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcIdg8BtNzqTtG7y-egFZsNk_ckyH8OUeQ",
  },
  {
    name: "Unity Project | Traffic Racer Car Game",
    description:
      "A Traffic Racer–style car driving game built using Unity and C#, focusing on smooth controls and engaging gameplay. The project includes real-time speed, distance, and score tracking, an endless road environment, and a clean HUD interface. Gained hands-on experience in game physics, player movement, collision handling, UI integration, and performance optimization.",
    image: game,
    exploreUrl: "https://www.linkedin.com/posts/kilaparthi-rahul-63b13a293_unity-gamedevelopment-csharp-activity-7411430784202510337-W50d?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEcIdg8BtNzqTtG7y-egFZsNk_ckyH8OUeQ",
  },
  {
    name: "Attendance Calculator Pro",
    description:
      "A static React + Vite attendance calculator that instantly computes current attendance, required percentage, and future attendance projections. Includes dark/light theme support and focuses purely on fast, minimal calculation UX.",
    image: attendanceCalculator,
    exploreUrl: "https://github.com/Rahulkilaparthi/attendance-calculator-pro",
  },
];

export const certifications = [
  {
    title: "B.Tech in Computer Science and Engineering",
    org: "GITAM University",
    date: "2023 – 2027",
    location: "Visakhapatnam, Andhra Pradesh",
    gradeType: "Current CGPA",
    grade: "8.87",
    description: "Passionate Computer Science student specializing in Cybersecurity, Full Stack Development, and modern software technologies.",
  },
  {
    title: "Intermediate Education",
    org: "Sri Gayatri Jr College",
    date: "2021 – 2023",
    location: "Visakhapatnam, Andhra Pradesh",
    gradeType: "Percentage",
    grade: "90.1%",
    description: "Built a strong academic foundation in mathematics, analytical thinking, and science.",
  },
  {
    title: "Secondary Education",
    org: "DR KKR Gowtham School",
    date: "2019 – 2020",
    location: "",
    gradeType: "Percentage",
    grade: "95%",
    description: "Developed strong problem-solving, communication, and academic fundamentals during secondary education.",
  },
];
