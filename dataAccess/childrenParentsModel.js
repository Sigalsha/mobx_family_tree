const dbConnect = require('./da')
const User = require('./userModel');
const Sequelize = require('sequelize')

const ChildrenParents = dbConnect.define('ChildrenParents', {});

User.belongsToMany(User, { through: ChildrenParents, as: 'Parents', foreignKey: 'userId' })
User.belongsToMany(User, { through: ChildrenParents, as: 'Children', foreignKey: 'parentId' })

module.exports = ChildrenParents;