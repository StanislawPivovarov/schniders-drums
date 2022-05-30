const db = require('../db')

class AdminController {
    async createAdmin(req, res){
        const {name, surname, pass, email} = req.body
        const newAdmin = await db.query('INSERT INTO admin (name, surname, pass, email) values ($1, $2, $3, $4 ) RETURNING * ', [name, surname, pass, email])
        res.json(newAdmin.rows[0])
    }
    async getAdmin(req, res){
        const admins = await db.query ('SELECT * from admin')
        res.json(admins.rows)
    }
    async getOneAdmin(req, res){
        const id = req.params.id
        const admin = await db.query('SELECT * from admin where id=$1', [id])
        res.json(admin.rows[0])
    }
    async updateAdmin(req, res){
        const {name, surname, pass, email, id} = req.body
        const admin = await db.query(
            'UPDATE admin set email = $1, pass = $2 where id=$3 RETURNING *', [pass, email, id])
        res.json(admin.rows[0])    
    }
    async deleteAdmin(req, res){
        const id = req.params.id
        const admin = await db.query('DELETE FROM admin where id=$1', [id])
        res.json(admin.rows[0])
    }
}

module.exports = new AdminController()