module.exports = (app) => {
    // produkter page 

    app.get('/produkter', function (req, res) {
        let data_produkter = require('../data/produkter.js');
        console.log(data_produkter)
        res.render('pages/produkter', {
            vare: data_produkter
        });

    });
};