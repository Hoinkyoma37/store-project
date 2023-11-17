const { request, response } = require("express");

const Category = require("../models/category");


const getCategories = async (req = request, res = response) => {

    const { limit = 5, since = 0 } = req.query;

    try {

        const [total, categories] = await Promise.all([
            await Category.count({ where: { state: true } }),
            await Category.findAll({
                where: { state: true }, limit: limit, offset: since
            })
        ])

        res.status(200).json({
            total,
            categories
        });

    } catch (error) {
        res.status(500).json({
            msg: 'Database error',
            err: error
        })
    }
}

const getCategory = async (req = request, res = response) => {

}

const postCategory = async (req = request, res = response) => {

    // Validate the Category in the db 
    const name = req.body.name.toUpperCase();

    const categoryDb = await Category.findOne({ where: { name: name } });

    try {

        if (categoryDb) {
            return res.status(400).json({
                msg: ` The category ${categoryDb.dataValues.name} already exists`
            })
        }

        //Generate the Data
        const data = { name: name, userId: req.user.id }

        const category = await new Category(data)

        await category.save()

        res.status(201).json({
            msg: 'Created',
            data
        })

    } catch (error) {
        res.status(500).json({
            msg: 'Db Error'
        })
        console.log(error)
    }

}

const putCategory = async (req = request, res = response) => {
    res.json({
        msg: 'put Route'
    })
}

const deleteCategory = async (req = request, res = response) => {
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