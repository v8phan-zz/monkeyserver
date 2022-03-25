const express = require('express');
const bodyParser = require('body-parser');
//const path = require('path');
const port = process.env.PORT || 3001;
//const { nextTick } = require('process');
//const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(pino);

const db = require('./config/database');
const User = require("./models/User");
const Comment = require("./models/Comment");

// test database
// db.authenticate()
//   .then(() => console.log('Database connected...'))
//   .catch((err) => console.log('Error: ', err));

// console.log(db);

// db.sync();
// console.log('The table for the model was just (re)created!');

// This will create a middleware.
// When you navigate to the root page, it would use the built react-app
// app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use('/api', require('./routes/login'));
app.use('/api', require('./routes/signup'));
app.use('/api', require('./routes/postcomment'));
app.use('/api', require('./routes/displaycomment'));
