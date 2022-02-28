const mongoose = require('mongoose');


const topicMongoose = new mongoose.Schema({
    title:{type: String, required: true},
    description:{type: String, required: true},
    user_id:{type: String, required: true},
    creationDate:{type: Date, required: true},
}, {collection: "topic"});

module.exports = mongoose.model('topic',topicMongoose);