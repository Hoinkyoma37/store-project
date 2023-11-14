const { request, response } = require("express");
const Category = require("../models/category");


const getCategories = (req, res) => {

}

const getCategory = (req, res) => {

}

const postCategory = async (req = request, res = response) => {

    const name = req.body.name.toUpperCase()

    const dbCategory = await Category.findOne({ name });

    if (dbCategory) {
        return res.status(400).json({
            msg: `The Category ${dbCategory.name}, already exists`
        });
    }

    //Generate the data to save
    const data = {
        name,
        user: req.user._uid
    }

    //Save the data to the DB
    const category = new Category(data);
    await category.save()

    //response
    res.status(201).json({ category })
}

const putCategory = (req, res) => {

}

const deleteCategory = (req, res) => {

}


module.exports = {
    postCategory
}