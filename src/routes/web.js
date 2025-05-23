const express = require('express');
const router = express.Router();
const { getHome, getAdvise, getLogin, getProfile } = require('../controller/indexController.js');
const accountController = require('../controller/AccountController.js');
router.get('/', getHome);
router.get('/advise', getAdvise);
router.get('/login', getLogin);
router.get('/profile', getProfile);
router.post('/register', accountController.createAccount);
router.post('/login', accountController.loginAccount);
router.post('/logout', accountController.xoaSessionUser);
module.exports = router;