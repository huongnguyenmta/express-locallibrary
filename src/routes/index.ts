import { Router, Request, Response, NextFunction } from 'express'
import authorRouter from './author.route'
import bookRouter from './book.route'
import bookInstanceRouter from './book_instance.route'
import { index } from '../controller/book.controller'

const router: Router = Router()

// how that route renders a response using the template "index" passing the template variable "title".
/* GET home page. */
router.get('/', index)
router.use('/authors', authorRouter)
router.use('/books', bookRouter)
router.use('/book_instances', bookInstanceRouter)

export default router
