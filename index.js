const express = require("express")
const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")

const mockSchema = require("./schema")
const videosMock = require("./videosMockdata")
const projectsMock = require("./projectsMockData")

const schema = buildSchema(mockSchema)

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
app.listen(4000)
console.log(
  "Running a GraphQL API server at http://localhost:4000/graphql"
)
