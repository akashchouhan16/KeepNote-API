const mongoose = require('mongoose');


const noteSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    date : {
        type : Date,
        default : Date.now()
    }
});

const note = new mongoose.model('note', noteSchema);
module.exports = note;