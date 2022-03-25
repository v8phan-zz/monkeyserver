const express = require("express");
const app = express();
const router = express.Router();
const Comment = require("../models/Comment");

router.post("/comment", async (req, res) => {
  console.log('req.body', req.body);
  console.log("comment:", req.body.comment, req.body.blog_id, req.body.user_id);
  const comment = await Comment.create({
    comment: req.body.comment,
    blog_id: req.body.blog_id,
    user_id: req.body.user_id,
  }).catch((e) => {
    console.log(e);
  });
  console.log(comment);
  res.json({ message: 'comment success' });
});

module.exports = router;
