const express = require("express");
const { Contact } = require("../models/ContactModel");
const router = express.Router();

router.get("/", (request, response) => {
	response.json({
		message:"Contact router activated!"
	});
});


// GET localhost:3000/contacts/all
router.get("/all", async (request,response) => {
	let results = await Contact.find().exec();
	console.log("Found documents:");
	console.log(results);
	response.json({
		message: "Found documents!",
		data: results
	});
});

// GET localhost:3000/contacts/1234
router.get("/:id", (request, response) => {

});

// POST localhost:3000/contacts/
router.post("/", (request, response) => {

});

// PATCH localhost:3000/contacts/1234
router.patch("/:id", (request, response) => {

});

// DELETE localhost:3000/contacts/1234
router.delete("/:id", (request, response) => {

});


module.exports = router;