const { Router } = require('express')
const usersRouter = Router()
const {getUserHandler, getUserIdHandler, postUsersHandler} = require('../handlers/usershandlers')


usersRouter.get('/',getUserHandler)

usersRouter.get('/:id',getUserIdHandler)

usersRouter.post('/',postUsersHandler)

module.exports = usersRouter