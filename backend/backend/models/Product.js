const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    num: { type: Number, required: false },
    blogExplain: { type: String, required: true },
    html: { type: String, required: true },
    blogHeader:{type:String,required:true},
    image:{type:String,required:true},
    alt:{type:String,required:true},
    createdAt: {
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model("newblogs", ProductSchema); //Database table adı bu 