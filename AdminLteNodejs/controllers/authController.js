const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "denemelogin"
});

// connect to the database
connection.connect(function(error){
    if (error) throw error
    else console.log("connected to the database successfully!")
});




const loginView = async (req, res, next) => {
    try {
        res.render('login', {layout: 'loginlayout'});
    } catch (error) {
        console.log(error);
    }
}
const registerView = async (req, res, next) => {
    try {
       res.render('register', {layout: 'loginlayout'});
    } catch (error) {
        console.log(error);
    }
}

const handleLogin = (req, res, next) => {
    
    res.redirect('/');
}

const logOut = (req, res, next) => {
    
    res.redirect('/');
}

module.exports = {
    loginView,
    registerView,
    handleLogin,
    logOut
}