var express = require("express");
var router = express.Router();
const userModel = require("./users");
/* GET home page. */
router.get("/",  function (req, res, next) {
  res.render("index")
});


// router.get("/create", async function (req, res, next) {
//  let user = await userModel.create({
//     userName: " Sharma Pravinkumar",
//     nickName: "Sharma16",
//     description: "Im a ui/ix developer ",
//     categories: ["figma", "HTML", "CSS"],
//   });
//   res.send(user)
// });


// Q.1 How can i perform a case-sensitive search in mongoDB
router.get("/findUser", async function (req, res, next) {
let regex = new RegExp("^Pravin$","i")
 let user = await userModel.find({userName : regex});
  res.send(user)
});


// Q.1.1 How can i perform a case-sensitive search in mongoDB
// To find a username that starts with "P" and ends with "r" using MongoDB and Mongoose, you can use a regular expression in your query. The regular expression should be structured to match strings that start with "P" and end with "r", with any characters in between.
router.get("/findUserStartEnd", async function (req, res, next) {
let regex = new RegExp("^P.*n$", 'i')
 let user = await userModel.find({userName : regex});
  res.send(user)
});



// Q.2 How  do i find documens where an array field contains all of a set of values
router.get("/findUserCategories", async function (req, res, next) {
    
   let user = await userModel.find({categories : {$all : "web development"}});
    res.send(user)
  });
  

module.exports = router;
