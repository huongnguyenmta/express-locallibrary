import * as express from 'express'

const router: express.Router = express.Router()

/* GET users listing. */
router.get('/', (req, res, next): void => {
  res.send('respond with a resource')
})

export default router
