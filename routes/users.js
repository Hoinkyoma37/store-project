const { Router } = require("express");
const { check } = require("express-validator");

const { usersPost, userGet } = require("../controllers/users");
const validateFields = require("../middlewares/validate-field");
const { isRoleValid } = require("../helpers/db-validators");

const router = Router();

router.get('/', userGet)

router.post('/', [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'email is required').isEmail(),
    check('password', 'password is required - More than 6 characters').isLength({ min: 6 }),
    check('roles').custom(isRoleValid),
    validateFields
], usersPost);

router.put('/',);

router.delete('/',);

module.exports = router;