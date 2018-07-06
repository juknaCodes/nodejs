const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');
const app = express()

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getYear', ()=> {
  return new Date().getFullYear();
});

app.use((req, res, next) => {
  let date = new Date().toString();
  let log = `${date}: request path is ${req.path}`;

  console.log(log);
  fs.appendFile('log.txt', log + '\n', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  next();
})

app.use((req, res, next) => {
  res.render("maintenance.hbs");
})
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.send("Hello World");
})

app.get("/help", (req, res)=> {
  res.render("about.hbs", {
    pageTitle : "About Page"
  })
})

app.use(express.static(path.join(__dirname, 'public')));
app.get('/bad', (req, res)=> {
  res.json({
    errorMessage:"Unable to handle request"
  });
})

app.listen("3000");
