import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from './routes/postRoute.js'
const app  = express()

dotenv.config({path:"./.env"})

const port = process.env.PORT

app.use(cors())
app.use(bodyParser.json())

import('./db/conndb.js')

app.use(router)
app.listen(port, () =>{
    console.log(`server is listening on port ${port}`);
    
})