const express = require("express")
const actions = require("../helpers/actionModel")
const projects = require("../helpers/projectModel")

const router = express.Router({
	mergeParams: true,
})

router.get("/", (req, res) => {
	projects.getProjectActions(req.params.id)
		.then(data => {
			res.json(data)
		})
		.catch(err => {
			res.status(500).json({
				message: "Could not get project actions",
			})
		})
})

router.get("/:id", (req, res) => {
	actions.get(req.params.id)
		.then(data => {
			if (data) {
				res.json(data)
			} else {
				res.status(404).json({
					message: "Action was not found",
				})
			}
		})
		.catch(err => {
			res.status(500).json({
				message: "Could not get action",
			})
		})
})

module.exports = router