const assert = require("chai").assert
const path = require("path")
const fs = require("fs")

const CATEGORIES = ["html", "css", "general", "javascript"]
const PATH_TO_ARTICLES = "../src/pages/p"

describe("Articles", () => {
  it("articles must have the correct category field", () => {
    CATEGORIES.map(cat => {
      const dir = path.resolve(__dirname, PATH_TO_ARTICLES, cat)
      const articleNames = fs.readdirSync(dir)

      articleNames.forEach(article => {
        // in some cases, the article is directory with index.md
        const isDir = path.extname(article) === "" ? true : false

        let pathToArticle

        if (isDir) {
          pathToArticle = path.resolve(
            __dirname,
            PATH_TO_ARTICLES,
            cat,
            article,
            "index.md"
          )
        } else {
          pathToArticle = path.resolve(
            __dirname,
            PATH_TO_ARTICLES,
            cat,
            article
          )
        }

        const articleContents = fs.readFileSync(pathToArticle)

        // regex will check for the path in the md file
        // where category is specified, in this format:
        // category: ...
        const regexToCheckCategory = new RegExp(`category: ${cat}`)

        const isCorrect = regexToCheckCategory.test(articleContents)
        assert.isTrue(
          isCorrect,
          `expected category field to be '${cat}' for ${article} in ${cat} category`
        )
      })
    })
  })
})
