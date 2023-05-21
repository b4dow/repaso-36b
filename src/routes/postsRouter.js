const { Router } = require('express')
const postsRouter = Router();
const { getPostsHandler } = require('../handlers/postshandlers')

postsRouter.get('/', getPostsHandler)

module.exports = postsRouter