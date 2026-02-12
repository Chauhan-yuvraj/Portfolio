import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "ai-portfolio-agent",
    title: "AI Portfolio Agent (MCP-Powered)",
    period: {
      start: "2025",
    },
    link: "https://github.com/Chauhan-yuvraj",
    skills: [
      "Next.js",
      "Python",
      "FastAPI",
      "MCP (Model Context Protocol)",
      "Gemini AI",
      "TypeScript",
    ],
    description: `The very platform you are looking at. A next-gen portfolio featuring an embedded AI agent built using Anthropic's Model Context Protocol (MCP).
    The architecture connects a Next.js frontend to a Python backend (FastAPI), which spawns an MCP Server. The AI autonomously decides which "tools" to use—whether fetching real-time GitHub stats, reading bio data, or saving user preferences to local storage.`,
    isExpanded: true,
  },
  {
    id: "high-performance-explorer",
    title: "High-Performance File Explorer",
    period: {
      start: "2024",
    },
    link: "https://github.com/Chauhan-yuvraj",
    skills: [
      "React",
      "Wails",
      "TailwindCSS",
      "Zustand",
      "Virtualization",
      "Performance Optimization",
    ],
    description: `Engineered a custom file explorer using list virtualization, achieving 80x faster search and rendering speeds compared to native Windows Explorer by minimizing DOM overhead. Features instant file previews (code, image, video) and lag-free handling of million-file datasets.`,
  },
  {
    id: "drone-management-system",
    title: "Real-time Drone Management System",
    period: {
      start: "2024",
    },
    link: "https://github.com/Chauhan-yuvraj",
    skills: [
      "Node.js",
      "Socket.io",
      "Mapbox",
      "React",
      "MongoDB",
      "Express",
    ],
    description: `Engineered a real-time command dashboard utilizing Mapbox and WebSockets to render live flight paths and device telemetry (battery/signal) with zero latency. Designed a responsive interface to manage fleet operations, drone registration, and performance auditing.`,
  },
  {
    id: "structure-maker",
    title: "structure-maker",
    period: {
      start: "2024",
    },
    link: "https://github.com/Chauhan-yuvraj/structure-maker",
    skills: [
      "Developer Tool",
      "Software Architecture",
      "CLI",
      "Node.js",
    ],
    description: `A developer tool focused on resolving complex software scaffolding issues. It led to a 40% reduction in setup time for long-standing unresolved architecture problems in previous roles.`,
  },
  {
    id: "indian-army-visitor-app",
    title: "Indian Army Visitor's Book App",
    period: {
      start: "01.2025",
      end: "06.2025",
    },
    link: "https://github.com/Chauhan-yuvraj",
    skills: ["Mobile App", "React Native", "OCR", "Digitalization"],
    description: `Created a mobile application for the Indian Army serving as a Visitor's Book. Integrated OCR technology to convert handwritten text into digital records, significantly improving data accuracy and retrieval speed.`,
  },
];