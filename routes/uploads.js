const { Router } = require("express");
const { loadFile } = require("../controllers/uploads");
const { validateJWT, hasRole, isAdminRole } = require('../middlewares')

const router = Router();

router.post('/', [
    // validateJWT,
    // hasRole(['ADMIN_ROLE', 'USER_ROLE'])
    // isAdminRole
], loadFile);

module.exports = router;