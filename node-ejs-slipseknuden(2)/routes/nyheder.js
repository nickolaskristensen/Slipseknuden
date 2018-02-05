module.exports = (app) => {
    // nyheder page 
    app.get('/nyheder', function (req, res) {
        res.render('pages/nyheder');
    });
}