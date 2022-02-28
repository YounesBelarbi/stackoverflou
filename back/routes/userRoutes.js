const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = (app) => {
    const User = require('../bdd/models/user');

    app.post('/api/user/save', async (req, res) => {

        const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
        const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            nickName: req.body.nickName,
            email: req.body.email,
            password: hashPassword,
            creationDate: new Date(),
        }

        const user = await User(data);
        const result = await user.save(); 
        res.json({status:200, result:result});
    })

    app.get('/api/user/:id', async (req, res) => {
        const id = req.params.id;
        const user = await User.find({_id: id});
        res.json({status:200, result: user[0]});
    })
}