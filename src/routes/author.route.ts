import { Router } from 'express'
import asyncHandler from 'express-async-handler'

// import { AuthorController } from '../controller/author.controller'
import * as authorController from '../controller/author.controller'

const router: Router = Router()

/* GET users listing. */
router.get('/', authorController.authorList)
router.get('/:id', authorController.authorDetail)
router.get('/new', authorController.authorCreateGet)
router.post('/create', authorController.authorCreatePost)
router.get('/:id/edit', authorController.authorUpdateGet)
router.post('/:id/update', authorController.authorUpdatePost)
router.get('/:id/delete_get', authorController.authorDeleteGet)
router.post('/:id/delete', authorController.authorDeletePost)

// other when using class controller
// router.get('/', asyncHandler(new AuthorController().listAll))

export default router
