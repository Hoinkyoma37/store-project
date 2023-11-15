const { request, response } = require("express");
const bcryptjs = require('bcryptjs');

const User = require("../models/user");
const genJWT = require("../helpers/genJWB");


const login = async (req = request, res = response) => {

    const { email, password } = req.body;

    try {

        const user = await User.findAll({ where: { email: email } });

        if (!user) {
            return res.json({
                msg: 'User/Password are not correct - email'
            })
        }

        if (user.state === false) {
            return res.status(400).json({
                msg: '- state false'
            })
        }

        const validPassword = bcryptjs.compareSync(password, (user[0].dataValues.password));

        if (validPassword) {
            return res.status(400).json({
                msg: '- Wrong Password'
            });
        }


        // JWT
        const token = await genJWT(user.uid)

        res.status(200).json({
            password,
            user,
            token
        })

    } catch (error) {
        return res.send("Data Base error")
    }
}


module.exports = {
    login
}