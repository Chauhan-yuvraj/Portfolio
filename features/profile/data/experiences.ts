import { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "abhyuday_bharat",
    companyName: "Abhyuday Bharat",
    positions: [
      {
        id: "ab_fullstack_dev",
        title: "Full Stack Developer",
        employmentPeriod: {
          start: "06.2025",
        },
        employmentType: "Full-time",
        icon: "code",
        description: `- Contributing to Abhyuday Integrated Disaster Response Management System (AIDRMS), a software developed in collaboration with the Indian Army.
- Worked as a Mobile App Developer (Expo React Native, TypeScript) and Backend Developer (Node.js, Express, PostgreSQL).
- Developed features for real-time disaster alerts, authority coordination, and hospital/station mapping.
- Improved backend data handling and API integration to ensure scalable and reliable disaster response workflows.`,
        skills: [
          "React Native",
          "Expo",
          "TypeScript",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "API Integration"
        ],
        isExpanded: true
      },
      {
        id: "ab_fullstack_intern",
        title: "Full Stack Developer Intern",
        employmentPeriod: {
          start: "01.2025",
          end: "06.2025"
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Developed multiple web applications using Next.js, React, and Node.js, focusing on responsive UI and scalable backend architecture.
- Created a mobile application for the Indian Army serving as a Visitor's Book, integrating OCR technology to convert handwritten text into digital records using react native.
- Collaborated with team members to deliver secure, efficient, and user-friendly solutions.`,
        skills: [
          "Next.js",
          "React",
          "Node.js",
          "React Native",
          "RESTful APIs"
        ]
      }
    ],
    isCurrentEmployer: true
  },
  {
    id: "incodus_technologies",
    companyName: "Incodus Technologies",
    positions: [
      {
        id: "incodus_frontend_intern",
        title: "Front End Developer Intern",
        employmentPeriod: {
          start: "04.2024",
          end: "12.2024"
        },
        employmentType: "Internship",
        icon: "code",
        description: `- Gained hands-on experience in Angular, React, TypeScript, JavaScript, HTML, CSS, TailwindCSS, and Redux state management.
- Built responsive web applications and dashboards using Angular with reusable components and optimized UI/UX.
- Strengthened understanding of frontend best practices, state management, and component-driven development.`,
        skills: [
          "Angular",
          "React",
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "TailwindCSS",
          "Redux"
        ]
      }
    ]
  },
  {
    id: "hackathons",
    companyName: "Hackathons",
    positions: [
      {
        id: "hack_for_india_2023",
        title: "Hack for India 2023",
        employmentPeriod: {
          start: "2023"
        },
        icon: "code",
        description: `- Built a location-based freelancing platform using the MERN stack to connect local workers with nearby jobs.
- Optimized MongoDB schema to reduce response times by 25% and implemented a responsive React front-end with robust Node.js APIs, boosting user engagement by 20% under tight deadlines.`,
        skills: ["MERN Stack", "MongoDB", "React", "Node.js", "API Development"]
      },
      {
        id: "ssip_2023",
        title: "SSIP - 2023",
        employmentPeriod: {
          start: "2023"
        },
        icon: "code",
        description: `- Developed an AI-driven chatbot for GMSCL using the MERN stack to streamline access to medical equipment data and meeting bookings.
- Optimized APIs and MongoDB queries to reduce information retrieval time by 30%, while a React-based interface improved navigation and boosted user satisfaction by 25%.`,
        skills: ["AI", "Chatbot", "MERN Stack", "MongoDB", "React", "API Optimization"]
      }
    ]
  },
  {
    id: "achievements_certs",
    companyName: "Achievements & Certifications",
    positions: [
      {
        id: "cert_ml_workshop",
        title: "Machine Learning Workshop",
        employmentPeriod: {
          start: "2024"
        },
        icon: "education",
        description: `- Conducted a workshop on Machine Learning fundamentals at Silver Oak University, showcasing a spam detection model in Python.
- Covered data preprocessing, model training, and evaluation through hands-on exercises.`,
        skills: ["Machine Learning", "Python", "Data Preprocessing"]
      },
      {
        id: "cert_react_frontend",
        title: "Frontend Developer (React) Certificate",
        employmentPeriod: {
          start: "2024"
        },
        icon: "education",
        description: "Certified in React.js development, demonstrating proficiency in component-based architecture, responsive UI design, and modern frontend practices.",
        skills: ["React.js", "Component-Based Architecture", "Responsive UI"]
      }
    ]
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "edu_bca",
        title: "Bachelor's of Computer Applications - Silver Oak University",
        employmentPeriod: {
          start: "2022",
          end: "2025"
        },
        icon: "education",
        description: `- Achieved a CGPA of 9.53.`,
        skills: ["Software Development", "Data Structures", "Algorithms", "Database Management", "Web Technologies"]
      },
      {
        id: "edu_hsc",
        title: "HSC-Commerce - St Mary's School",
        employmentPeriod: {
          start: "2021",
          end: "2022"
        },
        icon: "education",
        description: `- Scored 74.76%.`,
        skills: []
      },
      {
        id: "edu_ssc",
        title: "SSC - St Mary's School",
        employmentPeriod: {
          start: "2019",
          end: "2020"
        },
        icon: "education",
        description: `- Scored 78.87%.`,
        skills: []
      }
    ]
  }
];