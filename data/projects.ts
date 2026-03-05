export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "Keepr",
    description:
      "Solo build of a full stack Pinterest clone. Users can create an account and view 'Keeps' that other users have posted. After finding a Keep they like, users can add the Keep to a Vault. Each Vault can be made public or private.",
    techStack: ["Vue.js", "JavaScript", "C#", ".Net", "MySQL"],
    githubUrl: "https://github.com/MonroeGollaher/CSharpPintrestClone",
    image: "/images/projects/keepr.png"
  },
  {
    title: "Bar Trivia",
    description:
      "Built with other developers. Full stack application aimed at bar-trivia hosts. Hosts can create a game and invite end users to play via a room code. With socket integration, players and hosts can play in real time.",
    techStack: ["Vue.js", "JavaScript", "Node.js", "MongoDB", "Sockets"],
    githubUrl: "https://github.com/MonroeGollaher/TriviaGame",
    liveUrl: "https://triviamanagement.herokuapp.com/#/",
    image: "/images/projects/triviagame.jpg"
  },
  {
    title: "Buglogger",
    description:
      "Solo build of a full stack application designed for users in a company to log bugs with software. Users can see bugs posted by other users and leave notes/comments. Bugs can be closed, making them un-editable but not deleted.",
    techStack: ["Vue.js", "JavaScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/MonroeGollaher/VueBugLogger",
    image: "/images/projects/buglogger.png"
  },
  {
    title: "Inspire",
    description:
      "A home page where users can see the time, weather and an inspirational quote; as well as create a to-do list where tasks can be marked as completed or deleted.",
    techStack: ["Vue.js", "JavaScript"],
    githubUrl: "https://github.com/MonroeGollaher/VueInspire",
    image: "/images/projects/vueinspire.png"
  },
  {
    title: "Bloggz",
    description:
      "Solo build of a blogging site that retrieves and posts information to an API. Users can create an account and post blogs, as well as see blogs that other users have posted. Comments can be left, edited, or deleted.",
    techStack: ["Vue.js", "JavaScript", "API"],
    githubUrl: "https://github.com/MonroeGollaher/VueBlogger",
    image: "/images/projects/bloggz.png"
  },
  {
    title: "Kanban Board",
    description:
      "Full stack project built with another developer. Replicated a kanban board where users can create multiple to-do lists on one board. Each task on a to-do list can have comments as well.",
    techStack: ["Vue.js", "JavaScript", "MongoDB", "Node.js", "Auth0"],
    githubUrl: "https://github.com/MCharron93/Kanbantoo-Electric-Boogaloo",
    liveUrl: "https://kanbantooelectricboogaloo.herokuapp.com/",
    image: "/images/projects/kanban.png"
  },
  {
    title: "Pokemon",
    description:
      "Full stack solo build. Pokemon cards are rendered from an API. Users can add Pokemon to their personal collection, which is stored via a custom API.",
    techStack: ["Vue.js", "JavaScript", "MongoDB", "Node.js", "Express"],
    githubUrl: "https://github.com/MonroeGollaher/FullstackPokemon",
    image: "/images/projects/pokemon.png"
  }
];
