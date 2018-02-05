module.exports = (app) => {
    // kontakt page 
    app.get('/kontakt', function (req, res) {
        res.render('pages/kontakt');
    });
}