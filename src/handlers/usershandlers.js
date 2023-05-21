const { createUserDb, getUserDb } = require('../controllers/UserController')

// --> query users/?name
const getUserHandler = async (req, res) => {
    const { name } = req.query;
   try {
    if(name) {
        const response = await getUserDb(name)
        return res.status(200).json(response)
    }
    const response = await getUserDb()
    return res.status(200).json(response)
   } catch (error) {
    res.status(400).json({error: error.message})
   }
}

// --> params
const getUserIdHandler = (req, res) => {
    const { id } = req.params
    res.status(200).send('Usuario con id ' + id)
}

// --> body
const postUsersHandler = async (req, res) => {
    const { name, email, phone } = req.body;
    try {
        const response = await createUserDb(name, email, phone)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})        
    }
}

module.exports = {
    getUserHandler,
    getUserIdHandler,
    postUsersHandler
}