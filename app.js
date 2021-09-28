const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');

const app = express();

/*app.engine('hbs', expressHbs({
    layoutsDir: 'views-week2/layouts/',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));*/
app.set('views engine', 'ejs');
app.set('views-week2', 'views-week2');

const adminData = require('./routes-week2/admin');
const shopRoutes = require('./routes-week2/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public-week2')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
});

app.listen(3000);