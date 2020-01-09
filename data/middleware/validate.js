const projects = require("../helpers/projectModel")

function validateProjectData() {
    return (req, res, next) => {
        if (!req.body.name || !req.body.description) {
            return res.status(400).json({ message: "Missing project name or description" })
        } 
        next();
    }
}

function validateProjectId() {
    return (req, res, next) => {
        projects.get(req.params.id)
            .then(project => {
                if (project) {
                    req.project = project
                    next()
                } else {
                    res.status(404).json({ message: "Project with that ID not found" })
                }
            })
            .catch({

            })
    }
    next();
}

module.exports = {
    validateProjectData,
    validateProjectId
}