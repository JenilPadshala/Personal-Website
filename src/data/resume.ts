export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface Profile {
  name: string;
  tagline: string;
  summary: string;
  location: string;
  email: string;
  resumeUrl: string;
  socials: SocialLink[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface ProjectItem {
  name: string;
  period: string;
  stack: string[];
  highlights: string[];
  link?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface EducationItem {
  institution: string;
  location: string;
  credential: string;
  score: string;
  period: string;
}

export const profile: Profile = {
  name: "Jenil Padshala",
  tagline: "AI/ML Engineer & Systems Builder",
  summary:
    "Computer Science engineer focused on machine learning, edge AI, and high-performance systems. I enjoy taking ideas from research papers to real, deployed systems — from autograd engines in C++ to assistive vision devices running on the edge.",
  location: "India",
  email: "jenilpadshala@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/JenilPadshala",
      handle: "JenilPadshala",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/jenil-padshala",
      handle: "jenil-padshala",
    },
    {
      label: "Email",
      href: "mailto:jenilpadshala@gmail.com",
      handle: "jenilpadshala@gmail.com",
    },
  ],
};

export const experience: ExperienceItem[] = [
  {
    role: "AIML Research Intern",
    organization: "Carnegie Mellon University",
    location: "Pittsburgh, PA, USA",
    period: "June 2024 – July 2024",
    highlights: [
      "Conducted advanced time-series analysis using LSTM RNNs to analyze ECG data, integrating temporal data with non-temporal data to improve clinical decision-making.",
      "Attended Multi-Modal Machine Learning classes and successfully completed graduate-level assignments.",
      "Fostered a habit of reading and analyzing research papers to stay current with the latest advancements in AI & ML.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "Scalar Autograd Engine",
    period: "June 2026",
    stack: ["C++", "Python", "Pybind11", "Git"],
    highlights: [
      "Developed a decoupled, lightweight automatic differentiation engine in C++ utilizing custom Value containers linked via weak pointers to prevent cyclic memory references.",
      "Implemented a reverse-mode automatic differentiation backend using an iterative Depth-First Search (DFS) topological sort to securely compute gradients over complex multi-variable Directed Acyclic Graphs (DAGs).",
      "Supported core arithmetic operations via operator overloading, validating correctness through a robust multi-variable calculus test suite.",
      "Exposed the high-performance C++ backend to Python using Pybind11 to enable seamless, high-level interface experimentation and validation against popular deep learning frameworks.",
    ],
  },
  {
    name: "Real-Time Visual Assistance System",
    period: "Feb 2025 – May 2025",
    stack: ["Python", "RPi 5", "YOLOv11n", "OpenCV", "VLMs"],
    highlights: [
      "Engineered an edge-AI assistive device on a Raspberry Pi 5 optimized with a Hailo-8 AI Accelerator to provide real-time spatial awareness and multi-modal feedback for visually impaired individuals.",
      "Optimized and deployed a concurrent vision pipeline executing object detection (YOLOv11n), multi-object tracking (HailoTracker/JDE), and monocular depth estimation (scdepthv3) delivering 29 FPS at 720p resolution.",
      "Developed an offline voice interface using the Vosk toolkit for local wake-word and command speech-to-text transcription, integrated with a Mistral LLM to parse and categorize user intent.",
      "Constructed a multi-stage text processing pipeline leveraging OpenCV for image deskewing, EasyOCR for raw character extraction, and LLM API post-processing to clean text anomalies before gTTS generation.",
      "Implemented a cloud-connected scene understanding module utilizing a LLaVA-13B vision-language model hosted via Ollama on Azure Cloud to deliver rapid, concise textual environment descriptions.",
    ],
  },
  {
    name: "Time-Series Analysis of ECG",
    period: "June 2024 – July 2024",
    stack: ["Python", "LSTM", "Data Pre-processing", "Time-Series"],
    highlights: [
      "Conducted exploratory data analysis and pre-processed ECG data, addressing missing values and ensuring extraction of high-quality ECG recordings.",
      "Developed an LSTM model that achieved 89.1% accuracy in predicting diagnostic super-classes from 12-lead ECG signals.",
      "Proposed future steps to integrate non-temporal data with the predictions for enhanced performance.",
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["C/C++", "Python", "SQL", "Java", "Shell Scripting"],
  },
  {
    category: "ML & Data Science",
    items: ["PyTorch", "OpenCV", "Sklearn", "NumPy", "Pandas", "Matplotlib"],
  },
  {
    category: "Web & Databases",
    items: ["FastAPI", "Streamlit", "Express.js", "Node.js", "JavaScript", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Docker", "AWS", "Google Cloud Platform"],
  },
];

export const education: EducationItem[] = [
  {
    institution: "SRM University AP",
    location: "Amaravati, AP",
    credential: "B.Tech in Computer Science and Engineering",
    score: "CGPA: 9.06 / 10.0",
    period: "2021 – 2025",
  },
  {
    institution: "Atmiya Vidya Mandir",
    location: "Surat, GJ",
    credential: "AISSCE (12th Grade)",
    score: "95.4%",
    period: "2020 – 2021",
  },
  {
    institution: "Atmiya Vidya Mandir",
    location: "Surat, GJ",
    credential: "AISSE (10th Grade)",
    score: "94.0%",
    period: "2018 – 2019",
  },
];
