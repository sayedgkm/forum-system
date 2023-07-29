const express = require('express');
const userRoute = express.Router();
const {createRegistration, login, getCurrentUser} = require('../controllers/userController')

userRoute.route('/register').post(createRegistration);
userRoute.route('/login').post(login);
userRoute.route('/currentUser').get(getCurrentUser);

module.exports = userRoute;