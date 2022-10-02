const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")

const mockSchema = require("./schema")
const videosMock = require("./videosMockdata")
const projectsMock = require("./projectsMockData")

const schema = buildSchema(mockSchema)
const port = process.env.PORT || 3000

const root = {
  videos: videosMock.videos,
  video: ({ id }) =>
    videosMock.videos.filter(
      (item) => item.id === id
    )[0],
  projects: projectsMock.projects,
  project: ({ id }) =>
    projectsMock.projects.filter(
      (item) => item.id === id
    )[0],
}
var app = express()
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
)
app.listen(port, () => {
  console.log(
    `Example app listening at http://localhost:${port}`
  )
})
