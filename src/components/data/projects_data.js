import Advice from "../../assets/projects_images/Advice.JPG";
import Map from "../../assets/projects_images/Map.JPG";
import Tindog from "../../assets/projects_images/Tindog.JPG";
import GITHUB from "../../assets/projects_images/Github.JPG";
import PIZZA from "../../assets/projects_images/Pizza.JPG";

const data_projects = [
  {
    name: "GitHub Visualizer",
    image: GITHUB,
    deployed_url: "",
    github_url: "",
    category: ["react.js"],
  },

  {
    name: "Pizza Tracker",
    image: PIZZA,
    deployed_url: "https://github.com/manishadtani19/Pizza_Tracker_WebApp",
    github_url: "https://github.com/manishadtani19/Pizza_Tracker_WebApp",
    category: ["node.js", "mongoDB", "socket.io"],
  },

  {
    name: "Map me",
    image: Map,
    deployed_url: "https://github.com/manishadtani19/Maps.Me",
    github_url: "https://github.com/manishadtani19/Maps.Me",
    category: ["html_css", "Vanilla"],
  },

  {
    name: "Advice_Web_App",
    image: Advice,
    deployed_url: "https://wonderful-goldstine-c43d62.netlify.app/",
    github_url: "https://github.com/manishadtani19/advice-web-app",
    category: ["react"],
  },

  {
    name: "Tinder_For_Dog(WebPage)",
    image: Tindog,
    deployed_url:
      "https://github.com/manishadtani19/FrontEnd-website-Tinder-for-Dogs-",
    github_url:
      "https://github.com/manishadtani19/FrontEnd-website-Tinder-for-Dogs-",
    category: ["html_css", "vanilla"],
  },
];

export default data_projects;
