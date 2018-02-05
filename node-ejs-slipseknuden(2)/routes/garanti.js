module.exports = (app) => {
    // garanti page 
    app.get('/garanti', function (req, res) {
        res.render('pages/garanti');
    });
}