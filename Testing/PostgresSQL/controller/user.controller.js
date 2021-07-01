const db = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require("../config");

class UserController {
    async createUser(req, res) {
        const {email, password, firstname, lastname} = req.body;
        const candidate = await db.findOne({where: {email: email}});
        if (candidate) return res.status(400).json({message: "Пользователь с таким именем уже существует"});
        const hashPassword = bcrypt.hashSync(password, 8);
        const user = db.create({
            email: email,
            password: hashPassword,
            firstname: firstname,
            lastname: lastname
        })
        res.json(user);
    }
    async deleteUser(req, res) {
        const {id} = req.body;
        db.destroy({where: {id: id}})
        res.json('ok');
    }
    async getUsers(req, res) {
        const users = await db.findAll();
        res.json(users);
    }
}

module.exports = new UserController()