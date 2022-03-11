const withAuth = require('../authMiddleware');
const UserModel = require('../bdd/models/user');

module.exports = (app) => {
    app.get('/api/auth/checkToken', withAuth, async (req, res) => {
        const userId = req.body._id;
        const user = await UserModel.findOne({ _id: userId });

        res.json({ status: 200, data: { msg: "Token valid", user } });
    })
};