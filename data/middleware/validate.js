const projects = require("../seeds/01-projects")

function validateProjectData() {
    return (req, res, next) => {
        if (!req.body.name || !req.body.description) {
            return res.status(400).json({ message: "Missing project name or description" })
        } 
        next();
    }
}

module.exports = {
    validateProjectData
}