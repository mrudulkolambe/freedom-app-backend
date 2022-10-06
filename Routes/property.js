const express = require("express");
const router = express.Router();
const Property = require('../Models/propertyModel')


//ADD PROPERTY
router.post('/add', async (req, res) => {
	const property = new Property(req.body)
	try {
		const newProperty = await property.save()
		res.status(200).json(newProperty);
	} catch (err) {
		res.status(400).json({ message: err.message })
	}
})

//UPDATE PROPERTY
router.patch("/:id", async (req, res) => {
	try {
		const updatedProperty = await Property.findByIdAndpUdate(req.params.id, req.body, { new: true })
		res.status(200).json(updatedProperty)
	} catch (err) {
		res.json({ message: err.message })
	}
})

//DELETE PROPERTY
router.delete("/:id", async (req, res) => {
	try {
		await Property.findByIdAndDelete(req.params.id)
		res.status(200).json({ message: 'Property Deleted' })
	} catch (err) {
		res.json({ message: err.message })
	}
})

module.exports = router;