import { Router, Request, Response, NextFunction } from 'express'

import { AuthorController } from '../controller/author.controller'

const router: Router = Router()

/* GET users listing. */
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
  const result = await new AuthorController().listAll(req, res, next)
  res.send(result)
})

export default router
