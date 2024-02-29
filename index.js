require('dotenv').config()
const express = require('express')



const app = express()
app.use(express.json())

//router

//port
const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})