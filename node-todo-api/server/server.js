const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoApp');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var todoSchema = mongoose.Schema({
    text: String,
    completed: Boolean,
    completedAt: Number
  });
  var Todo = mongoose.model('Todo', todoSchema);

  var newTodo = new Todo({
    text: "Complete course",
    completed: false
  })

  newTodo.save().then((doc)=> {
    console.log(doc)
  }, (err)=> {
    console.log(err);
  });

});
