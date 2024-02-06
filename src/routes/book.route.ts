import { Router } from 'express'
import asyncHandler from 'express-async-handler'

import * as bookController from '../controller/book.controller'

const router: Router = Router()

/* GET users listing. */
router.get('/', bookController.bookList)
router.get('/:id', bookController.bookDetail)
router.get('/new', bookController.bookCreateGet)
router.post('/create', bookController.bookCreatePost)
router.get('/:id/edit', bookController.bookUpdateGet)
router.post('/:id/update', bookController.bookUpdatePost)
router.get('/:id/delete_get', bookController.bookDeleteGet)
router.post('/:id/delete', bookController.bookDeletePost)

export default router
