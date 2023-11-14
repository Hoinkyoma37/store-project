const { request, response } = require("express");
const bcryptjs = require('bcryptjs');

const User = require("../models/user");
const Role = require("../models/role");

const userGet = async (req = request, res = response) => {

    const { limit = 5, since = 0 } = req.query;

    try {

        const [total, users] = await Promise.all([
            await User.count({ where: { state: true } }),
            await User.findAll({
                where: { state: true }, limit: limit, offset: since
            })
        ])

        res.status(200).json({
            total,
            users
        });

    } catch (error) {
        res.status(500).json({
            msg: 'Database error',
            err: error
        })
    }

}

const usersPost = async (req = request, res = response) => {

    const { password, ...body } = req.body;

    try {

        //Assign the values
        const user = new User(body);

        //Password Hashing
        const salt = bcryptjs.genSaltSync();
        user.password = bcryptjs.hashSync(password, salt);

        await user.save();
        res.status(201).json({ user });

    } catch (error) {
        res.status(500).json({
            msg: 'Database Error',
            error //error.parent.detail
        })
    }
}

const updateUser = async (req = request, res = response) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                msg: `User with ${id} not found`
            })
        }

        //Password hash
        if (body.password) {
            const salt = bcryptjs.genSaltSync();
            body.password = bcryptjs.hashSync(body.password, salt)
        }

        await user.update(body)

        res.json({
            msg: 'user updated',
            body: body,
            user
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Error',
            error
        })
    }

}

const deleteUser = async (req = request, res = response) => {

    const { id } = req.params;

    try {

        const user = await User.findByPk(id);

        await user.update({ state: false })

        res.status(200).json({
            msg: 'user deleted',
            user
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Database error'
        })
    }
}


module.exports = {
    userGet,
    usersPost,
    updateUser,
    deleteUser
}