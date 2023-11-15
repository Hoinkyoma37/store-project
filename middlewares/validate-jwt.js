const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const validateJWT = async (req = request, res = response, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            msg: 'No token passed'
        });
    }

    try {

        const payload = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        const user = await User.findByPk(uid);

        // req.user = user

        next()

    } catch (error) {
        res.status(401).json({
            msg: 'Not Valid Token',
            user
        })

    }

}

module.exports = {
    validateJWT
}