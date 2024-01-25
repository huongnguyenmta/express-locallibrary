import * as express from 'express'
import userRouter from './users.routes'

const router: express.Router = express.Router()

// routes/index.js
// how that route renders a response using the template "index" passing the template variable "title".
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.use('/users', userRouter)

export default router
