import { Router } from 'express'
import asyncHandler from 'express-async-handler'

import * as genreController from '../controller/genre.controller'

const router: Router = Router()

router.get('/', genreController.genreList)
router.get('/:id', genreController.genreDetail)
router.get('/new', genreController.genreCreateGet)
router.post('/create', genreController.genreCreatePost)
router.get('/:id/edit', genreController.genreUpdateGet)
router.post('/:id/update', genreController.genreUpdatePost)
router.get('/:id/delete_get', genreController.genreDeleteGet)
router.post('/:id/delete', genreController.genreDeletePost)

export default router
