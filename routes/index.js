var express = require("express");
var router = express.Router();
const userModel = require("./users");
/* GET home page. */
router.get("/",  function (req, res, next) {
  res.render("index")
});


router.get("/create", async function (req, res, next) {
 let user = await userModel.create({
    userName: " Sharma Pravinkumar",
    nickName: "Sharma16",
    categories: ["figma", "HTML", "CSS"],
  });
  res.send(user)
});


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

  // Q.3 How can i search for documents with a specific date range in Mongoose
  router.get("/findUserDate", async function (req, res, next) {
    let startDate = new Date("2024-08-09");
    let endDate = new Date("2024-08-10");
    let user = await userModel.find({
      createdDate: {
        $gte: startDate,
        $lte: endDate,
      },
    });
    res.send(user);
  });

// Q.4 How can i filter documents based on the exist of a field in mongoose
router.get("/findUserDescription", async function (req, res, next) {
  let user = await userModel.find({ description: { $exists: false } });
  res.send(user);
});

// Q.5 How can i filter documents based on a specific field's length in mongoose
router.get("/findUserLength", async function (req, res, next) {
  let user = await userModel.find({ 
    $expr :{
      $and :[
        {$gte : [{ $strLenCP : '$nickName'}, 0]},
        {$lte : [{ $strLenCP : '$nickName'}, 5]}
      ]
    }

  });
 
  res.send(user);
});

// Q.6 How can i sort documents in mongoose
  

module.exports = router;
