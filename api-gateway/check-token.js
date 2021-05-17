/*
============================================
; Title:  check-token.js
; Author: Adam Luna
; Date: 8 May 2021
; Description: Valides JSON web token
;===========================================
*/

var jwt = require("jsonwebtoken");
var config = require("./config");

// check header for valid token
function checkToken(req, res, next) {
  // get the request headers ‘x-access-token’ field
  var token = req.headers["x-access-token"];

  // check if token is null
  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  // ff the token is valid, verify the token
  jwt.verify(token, config.web.secret, function (err, decoded) {
    if (err)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    req.userId = decoded.id;
    next();
  });
}

// export the function
module.exports = checkToken;
