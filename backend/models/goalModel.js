const mongoose = require('mongoose');
const goalSchema = mongoose.Schema({
    text :{
        type: String,
        required : [true, "Please add a text value"]
    },
}, {
    timestamp : true ,
})

module.exports = mongoose.model('Goal' , goalSchema)