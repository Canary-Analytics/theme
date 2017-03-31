module.exports = (app) => {

    app.get('/', (req, res) => {
        res.render('index', {
            includes_html: ''
        });
    });

}
