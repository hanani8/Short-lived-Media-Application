const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: {type: String, required: true},
    profilePic:{type: String, required:true},
    stories:[{
        type:String
    }]
})

module.exports = mongoose.model('user', userSchema);