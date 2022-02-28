module.exports = (app) => {
    const Topic = require('../bdd/models/topic');

    app.post('/api/topic/save', async (req, res) => {

        const data = {
            title: req.body.title,
            description: req.body.description,
            user_id: req.body.user_id,
            creationDate: Date.now()
        }

        const topic = await Topic(data);
        const result = await topic.save(); 
        res.json({status:200, result:result});
    })

    app.get('/api/topic/all', async (req, res) => {
        const topics = await Topic.find();
        res.json({status:200, topics: topics});

    })
}