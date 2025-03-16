// Call the express library
const express = require ('express');
const app = express ();

// Using the template engine EJS
app.set ('view engine', 'ejs');

app.get ('/',(req, res)=> {
  console.log ("Here");
  res.render ('index', {text2425421: "World"})
});

app.get ('/users', (req, res) => {
  res.send('User List');
});

app.get ('/users/new', (req, res) => {
  res.send ('User New Form');
});

app.listen(3000);