const { Sequelize } = require('sequelize')
require('dotenv').config();
const UsersModel = require('./models/User')
const PostsModel = require('./models/Post')

const { DB_DIALECT, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env

const sequelize = new Sequelize(`${DB_DIALECT}://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`)

UsersModel(sequelize)
PostsModel(sequelize)

const { User, Post } = sequelize.models;

// un Usuario tiene varios posts
User.hasMany(Post)
// Un post va a pertenecer a un usuario
Post.belongsTo(User)

module.exports = {
    ...sequelize.models,
    conn: sequelize
}