const { Router } = require("express");
const { check } = require("express-validator");

const { postCategory, getCategories, getCategory, putCategory, deleteCategory } = require("../controllers/categories");
const { validateFields, validateJWT, hasRole } = require("../middlewares");


const router = Router();

//CRUD

//Public
router.get('/', getCategories);

//Public
router.get('/:id', getCategory);

//Create a category - the Admin - private
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    validateJWT,
    hasRole('ADMIN_ROLE'),
    validateFields,
], postCategory)

//Update a category - Admin - private
router.put('/:id', putCategory);

//Delete a category - Admin - private
router.delete('/:id', deleteCategory);

module.exports = router;