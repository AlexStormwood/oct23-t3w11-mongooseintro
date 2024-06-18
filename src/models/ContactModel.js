const mongoose = require("mongoose");

const Contact = mongoose.model("Contact", {
	name: String,
	email: String,
	phone: String,
	state: String,
	address: {
		street: String,
		suburb: String,
		postcode: Number,
		state: String
	},
	message: String,
	isFavourite: Boolean 
});

module.exports = {
	Contact
}