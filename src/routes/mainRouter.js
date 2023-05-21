const { Router } = require('express');

const mainRouter = Router();
const usersRouter = require('./usersRouter')
const postsRouter = require('./postsRouter')


mainRouter.use('/users', usersRouter)
mainRouter.use('/posts', postsRouter)




module.exports = mainRouter;