import cors from 'cors'
import express from 'express'

import timeRoutes from './routes/timeRoutes.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/time', timeRoutes)

const PORT = process.env.PORT || 3000

try {
  app.listen(PORT, () => {
    console.info(`Server listening on port ${PORT}...`)
  })
} catch (error) {
  console.error(error.message)
}