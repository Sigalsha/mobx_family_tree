const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize')
const User = require('../dataAccess/userModel');
const ChildrenParents = require('../dataAccess/childrenParentsModel')


// User.sync()
// .error((err)=>{
//     console.error(err);
// });

// ChildrenParents.sync().error((err)=>{
//     console.error(err);
// });

// const addRelationship1 = async function () {
//     let user = await User.find({where: {userName: "Dan", id: 4}})
//     console.log(user.userName, user.id)
// }

// addRelationship1()

// const addRelationship1 = async function () {
//     let user = await User.create({userName: "Dan"})
//     let user2 = await User.create({userName: 'Efrat'})
//     // let relation = await ChildrenParents.create({userId: user.id, parentId: userDad.id })
// }

// addRelationship1()




//get the userName from the DB:

// router.get('/:userName', function (req, res) {
//     let userName = req.params.userName
//     User.find({
//         where: { userName: userName }
//     }).then(user => {
//         console.log(user)
//         res.send(user.username, user.id)
//     }).catch(err => {
//         console.log(err)
//     })
// })

//get the children of the chosen user:
// router.get('/users/down/:userName', function (req, res) {
//     let userName = req.params.userName
//     ChildrenParents.findAll({
//         where: { 
//             userName: userName
//         }
//     })
// }) 

// ChildrenParents.findAll({ where: { userId: 2 }, include: [User], as: 'Children'  }).then(s => {
//     console.log(s)
// })

// const findChildren = async function(){
//     let children = await ChildrenParents.findAll({
//         where: {
//             parentId: 2
//         }
//     }).then(users => users.map(d => (d.get('userId'))))

//     let childrenNames = await User.findAll({
//         where: 

//     })
// }


// const findChildren = async function(){
//     let children = await ChildrenParents.findAll({
//         // include: [{
//         //     model: User,
//         //     as: ''
//         // }]
//         where: {
//             parentId: 2
//         },
//         include: [{
//             model: 
//         }]
//     }).then(users => users.map(d => d.get('userId')))
//     console.log(children)

// }

// findChildren()


User.findAll({
    include: [{
        model: User,
        as: 'Children'
    }],
    where: {
        id: 2
    }
}).then(users => console.log(users))

// ChildrenParents.findAll({
//     where: {
//         parentId: 2
//     }
// }).then(parent=> {
//     console.log(parent.get('userId'))
// })



module.exports = router;