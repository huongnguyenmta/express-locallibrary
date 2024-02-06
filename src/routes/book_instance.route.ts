import { Router } from 'express'

import * as bookInstanceController from '../controller/book_instance.controller'

const router: Router = Router()

/* GET users listing. */
router.get('/', bookInstanceController.bookInstanceList)
router.get('/:id', bookInstanceController.bookInstanceDetail)
router.get('/new', bookInstanceController.bookInstanceCreateGet)
router.post('/create', bookInstanceController.bookInstanceCreatePost)
router.get('/:id/edit', bookInstanceController.bookInstanceUpdateGet)
router.post('/:id/update', bookInstanceController.bookInstanceUpdatePost)
router.get('/:id/delete_get', bookInstanceController.bookInstanceDeleteGet)
router.post('/:id/delete', bookInstanceController.bookInstanceDeletePost)

export default router
