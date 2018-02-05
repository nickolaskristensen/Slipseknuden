module.exports = (app) => {
    // index page 
    // Når brugeren forsøger at komme til hovedsiden(homepage) kører den denne function.
    app.get('/', function (req, res) {
        let data_produkter = require('../data/produkter.js');
        res.render('pages/index', {
            title: 'SlipseKnuden',
            vare: data_produkter
        });
    });
}