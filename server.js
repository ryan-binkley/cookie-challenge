import express from "express";
import cookieSession from 'cookie-session';
import cookieParser from 'cookie-parser';
var app = express();

app.use(cookieParser())
app.get('/login', function(req, res) {
  res.cookie('name', 'someName');
  res.send("Your name has been logged.");
});

app.get('/hello', function(req, res) {
  res.send(`Hello ${req.cookies.name}.`);
});

app.listen(8080);