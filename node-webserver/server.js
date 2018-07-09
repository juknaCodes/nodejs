const express = require('express');
const path = require('path');
const hbs = require('hbs');
const fs = require('fs');
const app = express()
let PORT = process.env.PORT || 8080;


hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getYear', ()=> {
  return new Date().getFullYear();
});

app.use((req, res, next) => {
  let date = new Date().toString();
  let log = `${date}: request path is ${req.path}`;

  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) throw err;
    console.log('The "data to append" was appended to file!');
  });
  next();
})

// app.use((req, res, next) => {
//   res.render("maintenance.hbs");
// })
app.set('view engine', 'hbs');

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website'
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page'
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});

// /bad - send back json with errorMessage
app.get('/projects', (req, res) => {
  res.render('projects.hbs', {
    pageTitle: 'Projects Page'
  });
});

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, ()=> {
  console.log(`Server starting at ${PORT}`);
});
