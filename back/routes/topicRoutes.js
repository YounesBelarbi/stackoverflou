const authenticateJWT = require('../authMiddleware');


module.exports = (app) => {
    const TopicModel = require('../bdd/models/topic');

    app.post('/api/topic/save', authenticateJWT, async (req, res) => {

        const data = {
            title: req.body.title,
            description: req.body.description,
            user_id: req.body.user_id,
            creationDate: Date.now()
        }

        const topic = await new TopicModel(data);
        const result = await topic.save();
        res.json({ status: 200, result: result });
    })

    app.get('/api/topic/all', async (req, res) => {
        const topics = await TopicModel.find();
        res.json({ status: 200, topics: topics });

    })

    app.get('/api/topic/:id', async (req, res) => {
        const id = req.params.id;
        const topic = await TopicModel.findOne({ _id: id });
        res.json({ status: 200, result: topic });
    })

    app.patch('/api/topic/update/:id', authenticateJWT, async (req, res) => {
        const id = req.params.id;
        const data = {
            title: req.body.title,
            description: req.body.description
        }

        const result = await TopicModel.updateOne({ _id: id }, data);
        res.json({ status: 200, result });
    })


    app.delete('/api/topic/delete/:id', authenticateJWT, async (req, res) => {
        const id = req.params.id;
        const result = await TopicModel.deleteOne({ _id: id });
        res.json({ status: 200, result });
    })
}