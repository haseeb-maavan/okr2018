var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    
    _id: String,
    user_id: Number,
    user_name: String,
    password: String
});

module.exports = mongoose.model('users', userSchema);