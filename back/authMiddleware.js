require('dotenv').config();

const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                res.json({ status: 403, data: { msg: 'Token invalid' } });
            } else {
                req.body._id = decoded.id;
                next();
            }
        })
    } else {
        res.json({ status: 401, data: { msg: 'Token not found' } });
    }
};