const db = require('../db')

class ArticleController {
    async createArticle(req, res){
        const {name, filling} = req.body
        const newArticle = await db.query('INSERT INTO article (name, filling) values ($1, $2) RETURNING * ', [name, filling])
        res.json(newArticle.rows[0])
    }
    async getArticle(req, res){
        const article = await db.query ('SELECT * from article')
        res.json(article.rows)
    }
    async getOneArticle(req, res){
        const id = req.params.id
        const article = await db.query('SELECT * from article where id=$1', [id])
        res.json(article.rows[0])
    }
    async updateArticle(req, res){
        const {name, filling} = req.body
        const article = await db.query(
            'UPDATE article set name = $1, filling = $2 where id=$3 RETURNING *', [name, filling])
        res.json(article.rows[0])    
    }
    async deleteArticle(req, res){
        const id = req.params.id
        const article = await db.query('DELETE FROM article where id=$1', [id])
        res.json(article.rows[0])
    }
}

module.exports = new ArticleController()