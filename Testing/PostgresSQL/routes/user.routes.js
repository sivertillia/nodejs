const Router = require('express');
const router = new Router();
const AuthController = require('../controller/auth.controller');
const UserController = require('../controller/user.controller');
//Auth
router.post('/login', AuthController.login);

//User
router.get('/user', UserController.getUsers)
router.post('/user', UserController.createUser);
// router.get('/user/:id', UserController.getOneUsers);
router.delete('/user', UserController.deleteUser);

module.exports = router;