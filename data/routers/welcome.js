const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
  res.send("<h1>Welcome to the WebAPI Challenge!</h1>")
})

router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the WebAPI Challenge" })
})

module.exports = router
