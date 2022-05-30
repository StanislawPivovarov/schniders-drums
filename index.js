const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

const studentRouter = require('./server/routes/student.routes')
const adminRouter = require('./server/routes/admin.routes')
const articleRouter = require('./server/routes/article.routes')

app.use(express.json())
app.use('/api', studentRouter)
app.use('/api', adminRouter)
app.use('/api', articleRouter)

app.listen(PORT, () => console.log('сервер работает на порту ${PORT}'))