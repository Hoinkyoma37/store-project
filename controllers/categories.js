const { request, response } = require("express");
const { Category } = require("../models");

const getCategories = (req = request, res = response) => {
    res.json({
        msg: 'Hello World'
    })
}

const getCategory = (req = request, res = response) => {
    res.json({
        msg: 'get category by id'
    })
}

const postCategory = async (req = request, res = response) => {

    // Validate the Category in the db 
    const category = req.body.name.toUpperCase();

    const categoryDb = await Category.findOne({ where: { name: category } })
    console.log(categoryDb)

    try {

        // if (!categoryDb) {
        //     return res.status(400).json({
        //         msg: 'The category already exists'
        //     })
        // }
        const data = {
            name: category,
            user: req.user.id
        }

        console.log(data)

    } catch (error) {

    }

    //Generate the Data

    res.json({
        msg: category
    })
}

const putCategory = (req = request, res = response) => {
    res.json({
        msg: 'put Route'
    })
}

const deleteCategory = (req = request, res = response) => {
    res.json({
        msg: 'delete Route'
    })
}


module.exports = {
    getCategories,
    getCategory,
    postCategory,
    putCategory,
    deleteCategory
}