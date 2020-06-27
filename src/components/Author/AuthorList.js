// Everything is static, so ensure that authorID is unique for every author

const authorList = [
  {
    authorID: 1,
    slug: "dillionmegida",
    name: "Dillion Megida",
    twitter: "iamdillion",
    img: require("../../assets/img/dillion.jpg"),
    skills: ["HTML5", "CSS", "Javascript", "ReactJS", "GatsbyJS"],
    bio:
      "Dillion is a front-end developer and technical writer. He loves teaching what he learns in the simplest ways he can",
    website: "https://dillionmegida.com",
  },
  {
    authorID: 2,
    slug: "ejidikeesther",
    name: "Ejidike Esther",
    twitter: "lady_catheryn",
    img: require("../../assets/img/esther.jpg"),
    skills: ["HTML5", "CSS", "Javascript", "Bootstrap", "Git", "Wordpress CMS"],
    bio:
      "Front-end web developer. I listen to music or sometimes play chords on my guitar when I'm not coding. I also love teaching what I learn.",
  },
]

export default authorList
