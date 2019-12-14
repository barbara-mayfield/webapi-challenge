const express = require("express")
const { validateProjectData } = require("../middleware/validate")
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

router.post("/", validateProjectData(), (req, res) => {
    projects.add(req.body)
      .then(project => {
        res.status(201).json(project)
      })
      .catch(err => {
        next(err)
      })
  })
  
  router.put("/:id", validateProjectData(), (req, res) => {
    projects.update(req.project.id, req.body)
      .then(project => {
          res.status(200).json(project)
      })
      .catch(err => {
        next(err)
      })
  })
  
  router.delete("/:id", validateProjectData(), (req, res) => {
    projects.remove(req.project.id)
      .then(project => {
          res.status(200).json({ message: "The project has been DESTROYED" })
      })
      .catch(err => {
        next(err)
      })
  })
  

module.exports = router;