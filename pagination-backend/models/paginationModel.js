const mongoose = require("mongoose");

const paginationSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Pagination", paginationSchema);