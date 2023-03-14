const express = require("express")
require("dotenv").config({ path: "./config/.env" })
const db = require("./config/db")
const cors = require("cors")
db()

const app = express()
app.use(express.json())
app.use(express.static("public"))
app.use(cors())
app.use("/contact", require("./routes/contactRoute"))
const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`SERVER RUNNING http://localhost:${PORT}`))


// 1 express
// 2 app.listen
// 3 dot env import from path config
// 4 connect database useing mongoose.connect / also this code is done in db.js