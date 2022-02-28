
 const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: {type: String, rquired: true},
    lastName: {type: String, rquired: true},
    nickName: {type: String, rquired: true},
    email: {type: String, rquired: true},
    password: {type: String, rquired: true},
    creationDate: {type: Date, rquired: true},
    
}, {collection: "user"});

module.exports = mongoose.model('user', userSchema);


