const mongoose = require("mongoose");
require("dotenv").config();
const mongodb_url = process.env.MONGODB_URL;
// module.exports = mongoose.connect("mongodb://localhost:27017/googletasks")
module.exports = mongoose.connect(mongodb_url)
