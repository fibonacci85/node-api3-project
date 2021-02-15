const express = require('express');
const router = express.Router();
const Users = require('./users-model');
const mw = require('../middleware/middleware');

router.get('/', mw.validateUser, (req, res) => {
  Users.get(req.body)
  .then(user => {
    res.status(200).json(user)
  })
});
//////^^^^ I'M NOT SURE.... App keeps crashing. 

router.get('/:id', (req, res) => {
  // RETURN THE USER OBJECT
  // this needs a middleware to vserify user id
});

router.post('/', (req, res) => {
  // RETURN THE NEWLY CREATED USER OBJECT
  // this needs a middleware to check that the request body is valid
});

router.put('/:id', (req, res) => {
  // RETURN THE FRESHLY UPDATED USER OBJECT
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

router.delete('/:id', (req, res) => {
  // RETURN THE FRESHLY DELETED USER OBJECT
  // this needs a middleware to verify user id
});

router.get('/:id/posts', (req, res) => {
  // RETURN THE ARRAY OF USER POSTS
  // this needs a middleware to verify user id
});

router.post('/:id/posts', (req, res) => {
  // RETURN THE NEWLY CREATED USER POST
  // this needs a middleware to verify user id
  // and another middleware to check that the request body is valid
});

// do not forget to export the router
