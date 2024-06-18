const { app } = require("./server.js");

const { connect } = require("./utils/database");


app.listen(3000, () => {
	connect();
	console.log("Server running on port 3000");
});