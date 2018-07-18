const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
//   var todoSchema = mongoose.Schema({
//     text: {
//       type: String,
//       required: true,
//       minLength: 1
//     },
//     completed: {
//       type: Boolean,
//       default: false
//     },
//
//     completedAt: {
//       type: Number,
//       default: null
//     }
//   });
//   var Todo = mongoose.model('Todo', todoSchema);
//   var query = { text: 'Complete course' };
// // is sent as
//   let returnedquery = Todo.findOneAndUpdate(query, {
//       $set: {
//         completedAt: null
//        }
//      }, {
//        new: true
//      }, (doc)=> {
//        console.log(doc);
//    });


  // var newTodo = new Todo({
  //   text: "Complete course",
  //   completed: false
  // })

  // var newTodo = new Todo({
  //   text:'Learn nodejs'
  // })
  //
  // newTodo.save().then((doc)=> {
  //   console.log(doc)
  // }, (err)=> {
  //   console.log(err);
  // });

});

var userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }
});
var User = mongoose.model('User', userSchema);

var newUser = new User({
  email: "   ankuj2004@gmail.com    "
});

newUser.save().then((doc)=>{
  console.log(doc);
}, (err)=>{
  console.log(err);
});
