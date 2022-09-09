const express = require("express");
const Applicant = require("../Models/applicantModel");
const router = express.Router();


//ADD APPLICANT
router.post('/add', async (req, res) => {
	const applicant = new Applicant(req.body)
	try {
		const newApplicant = await applicant.save()
		res.status(200).json(newApplicant);
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

//UPDATE APPLICANT
router.patch("/:id", async (req, res) => {
	try {
		const updatedApplicant = await Applicant.findByIdAndpUdate(req.params.id, req.body, { new: true })
		res.status(200).json(updatedApplicant)
	} catch (err) {
		res.json({ message: err.message })
	}
})

//DELETE APPLICANT
router.delete("/:id", async (req, res) => {
	try {
		await Applicant.findByIdAndDelete(req.params.id)
		res.status(200).json({ message: 'Applicant Deleted' })
	} catch (err) {
		res.json({ message: err.message })
	}
})

module.exports = router;