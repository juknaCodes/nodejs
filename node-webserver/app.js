const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express()

hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getYear', ()=> {
  return new Date().getFullYear();
});
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
