import express from 'express'
import bodyParser from 'body-parser'
import { postsRoutes } from './routes/posts.js'
import { userRoutes } from './routes/users.js'

import cors from 'cors'

const app = express()
app.use(cors())
app.use(bodyParser.json())
postsRoutes(app)
userRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello from Express!')
})

export { app }
