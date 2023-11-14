const express = require('express');
const fileUpload = require('express_fileUpload');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body_parser');

const app = express();


const port = process.env.PORT || 3000;


app.use(express.static(path.join(_dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Allow', 'GET, Post, OPTIONS, PUT, DELETE');
    next();
})


//const url =' aqui q pinga va ',  la url del cluster de mongo subnormal


mongoose.Promise = global.Promise;


mongoose.connect(url, { useNewUrlParser: true }).then(() => {
    console.log('Conexion a la bdd realizada con exito');
    app.listen(port, () => {
        console.log('Servidor ejecutandose en el puerto' + port);
    })
});