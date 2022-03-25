const express = require("express");
const bcrypt = require("bcrypt");
const app = express();

const router = express.Router();
// const db = require('../config/database');
const User = require("../models/User");

router.post("/login", async (req, res) => {
  const password = req.body.password;
  console.log("req", req.body);
  // looking for user in database given email
  const body = req.body;
  const result = await User.findAll({
    where: { email: body.email },
  }).catch((e) => {
    console.log(e);
  });
  // check if email is in our database
  if (result.length !== 0) {
    // loop through results for user, set user results to variable
    let userResult;
    result.forEach((user) => {
      userResult = user.dataValues;
    });
    console.log('login.js 26: ', userResult);
    // retrieve hashed password and compare to encrypted password used to log in
    const comparison = await bcrypt.compare(password, userResult.password);
    if (comparison) {
      //res.sendStatus(200);
      res.send({ user_id: userResult.id });
      console.log("valid password");
    } else {
      res.sendStatus(400);
      console.log("wrong password");
    }
  } else {
    res.sendStatus(400);
    console.log("user not found");
  }
});

module.exports = router;
