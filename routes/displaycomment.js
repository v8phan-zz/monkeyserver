const express = require("express");
//const app = express();
const router = express.Router();
const Comment = require("../models/Comment");

router.get("/comment", async (req, res) => {
  console.log(req);
  // looking for comments in database given blog id
  const result = await Comment.findAll({
    where: { blog_id: req.query.blog_id },
  }).catch((e) => {
    console.log(e);
  });
  res.send({ RESULT: result });
  console.log(result);
});

module.exports = router;
