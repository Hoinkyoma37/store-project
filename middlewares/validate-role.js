const { request, response } = require("express");


const isAdminRole = (req = request, res = response, next) => {

    if (!req.user) {
        return res.status(500).json({
            msg: 'Needs to validate the role'
        });
    }
    const { role, name } = req.user;

    if (role !== 'ADMIN_ROLE') {
        return res.status(401).json({
            msg: `${name} is not the Admin - have not access`
        });
    }

    next()
}

module.exports = {
    isAdminRole
}