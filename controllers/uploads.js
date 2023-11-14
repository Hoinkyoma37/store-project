const { request, response } = require("express");
const { uploadFile } = require("../helpers/upload-file");


const loadFile = async (req = request, res = response) => {

    if (!req.files || Object.keys(req.files).length === 0) {
        res.status(400).json({
            msg: 'No files were uploaded.'
        });
        return;
    }

    try {

        const imgPath = await uploadFile(req.files, undefined, 'images');

        res.status(200).json({
            imgPath,
            status: '200',
            msg: 'success'
        });

    } catch (error) {
        res.json({
            msg: 'there has been an error',
            e: error
        })
    }
}
module.exports = {
    loadFile
}