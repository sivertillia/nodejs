const db = require('../db/db')

class UserController {
    async createUser(req, res) {
        const {email, password, firstname, lastname} = req.body;
        const newPerson = await db.query("INSERT INTO users (email, password, firstname, lastname) VALUES ($1, $2, $3, $4) RETURNING *", [email, password, firstname, lastname])
        console.log(email, password, firstname, lastname);
        // res.json('ok');
        res.json(newPerson.rows[0]);
    }
    async deleteUser(req, res) {
        const {id} = req.body;
        const user = await db.query('DELETE FROM users WHERE id = $1', [id]);
        res.json(user.rows[0]);
    }
    async getUsers(req, res) {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows);
    }
    async getOneUsers(req, res) {
        const id = req.params.id;
        const user = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(user.rows[0]);
    }
}

module.exports = new UserController()