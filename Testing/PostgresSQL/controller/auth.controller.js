const db = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {secret} = require("../config");

const generateAccessToken = (id, email, firstname, lastname) => {
    const payload = {
        id, email, firstname, lastname
    }
    return jwt.sign(payload, secret, {expiresIn: "24h"});
}

class AuthController {
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
        // console.log(email, password, firstname, lastname);
        res.json(user);
        // res.json(newPerson.rows[0]);
    }
    async deleteUser(req, res) {
        const {id} = req.body;
        db.destroy({where: {id: id}})
        res.json('ok');
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows);
    }
    async login(req, res) {
        const {email, password} = req.body;
        const user = await db.findOne({where: {email: email}});
        if (!user) return res.status(400).json({message: `Пользователь ${email} не найден`})
        const validPassowrd = bcrypt.compareSync(password, user.password);
        if (!validPassowrd) return res.status(400).json({message: `Введен неверный пароль`})
        const token = generateAccessToken(user.id, user.email, user.firstname, user.lastname);
        res.json({ token })
    }
}

module.exports = new AuthController()