const dbConnect = require('./da')
const Sequelize = require('sequelize')
// const ChildrenParents = require('./childrenParentsModel')


const User = dbConnect.define('user', {
    userName: {
        type: Sequelize.STRING,
        notNull: true
    },
    imgUrl: {
        type: Sequelize.STRING
    }
});



// User.sync().error((err)=>{
//     console.error(err);
// });



// const addRelationship1 = async function () {
//     let user = await User.create({userName: "Gal"})
//     let userMom = await User.create({userName: "Dina"})
//     let userDad = await User.create({userName: 'Ofer'})
// }

// addRelationship1()

// const addRelationship2 = async function () {
//     let user = await User.find({where: {u_name: "Gal"}})
//     let userMom = await User.create({name: "Dina"})
//     user.addUser(userMom)

// addRelationship2()




module.exports = User;



// User.belongsToMany(User, {as: 'user.Id', through: Parent, otherKey: 'userId'})
// User.belongsToMany(User, { as: 'parentId', through: Parent, otherKey: 'parentId'})