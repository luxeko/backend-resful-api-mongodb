import express from 'express'
import http from "http"
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import * as process from "process";
import * as dotenv from "dotenv"

const connection = require('./config/database')
dotenv.config()

const port = process.env.PORT || 8081
const hostname = process.env.HOST_NAME || 'localhost'
const app = express()

app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser())

const server = http.createServer(app)

;(async () => {
    try {
        await connection()
        server.listen(+port, hostname, () => {
            console.log(`Server is running on http://${hostname}:${port}`);
        });
    } catch (err) {
        console.log(err)
    }
})()