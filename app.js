// Bring in our dependencies
const app = require('express')();
const cors = require('cors')
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');

//Connect all routes to the application
app.use('/', routes);

const corsOptions = {
    origin: "https://git.heroku.com/cse341-oakley.git",
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));
  
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    family: 4
  };
  
  const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://VirgiO:Caracas123!@cse341cluster-3dwlw.mongodb.net/test?retryWrites=true&w=majority";

//Turn on that server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});

mongoose
  .connect(
    MONGODB_URL, options
  )
  .then(result => {
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: 'Virgi',
          email: 'mol20003@byui.edu',
          cart: {
            items: []
          }
        });
        user.save();
      }
    });
    //app.listen(3000);
    app.listen(process.env.PORT || 5000);
  })
  .catch(err => {
    console.log(err);
  });