// todo - create a fragment from Video to use with project

// feedback: {
//   videoId,
//   status: 'ready_for_review',
//   feedback: '',
//   updatedAt: new Date(),
// }

const mockSchema = `

type Feedback {
  videoId: String
  status: String
  feedback: String
  updatedAt: Date
}

type Video {
  id: String
  cover: String
  src: String
  filename: String
  size: String
  resolutions: String
  uploadedAt: String
  tags: [String]
}

type Hello {
    hello: String
}
type ProjectVideos {
  id: String
  cover: String
  version: String
  uploadedAt: String
}

type Project {
  id: String
  name: String
  videos: [ProjectVideos]
}

type Root {
  videos: [Video]
  video(id: String): Video
  projects: [Project]
  project(id: String): Project
  hello: Hello
  feedback: Feedback
}

schema {
  query: Root
}

`
module.exports = mockSchema
