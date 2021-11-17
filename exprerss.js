// console.log("asdd")

const express = require('express');

const users = require('./user.json');
// console.log(users)

const suraj = express();

suraj.get('/', (req, res) => {
    res.send("Welcome to Home page")
});


suraj.get('/users', (req, res) => {
    res.send(users)
});




suraj.listen(1234, function () {
    console.log("hello port 1234")
});
