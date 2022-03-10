require('dotenv').config();


const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwtToken = require('jsonwebtoken');
const secret = process.env.SECRET


module.exports = (app) => {
    const UserModel = require('../bdd/models/user');

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

        const user = await new UserModel(data);
        const result = await user.save();
        res.json({ status: 200, result: result });
    })

    app.get('/api/user/:id', async (req, res) => {
        const id = req.params.id;
        const user = await UserModel.findOne({ _id: id });
        res.json({ status: 200, result: user });
    })

    app.post('/api/user/login', async (req, res) => {
        const user = await UserModel.find({ email: req.body.email });

        if (user.length <= 0) {
            res.json({ status: 404, msg: 'email not found' });
        } else {
            const passwordCheck = await bcrypt.compare(req.body.password, user[0].password);

            if (passwordCheck) {
                const payload = { email: user[0].email, id: user[0]._id };
                const token = jwtToken.sign(payload, secret);
                res.json({ status: 200, data: { token, user: user[0] } });
            } else {
                res.json({ status: 401, msg: 'not allowed bad password' });
            }
        }
    })
}