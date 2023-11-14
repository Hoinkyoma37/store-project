const express = require('express');
const cors = require('cors');
const { db } = require('../db/db');
const fileUpload = require('express-fileupload');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            categories: '/api/categories',
            items: '/api/items',
            uploads: '/api/uploads',
            users: '/api/users'
        }

        this.dbConnection()

        //Middleware
        this.middleware();

        //Routes
        this.routes();
    }

    async dbConnection() {

        try {
            await db.sync({ alter: true })
            console.log(`Database online`)

        } catch (err) {
            throw new Error(err)
            console.log(err)
        }
    }

    middleware() {

        //Serving static files to the '/' route
        this.app.use(express.static('public'));

        //CORS
        this.app.use(cors());

        //Reading and parse of the body
        this.app.use(express.json());

        //fileUpload
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/temp/',
            createParentPath: true
        }))

    }

    routes() {
        this.app.use(this.paths.items, require('../routes/items'));
        this.app.use(this.paths.uploads, require('../routes/uploads'));
        this.app.use(this.paths.users, require('../routes/users'));
        this.app.use(this.paths.categories, require('../routes/categories'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`App running on port: ${this.port}`)
        })
    }
}

module.exports = Server