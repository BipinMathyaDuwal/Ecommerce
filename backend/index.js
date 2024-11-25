const express = require('express')
require('dotenv').config()
require('./database/connection')

const UserRoute = require('./routes/userRoute')

const cors = require('cors')

const app = express()
const port = process.env.PORT


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

app.use(express.json())
app.use(cors())

app.use('/api', UserRoute);
