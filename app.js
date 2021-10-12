// Bring in our dependencies
const app = require('express')();
const routes = require('./routes');
const PORT = process.env.PORT || 3000;

//Connect all routes to the application
app.use('/', routes);

//Turn on that server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});