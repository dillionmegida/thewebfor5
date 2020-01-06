// Everything is static, so ensure that authorID is unique for every author

const authorList = [
    {
        authorID: 1,
        slug: "dillionmegida",
        name: "Dillion Megida",
        twitter: "iamdillion",
        img: require('../../assets/img/dillion.jpg'),
        skills: [
            "HTML5", "CSS", "Javascript", "ReactJS", "GatsbyJS"
        ],
        bio: "Dillion is a front-end developer and technical writer. He loves teaching what he learns in the simplest ways he can",
        website: "https://dillionmegida.com"
    },
    {
        authorID: 2,
        slug: "kingesther",
        name: "King Esther",
        twitter: "lady_catheryn",
        img: require('../../assets/img/dillion.jpg'),
        skills: [
            "git", "HTML5"
        ],
        bio: "..."
    }
]

export default authorList;