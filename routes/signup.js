const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const db = require('../config/database');
const User = require('../models/User');
const saltRounds = 10;

router.post('/signup', async (req, res) => {
  // check if request exists in table
  const result = await User.findAll({
    where: { email: req.body.email },
  }).catch((e) => {
    console.log(e);
  });
  // console.log("reSult", result);
  if (result.length !== 0) {
    let userResult;
    result.forEach((user) => {
      userResult = user.dataValues;
    });
    // console.log("userResult", userResult)
    console.log('user already exists');
    res.sendStatus(400);
    //res.json({ message: 'User already exists' });

    // add user if userResult exists
  } else {
    const password = req.body.password;
    const encryptedPassword = await bcrypt.hash(password, saltRounds);
    const user = await User.create({
      email: req.body.email,
      password: encryptedPassword,
    }).catch((e) => {
      console.log(e);
    });

    console.log(user);
    console.log('user added');
    res.sendStatus(200);
    //res.json({ message: 'User added' });
  }
  console.log('req', req.body);

  //res.send('signup');
});

module.exports = router;
