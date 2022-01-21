const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack');

const Page = db.define('page',{
 title:{
   type: Sequelize.STRING(100),
   allowNull: false
 },
 slug:{
  type: Sequelize.STRING(100),
  allowNull: false
 },
 content:{
  type: Sequelize.TEXT,
  allowNull: false
},
status:{
  type: Sequelize.ENUM ('open','closed'),
  allowNull: false
},
})

const User = db.define ('user',{
  name:{
    type: Sequelize.STRING(100),
  },
  email:{
   type: Sequelize.STRING(100)
  },
})

module.exports = {
  db, Page, User
}