const { Router } = require("express");
const { check } = require("express-validator");
const { postCategory } = require("../controllers/categories");


const router = Router();

//Public
router.get('/',)

//Public
router.get('/:id',)

//Create a category - the Admin - private
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
], postCategory)

//Update a category - Admin - private
router.put('/:id',)

//Delete a category - Admin - private
router.delete('/:id',)

module.exports = router;