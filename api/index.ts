import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { dbConfig } from './config/db.config'
import { router } from './router'

// Connect to database
mongoose.connect(dbConfig.url)
const database = mongoose.connection

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected')
})

// Start express server
const app = express()

const corsOptions = {
    origin: 'http://localhost:8081',
}

app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
