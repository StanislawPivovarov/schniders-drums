const Router = require('express')
const adminController = require('../controller/admin.controller')
const router = new Router()

router.post('/admin', adminController.createAdmin)
router.get('/admin', adminController.getAdmin)
router.get('/admin/:id', adminController.getOneAdmin)
router.put('/admin', adminController.updateAdmin)
router.delete('/admin', adminController.deleteAdmin)


module.exports = router