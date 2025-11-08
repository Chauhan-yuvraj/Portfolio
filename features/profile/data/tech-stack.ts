import { TechStack } from "../types/tech-stack";

export const TECH_STACK_GROUPS: Record<string, TechStack[]> = {
  frontend: [
    { key: "typescript", title: "TypeScript", href: "https://www.typescriptlang.org/", categories: ["Language"], theme: true },
    { key: "javascript", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", categories: ["Language"], theme: true },
    { key: "react", title: "React", href: "https://react.dev/", categories: ["Library", "UI Library"], theme: true },
    { key: "nextjs", title: "Next.js", href: "https://nextjs.org/", categories: ["Framework"], theme: true },
    { key: "tailwindcss", title: "Tailwind CSS", href: "https://tailwindcss.com/", categories: ["Framework"], theme: true },
    { key: "shadcnui", title: "shadcn/ui", href: "https://ui.shadcn.com/", categories: ["Library", "Component Library"], theme: true },
    { key: "radixui", title: "Radix UI", href: "https://www.radix-ui.com/", categories: ["Library", "Component Library"], theme: true },
    // { key: "framermotion", title: "Motion", href: "https://motion.dev/", categories: ["Library", "Animation"], theme: true },
    { key: "reactrouter", title: "React Router", href: "https://reactrouter.com/", categories: ["Library", "Navigation"], theme: true },
    // { key: "react-navigation", title: "React Navigation", href: "https://reactnavigation.org/", categories: ["Library", "Navigation"], theme: true },
  ],

  backend: [
    { key: "nodejs", title: "Node.js", href: "https://nodejs.org/", categories: ["Runtime Environment"], theme: true },
    // { key: "bun", title: "Bun", href: "https://bun.sh/", categories: ["Runtime Environment"], theme: true },
    // { key: "python", title: "Python", href: "https://www.python.org/", categories: ["Language"], theme: true },
    // { key: "php", title: "PHP", href: "https://www.php.net/", categories: ["Language"], theme: true },
    // { key: "java", title: "Java", href: "https://www.java.com/", categories: ["Language"], theme: true },
    // { key: "loopback", title: "LoopBack", href: "https://loopback.io/", categories: ["Framework"], theme: true },
    // { key: "laravel", title: "Laravel", href: "https://laravel.com/", categories: ["Framework"], theme: true },
    { key: "mysql", title: "MySQL", href: "https://www.mysql.com/", categories: ["Database"], theme: true },
    { key: "mongodb", title: "MongoDB", href: "https://www.mongodb.com/", categories: ["Database"], theme: true },
    // { key: "redis", title: "Redis", href: "https://redis.io/", categories: ["Database"], theme: true },
    // { key: "mobx-state-tree", title: "MobX-State-Tree", href: "https://mobx-state-tree.js.org/", categories: ["State Management"], theme: true },
    { key: "redux", title: "Redux", href: "https://redux.js.org/", categories: ["State Management"], theme: true },
    // { key: "docker", title: "Docker", href: "https://www.docker.com/", categories: ["Containerization"], theme: true },
  ],

  tools: [
    { key: "github", title: "Git", href: "https://git-scm.com/", categories: ["Version Control"], theme: true },
    { key: "figma", title: "Figma", href: "https://www.figma.com/", categories: ["Tools", "Design"], theme: true },
    // { key: "ps", title: "Adobe Photoshop", href: "https://www.adobe.com/vn_en/products/photoshop.html", categories: ["Tools", "Design"], theme: true },
    { key: "chatgpt", title: "ChatGPT", href: "https://chatgpt.com/", categories: ["Tools", "AI"], theme: true },
  ],
};

export const TECH_STACK: TechStack[] = [
  // Frontend
  { key: "typescript", title: "TypeScript", href: "https://www.typescriptlang.org/", categories: ["Language"], theme: true },
  { key: "javascript", title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", categories: ["Language"], theme: true },
  { key: "react", title: "React", href: "https://react.dev/", categories: ["Library", "UI Library"], theme: true },
  { key: "nextjs", title: "Next.js", href: "https://nextjs.org/", categories: ["Framework"], theme: true },
  { key: "tailwindcss", title: "Tailwind CSS", href: "https://tailwindcss.com/", categories: ["Framework"], theme: true },
  { key: "shadcnui", title: "shadcn/ui", href: "https://ui.shadcn.com/", categories: ["Library", "Component Library"], theme: true },
  { key: "radixui", title: "Radix UI", href: "https://www.radix-ui.com/", categories: ["Library", "Component Library"], theme: true },
  { key: "framermotion", title: "Motion", href: "https://motion.dev/", categories: ["Library", "Animation"], theme: true },
  { key: "reactrouter", title: "React Router", href: "https://reactrouter.com/", categories: ["Library", "Navigation"], theme: true },
  // { key: "react-navigation", title: "React Navigation", href: "https://reactnavigation.org/", categories: ["Library", "Navigation"], theme: true },
  // { key: "antd", title: "Ant Design", href: "https://ant.design/", categories: ["Library", "UI Library"], theme: true },

  // Backend
  { key: "nodejs", title: "Node.js", href: "https://nodejs.org/", categories: ["Runtime Environment"], theme: true },
  // { key: "bun", title: "Bun", href: "https://bun.sh/", categories: ["Runtime Environment"], theme: true },
  // { key: "python", title: "Python", href: "https://www.python.org/", categories: ["Language"], theme: true },
  // { key: "php", title: "PHP", href: "https://www.php.net/", categories: ["Language"], theme: true },
  // { key: "java", title: "Java", href: "https://www.java.com/", categories: ["Language"], theme: true },
  // { key: "loopback", title: "LoopBack", href: "https://loopback.io/", categories: ["Framework"], theme: true },
  // { key: "laravel", title: "Laravel", href: "https://laravel.com/", categories: ["Framework"], theme: true },
  { key: "mysql", title: "MySQL", href: "https://www.mysql.com/", categories: ["Database"], theme: true },
  { key: "mongodb", title: "MongoDB", href: "https://www.mongodb.com/", categories: ["Database"], theme: true },
  // { key: "redis", title: "Redis", href: "https://redis.io/", categories: ["Database"], theme: true },
  // { key: "mobx-state-tree", title: "MobX-State-Tree", href: "https://mobx-state-tree.js.org/", categories: ["State Management"], theme: true },
  { key: "redux", title: "Redux", href: "https://redux.js.org/", categories: ["State Management"], theme: true },
  // { key: "docker", title: "Docker", href: "https://www.docker.com/", categories: ["Containerization"], theme: true },

  // Tools
  { key: "github", title: "Git", href: "https://git-scm.com/", categories: ["Version Control"], theme: true },
  { key: "figma", title: "Figma", href: "https://www.figma.com/", categories: ["Tools", "Design"], theme: true },
  // { key: "ps", title: "Adobe Photoshop", href: "https://www.adobe.com/vn_en/products/photoshop.html", categories: ["Tools", "Design"], theme: true },
  { key: "chatgpt", title: "ChatGPT", href: "https://chatgpt.com/", categories: ["Tools", "AI"], theme: true },
];
