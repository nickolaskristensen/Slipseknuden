module.exports = (app) => {
    // omslipseknuden page 
    app.get('/omslipseknuden', function (req, res) {
        let data_medarbejdere = require('../data/medarbejdere.js');
        res.render('pages/omslipseknuden', {
            medarbejdere: data_medarbejdere
        });
    });
}