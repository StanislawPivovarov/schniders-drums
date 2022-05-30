const db = require('../db')

class StudentController {
    async createStudent(req, res){
        const {name, surname, pass, email} = req.body
        const newStudent = await db.query('INSERT INTO student (name, surname, pass, email) values ($1, $2, $3, $4 ) RETURNING * ', [name, surname, pass, email])
        res.json(newStudent.rows[0])
    }
    async getStudent(req, res){
        const students = await db.query ('SELECT * from student')
        res.json(students.rows)
    }
    async getOneStudent(req, res){
        const id = req.params.id
        const student = await db.query('SELECT * from student where id=$1', [id])
        res.json(student.rows[0])
    }
    async updateStudent(req, res){
        const {name, surname, pass, email, id} = req.body
        const student = await db.query(
            'UPDATE student set email = $1, pass = $2 where id=$3 RETURNING *', [pass, email, id])
        res.json(student.rows[0])    
    }
    async deleteStudent(req, res){
        const id = req.params.id
        const student = await db.query('DELETE FROM student where id=$1', [id])
        res.json(student.rows[0])
    }
}

module.exports = new StudentController()