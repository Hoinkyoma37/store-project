const jwt = require('jsonwebtoken');

const genJWT = async (uid = '') => {

    return new Promise((resolve, reject) => {

        const payload = { uid };

        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: '4h'
        }, (err, token) => {

            if (err) {
                reject(`could not generate the token`);
            } else {
                resolve(token);
            }
        })

    })

}

module.exports = genJWT