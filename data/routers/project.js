const express = require("express")
const projects = require("../helpers/projectModel")

const router = express.Router()

router.get("/", (req, res) => {
    projects.get(res.body)
        .then(project => {
            res.status(200).json(project)
        })
        .catch(err => {
            res.status(400).json({ error: "Could not get project" })
        })
})

module.exports = router;