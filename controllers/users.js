const { request, response } = require("express");
const bcryptjs = require('bcryptjs');

const User = require("../models/user");

const userGet = async (req = request, res = response) => {

    const users = await User.findAll();

    res.status(200).json(users);

}

const usersPost = async (req = request, res = response) => {

    const { name, email, password, role } = req.body;
    const user = new User({ name, email, password, role });

    const emailExists = await User.findOne({ email });

    if (emailExists) {
        return res.status(400).json({
            msg: 'The email is already saved - must be unique'
        });
    };

    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);

    await user.save();

    res.status(201).json(user);

}

module.exports = {
    userGet,
    usersPost
}