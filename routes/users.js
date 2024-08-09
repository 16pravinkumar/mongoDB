const mongoose = require('mongoose');


// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/PracticeQuestions');

let userSchema = mongoose.Schema({
  userName : String,
  nickName : String,
  description : String ,
  categories : {
    type : Array,
    default : []
  },
  createdDate : {
    type : Date,
    default : Date.now()
  }
})

module.exports = mongoose.model("user" , userSchema)