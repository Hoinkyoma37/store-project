const { Router } = require("express");
const { check } = require("express-validator");

const { getItem, postItem, putItem, deleteItem } = require("../controllers/items");

const router = Router();

router.get('/', getItem)

router.post('/', postItem)

router.put('/', putItem)

router.delete('/', deleteItem)

module.exports = router;