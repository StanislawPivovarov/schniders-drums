const Router = require('express')
const articleController = require('../controller/article.controller')
const router = new Router()

router.post('/artile', articleController.createArticle)
router.get('/article', articleController.getArticle)
router.get('/article/:id', articleController.getOneArticle)
router.put('/article', articleController.updateArticle)
router.delete('/article', articleController.updateArticle)


module.exports = router