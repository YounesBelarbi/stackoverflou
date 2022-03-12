const authenticateJWT = require('../authMiddleware');

module.exports = (app) => {
    const MessageModel = require('../bdd/models/message');
    const UserModel = require('../bdd/models/user');

    app.post('/api/message/save', authenticateJWT, async (req, res) => {
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

    app.get('/api/message/by_topic/:topic_id', async (req, res) => {
        const topic_id = req.params.topic_id;
        const messages = await MessageModel.find({ topic_id });

        if (typeof messages.length !== "number") {
            res.json({ status: 500, data: { msg: 'internal server error', err: messages } })
        }

        //loop with map to add user nickName
        const completeMessages = await Promise.all(messages.map(async (message) => {
            const user = await UserModel.findOne({ _id: message.user_id });
            const m = { ...message.toObject(), nickName: user.nickName };
            return m;

        }))
        console.log(completeMessages);
        res.json({ status: 200, data: { msg: "message by topic", completeMessages } });
    })

    app.patch('/api/message/update/:id', authenticateJWT, async (req, res) => {
        const id = req.params.id;
        const data = {
            content: req.body.content,
        }

        const result = await MessageModel.updateOne({ _id: id }, data);
        res.json({ status: 200, result });
    })


    app.delete('/api/message/delete/:id', authenticateJWT, async (req, res) => {
        const id = req.params.id;
        const result = await MessageModel.deleteOne({ _id: id });
        res.json({ status: 200, result });
    })

}