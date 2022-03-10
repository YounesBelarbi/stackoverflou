module.exports = (app) => {
    const MessageModel = require('../bdd/models/message');

    app.post('/api/message/save', async (req, res) => {
        const data = {
            content: req.body.content,
            topic_id: req.body.topic_id,
            user_id: req.body.user_id,
            creationDate: Date.now()
        }

        const message = await new MessageModel(data);
        const result = await message.save();
        res.json({ status: 200, result: result });
    })

    app.get('/api/message/all', async (req, res) => {
        const messages = await MessageModel.find();
        res.json({ status: 200, messages });
    })

    app.get('/api/message/:id', async (req, res) => {
        const id = req.params.id;
        const message = await MessageModel.findOne({ _id: id });
        res.json({ status: 200, result: message });
    })
}