module.exports = (app) => {
    require("./omslipseknuden.js")(app);
    require("./index.js")(app);
    require("./kontakt.js")(app);
    require("./garanti.js")(app);
    require("./nyheder.js")(app);
    require("./produkter.js")(app);
}