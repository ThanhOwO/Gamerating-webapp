const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const gameRoute = require("./routes/games")
const listRoute = require("./routes/list")

dotenv.config()

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected!")).catch((err) => console.log(err))


app.use(express.json())
app.use(cors())

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/games", gameRoute)
app.use("/api/lists", listRoute)

app.listen(8800, () => {
    console.log("Backend server is running!")
})