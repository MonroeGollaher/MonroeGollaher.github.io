export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  school: string;
  period: string;
}

export const experience: Experience[] = [
  {
    title: "Automation Workflow Engineer",
    company: "Vituity",
    period: "Aug 2024 - Present",
    description: [
      "Manage deployments using Octopus, Argo & Seq.",
      "Create custom dashboards to view hospital patient data & charts using Vue + C# / .NET & Blazor.",
      "Write Linqpad scripts to parse billing invoices & patient info using C# / .NET.",
      "Manage Laserfiche Workflows & automated business processes to ensure hospitals get patient charts."
    ]
  },
  {
    title: "IT & Software Development Engineer",
    company: "Hughes Real Estate Group of SilverCreek Realty",
    period: "Mar 2024 - July 2024",
    description: [
      "Built internal and public web platforms using PHP (Laravel), Vue.js, and Tailwind to track real estate transactions, calculate agent commissions, and generate financial forecasts.",
      "Used Python and SQL for data analysis, reporting, and improving lead generation and conversion rates.",
      "Streamlined user account management by integrating Google, Active Directory, and internal systems, and provided technical support for network and system issues."
    ]
  },
  {
    title: "Software Engineer (Contract)",
    company: "Foundry Interactive",
    period: "Oct 2023 - Mar 2024",
    description: [
      "Collaborated with a team to address bugs, implement new features, and ensure ADA accessibility compliance across the clients website using React w/Redux, Parcon, and Python.",
      "Responsible for implementation of new end-to-end test architecture ensuring the clients website met accessibility standards, using Jest/Axe."
    ]
  },
  {
    title: "Software Engineer (Contract)",
    company: "MadeLabs",
    period: "Nov 2022 - Aug 2023",
    description: [
      "Software development in the financial tech space for clients, as well as work on internal products.",
      "Tools primarily used: React, Java, C#, .NET CORE, Redux, SQL, AWS, IntelliJ, Jenkins, DBeaver, Postman, VSCode."
    ]
  },
  {
    title: "Software Developer (Contract)",
    company: "Foundry Interactive",
    period: "Apr 2021 - Oct 2022",
    description: [
      "React w/Typescript, Redux, Node.js, Express, Heroku, Postgress, Prisma, Vite.",
      "Create reusable React components that focus on scalability by utilizing a headless CMS",
      "Respond to daily tickets in Jira and accomplish tasks in a bi-weekly sprint format",
      "Responsible for UI and API unit tests using React Testing Library and Jest / Supertest, Playwright",
      "Experience with Docker and Node.js",
      "Daily standups with the client to fulfill feature requests based off Sketch/Figma mockups & other needs",
      "Helped a team build a website from the ground up for a start up in the health / medical space."
    ]
  }
];

export const education: Education[] = [
  {
    degree: "Full Stack Web Development",
    school: "Boise CodeWorks",
    period: "2020"
  }
];
