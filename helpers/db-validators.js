const Role = require("../models/roles");

const isRoleValid = async (role = '') => {

    const rolExists = await Role.findOne({ role })
    if (!rolExists) {
        throw new Error(`The role ${role} is not saved in the Database`)
    }
}

module.exports = {
    isRoleValid
}