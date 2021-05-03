/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   28 March 2021
; Modified by: Adam Luna
; Description: User model for api-gateway
;===========================================
*/

// Import Mongoose
var mongoose = require('mongoose');

// Create a user schema in Mongoose
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email: String
});

// Exports our user schema
var User = (module.exports = mongoose.model("User", userSchema));

// add user
module.exports.add = (user, callback) => {
    user.save(callback);
  };

// get user by id
 module.exports.getById = (id, callback) => {
    var query = { _id: id };
    User.findById(query, callback);
  };

// find user by email
module.exports.getOne = (e, callback) => {
  var query = { email: e };
  User.findOne(query, callback);
};