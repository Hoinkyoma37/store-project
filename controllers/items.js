const { response, request } = require("express");
const Item = require("../models/item");

const getItem = async (req = request, res = response) => {

    const items = await Item.findAll();
    res.json(items)
}

const postItem = async (req = request, res = response) => {

    const { body } = req;

    try {
        const item = new Item(body);
        await item.save();

        res.json(item);

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Talk to the Admin'
        })
    }
}

const putItem = async (req = request, res = response) => {

}

const deleteItem = (req = request, res = response) => {

}

module.exports = {
    getItem,
    postItem,
    putItem,
    deleteItem
}