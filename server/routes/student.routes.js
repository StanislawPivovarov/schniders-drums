const Router = require('express')
const studentController = require('../controller/student.controller')
const router = new Router()

router.post('/student', studentController.createStudent)
router.get('/student', studentController.getStudent)
router.get('/student/:id', studentController.getOneStudent)
router.put('/student', studentController.updateStudent)
router.delete('/student', studentController.createStudent)


module.exports = router