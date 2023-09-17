// import * as process from "process";
// import * as dotenv from "dotenv"
// import { Pool, Client } from 'pg'
// dotenv.config()
//
// const port = process.env.DB_PORT || 5432
//
// const pool = new Pool({
//     host: process.env.DB_HOST || 'localhost',
//     database: process.env.DB_DATABASE || 'plantnest',
//     user: process.env.DB_USERNAME || 'plantnest_user',
//     password: process.env.DB_PASSWORD || 'CroKusPRreP9KqOFV1sG',
//     port: +port,
//     max: 20,
//     idleTimeoutMillis: 30000,
//     connectionTimeoutMillis: 2000,
// })
//
// pool.connect((err: any) => {
//     if (err) throw err;
//     console.log("Connected!");
// });
//
// module.exports = pool

import mongoose from 'mongoose';
import * as process from "process";

const dbState = [
    {
        value: 0,
        label: "disconnected"
    },
    {
        value: 1,
        label: "connected"
    },
    {
        value: 2,
        label: "connecting"
    },
    {
        value: 3,
        label: "disconnecting"
    },
]

const connection = async () => {
    const options = {
        user: process.env.MONGO_INITDB_ROOT_USERNAME,
        pass: process.env.MONGO_INITDB_ROOT_PASSWORD
    }
    await mongoose.connect(process.env.MONGODB_HOST || 'mongodb://localhost:27018', options)
    const state = Number(mongoose.connection.readyState)
    console.log(dbState.find(f => f.value == state)?.label, "to db")
}
module.exports = connection