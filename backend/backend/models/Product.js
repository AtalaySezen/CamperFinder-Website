const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    nameSurname: { type: String, required: true },
    subject: { type: String, required: true },
    sender: { type: String, required: true },
    status: { type: Boolean, required: true },
    message: { type: String, required: false },
    note: { type: String, required: false },
    type: { type: String, required: false },
    createdAt: {
        type: Date,
        timestamps: true, 
        default:new Date()
    }
});


module.exports = mongoose.model("mails", ProductSchema); 