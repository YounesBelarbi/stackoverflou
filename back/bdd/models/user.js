
const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    nickName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    creationDate: { type: Date, required: true },

}, { collection: "user" });

module.exports = mongoose.model('user', userSchema);


