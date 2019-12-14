const express = require("express")
const helmet = require("helmet")
const logger = require("./data/middleware/logger")
const cors = require("cors")
const welcomeRouter = require("./data/routers/welcome")
const projectRouter = require("./data/routers/project")

const app = express()
const host = process.env.HOST || "localhost"
const port = process.env.PORT || 8080


app.use(helmet())
app.use(logger)
app.use(cors())
app.use(express.json())

app.use("/api", welcomeRouter)
app.use("/api/project", projectRouter)

app.use((req, res) => {
    res.status(404).json({
        message: "Route was not found"
    })
})

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: "An internal error occured" })
})

app.listen(port, host, () => {
	console.log(`Running at http://${host}:${port}`)
})