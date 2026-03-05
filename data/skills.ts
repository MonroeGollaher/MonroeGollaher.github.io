export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools & DevOps";
}

export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "HTML5", category: "Frontend" },
  { name: "CSS3", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },

  // Backend
  { name: "Node.js", category: "Backend" },
  { name: "C#", category: "Backend" },
  { name: ".NET Core", category: "Backend" },
  { name: "SQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "REST APIs", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MySQL", category: "Backend" },

  // Tools & DevOps
  { name: "Git", category: "Tools & DevOps" },
  { name: "Auth0", category: "Tools & DevOps" },
  { name: "Socket.io", category: "Tools & DevOps" },
  { name: "VS Code", category: "Tools & DevOps" },
];
