const mongoose = require("mongoose");
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/quiz_app";

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connection Successful"))
.catch((err) => {
    console.error("MongoDB Connection Failed:", err);
    process.exit(1);
});

const connection = mongoose.connection;

module.exports = connection;
