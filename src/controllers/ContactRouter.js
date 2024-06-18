const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
	response.json({
		message:"Contact router activated!"
	});
});



module.exports = router;