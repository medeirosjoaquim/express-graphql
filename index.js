const express = require("express")
const cors = require("cors")

const { graphqlHTTP } = require("express-graphql")
const { buildSchema } = require("graphql")

const mockSchema = require("./schema")
const videosMock = require("./videosMockdata")
const projectsMock = require("./projectsMockData")
const feedbackMock = require("./feedbackMockData")
const schema = buildSchema(mockSchema)
const port = process.env.PORT || 3000

const root = {
  hello: () => "hello",
  videos: () => videosMock.videos,
  video: ({ id }) =>
    videosMock.videos.filter(
      (item) => item.id === id
    )[0],
  projects: () => projectsMock.projects,
  project: ({ id }) =>
    projectsMock.projects.filter(
      (item) => item.id === id
    )[0],
  feedback: () => feedbackMock.feedback,
}
const app = express()
app.use(cors())

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
