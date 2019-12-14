const express = require("express")
const { validateProjectData, validateProjectId } = require("../middleware/validate")
const actionsRouter = require("./actions")
const projects = require("../helpers/projectModel")

const router = express.Router()

router.use("/:id/actions", actionsRouter)

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
    projects.insert(req.body)
      .then(project => {
        res.status(201).json(project)
      })
      .catch(err => {
        next(err)
      })
  })
  
  router.put("/:id", validateProjectData(), validateProjectId(), (req, res) => {
    projects.update(req.project.id, req.body)
      .then(project => {
          res.status(200).json(project)
      })
      .catch(err => {
        next(err)
      })
  })
  
  router.delete("/:id", validateProjectId(), (req, res) => {
    projects.remove(req.project.id)
      .then(project => {
          res.status(200).json({ message: "The project has been DESTROYED" })
      })
      .catch(err => {
        next(err)
      })
  })
  

module.exports = router;