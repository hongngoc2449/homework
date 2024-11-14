const express = require('express')
const app = express()
const connectDB = require('./configs/database')
const router = require('./routers')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

connectDB();
router(app);

app.listen(5000, () => {
    console.log("Sever run at port 5000")
})