import { useStaticQuery, graphql } from "gatsby"

export default () => {
  const result = useStaticQuery(graphql`
    query {
      categories: allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              category
            }
          }
        }
      }
    }
  `)

  const { edges } = result.categories

  // To get Post Counts

  let GeneralArr, HTMLArr, CSSArr, JavascriptArr, GitArr

  GeneralArr = edges.filter(
    ({ node }) => node.frontmatter.category === "general"
  )

  HTMLArr = edges.filter(({ node }) => node.frontmatter.category === "html")

  CSSArr = edges.filter(({ node }) => node.frontmatter.category === "css")

  JavascriptArr = edges.filter(
    ({ node }) => node.frontmatter.category === "javascript"
  )

  GitArr = edges.filter(({ node }) => node.frontmatter.category === "git")

  const NumOfPosts = {
    General: GeneralArr.length,
    HTML: HTMLArr.length,
    CSS: CSSArr.length,
    Javascript: JavascriptArr.length,
    Git: GitArr.length,
  }

  return [
    {
      name: "CSS",
      excerpt: "Cascading Stylesheet",
      link: "/css",
      numOfPosts: NumOfPosts.CSS,
    },
    {
      name: "General",
      excerpt: "General web topics",
      link: "/general",
      numOfPosts: NumOfPosts.General,
    },
    {
      name: "Git",
      excerpt: "Distributed version control",
      link: "/git",
      numOfPosts: NumOfPosts.Git,
    },
    {
      name: "HTML",
      excerpt: "HyperText Markup Language",
      link: "/html",
      numOfPosts: NumOfPosts.HTML,
    },
    {
      name: "Javascript",
      excerpt: "Scripting language for the web",
      link: "/javascript",
      numOfPosts: NumOfPosts.Javascript,
    },
  ]
}
