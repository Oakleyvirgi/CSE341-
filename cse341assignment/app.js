const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');


const cors = require('cors') // Place this with other requires (like 'path' and 'express')
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

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views-week2');

const adminRoutes = require('./routes-week2/admin');
const shopRoutes = require('./routes-week2/shop');

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static(path.join(__dirname, 'public-week2')));

app.use((req, res, next) => {
  User.findById('5bab316ce0a7c75f783cb8a8')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);



mongoose
  .connect(
    'mongodb+srv://VirgiO:Caracas123!@cse341cluster-3dwlw.mongodb.net/shop?retryWrites=true'
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
    app.listen(3000);
    //app.listen(process.env.PORT || 5000);
  })
  .catch(err => {
    console.log(err);
  });