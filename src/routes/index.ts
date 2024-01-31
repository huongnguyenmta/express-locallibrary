import { Router, Request, Response, NextFunction } from 'express'
import authorRouter from './author.route'

const router: Router = Router()

// routes/index.js
// how that route renders a response using the template "index" passing the template variable "title".
/* GET home page. */
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.render('index', { title: 'Express' })
})

router.use('/authors', authorRouter)

export default router
