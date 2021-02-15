const Posts = require("../posts/posts-model");
// const Users = require("../users/users-model");


function logger(req, res, next) {
  console.log(`A ${req.method} to ${req.hostname} was posted on ${Date().toLocaleString()}`)
  next()
}

const validateUserId = async (req, res, next) => {
  const {id} = req.params
  try{
    const post = await Posts.getById(id)
    if (!post) {
      res.status(400).json({message:`no hub with id:${id}`})
    }else{
      req.post = post
      next()
    }
  }catch(e){
    res.status(500).json(`server error: ${e}`)
  }
}

// function validateUser(req, res, next) {
//   // do your magic!
// }

// function validatePost(req, res, next) {
//   // do your magic!
// }

// do not forget to expose these functions to other modules

module.exports = {
  logger,
  validateUserId,
  // validateUser,
  // validatePost
}
