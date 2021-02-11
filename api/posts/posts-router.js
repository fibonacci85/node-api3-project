const express = require('express');

const Posts  = require('./posts-model')
const mw = require('../middleware/middleware')

const router = express.Router();

router.get('/', mw.logger, (req, res) => {
  Posts.find(req.body)
  .then(post => {
    res.status(200).json(post)
  })
  .catch(error => {
    console.log(error)
    res.status(500).json({
      message:"Error retrieving the posts"
    })
  })
});

router.get('/:id', mw.validateUserId,(req, res) => {
  // RETURN THE POST OBJECT
  // this needs a middleware to verify post id
  res.status(200).json(req.post)
});

// do not forget to export the router

module.exports = router 