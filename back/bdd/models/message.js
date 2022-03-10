const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    content: { type: String, required: true },
    topic_id: { type: String, required: true },
    user_id: { type: String, required: true },
    creationDate: { type: Date, required: true },
}, { collection: "message" });

module.exports = mongoose.model('message', messageSchema);