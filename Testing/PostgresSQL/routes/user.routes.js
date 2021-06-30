const Router = require('express');
const router = new Router();
const UserController = require('../controller/user.controller');

router.post('/user', UserController.createUser);
router.get('/user/:id', UserController.getOneUsers);
router.get('/users', UserController.getUsers);
router.delete('/user', UserController.deleteUser);

module.exports = router;