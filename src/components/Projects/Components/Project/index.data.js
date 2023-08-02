import keeprImg from "../../Assets/keepr.png";
import triviaImg from "../../Assets/triviagame.jpg";
import bugLoggerImg from "../../Assets/buglogger2.png";
import blogzImg from "../../Assets/bloggz.png";
import kanbanImg from "../../Assets/kanban.png";
import pokemonImg from "../../Assets/pokemon.png";

const projects = [
  {
    title: "Keepr",
    blurb:
      "This project was a solo build of a full stack Pinterest clone. Users can create an account and view 'Keeps' that other users have posted. After finding a Keep that they like, users can add the Keep to a Vault. A Vault is a collection of different Keeps. Perhaps one for home-decor ideas, one for DIY tips, etc. Each Vault can be made public or private. Made using Vue.js / Javascript, C#/.Net & MySql.",
    githubLink: "https://github.com/MonroeGollaher/CSharpPintrestClone",
    image: {
      src: keeprImg,
    },
  },
  {
    title: "Bar Trivia",
    blurb:
      "This project was built with other developers. We utilized a lot of team problem solving skills to develop a full stack application aimed at bar-trivia hosts. Hosts can create a game, and invite end users to play via a room code. With the integration of sockets, players and hosts can play in real time. Scores and team ranking are calculated in real time as well.",
    githubLink: "https://github.com/MonroeGollaher/TriviaGame",
    deployedLink: "https://triviamanagement.herokuapp.com/#/",
    image: {
      src: triviaImg,
      flipped: true,
    },
  },
  {
    title: "Pokemon",
    blurb:
      "This project was a full stack solo build. Pokemon cards are rendered to the screen with data coming in from an API. When users find a Pokemon they like, they can add them to their personal collection. Pokemon can also be removed from a users collection. When a Pokemon from the API is saved to the collection, it is transffered to a custom API. Made using Vue.js/Javascript, MongoDB, Node.js / Express.",
    githubLink: "https://github.com/MonroeGollaher/FullstackPokemon",
    image: {
      src: pokemonImg,
      flipped: true,
    },
  },
  {
    title: "Bug Logger",
    blurb:
      "This project was a solo build of a full stack application designed for users in a company to log bugs with software. Users can see bugs posted by other users and leave notes/comments. Bugs can also be closed which make them un-editable, but are not deleted from the database. Bugs can also be sorted by their active status. Made using Vue.js/Javascript with a Node.js & Mongo.Db back-end",
    githubLink: "https://github.com/MonroeGollaher/VueBugLogger",
    image: {
      src: bugLoggerImg,
    },
  },
  {
    title: "Bloggz",
    blurb:
      "This project was a solo build of a blogging site that retrieves and posts information to an API. Users can create an account and post blogs, as well as see blogs that other users have posted. From each blog page, comments can be left on the users post. Comments can be edited or deleted if they belong to the comment poster. Made using Vue.js/Javascript and an API.",
    githubLink: "https://github.com/MonroeGollaher/VueBlogger",
    image: {
      src: blogzImg,
      flipped: true,
    },
  },
  {
    title: "Kanban Board",
    blurb:
      "This full stack project was built with another developer in just a few days. We replicated a kanban board, where users can create multple to-do lists on one 'board'. Each user can have as many boards as they like, all with different lists and tasks associated to each. Because each board is intended to be shared with collegaues, each task on a to-do list can have comments as well. Made using Vue.js/Javascript, Mongo.db & Node.js with auth0 for authentication.",
    githubLink: "https://github.com/MCharron93/Kanbantoo-Electric-Boogaloo",
    deployedLink: "https://kanbantooelectricboogaloo.herokuapp.com/",
    image: {
      src: kanbanImg,
    },
  },
];

export default projects;
