const express = require('express');
const path = require('path');
const hbs = require('hbs');
const app = express()

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.send("Hello World");
})

app.get("/help", (req, res)=> {
  res.render("about.hbs", {
    pageTitle : "About Page",
    year: new Date().getFullYear()
  })
})

app.use(express.static(path.join(__dirname, 'public')));
app.get('/bad', (req, res)=> {
  res.json({
    errorMessage:"Unable to handle request"
  });
})

app.listen("3000");
