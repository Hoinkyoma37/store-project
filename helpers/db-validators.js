const Role = require("../models/role");
const User = require("../models/user");

const isRoleValid = async (role = '') => {

    const roleExists = await Role.findOne({
        where: { role: role }
    })
    if (!roleExists) {
        throw new Error(`the role ${role} does not exists in the database`)
    }

}

const isEmailValid = async (email = '') => {

    const emailExists = await User.findOne({
        where: { email: email }
    });
    if (emailExists) {
        throw new Error(`the email ${email} does exists in the database`)
    }
}

const existsUserById = async (id) => {

    const userExists = await User.findByPk(id)
    if (!userExists) {
        throw new Error(`The id: ${id} does not exists`)
    }
}

const isAdmin = async (role = '') => {

}

module.exports = {
    isRoleValid,
    isEmailValid,
    existsUserById,
    isAdmin
}