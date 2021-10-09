const routes = require('express').Router();

routes
    .use('/01', require('./code'))
    .get('/', (req, res, next) => {
        res.render('pages/proveAssignments', {
            pageTitle: 'Prove Assignments',
            path: 'proveAssignments'});
    });

module.exports = routes;