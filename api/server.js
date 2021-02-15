const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const postsRouter = require('./posts/posts-router'); //connect router
const usersRouter = require('./users/users-router');
const mw = require('./middleware/middleware') //connect middleware

const server = express();

// remember express by default cannot parse JSON in request bodies


// global middlewares and routes need to be connected here
server.use(helmet());
server.use(express.json())
server.use(morgan("dev")) 
server.use(mw.logger)

server.use('/api/posts', postsRouter)
server.use('/api/users', usersRouter)


server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

module.exports = server;
