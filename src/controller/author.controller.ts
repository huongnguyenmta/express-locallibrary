import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

import { AppDataSource } from '../config/data-source'
import { Author } from '../entity/author.entity'

///////// Using class
// export class AuthorController {
//   private readonly authorRepository = AppDataSource.getRepository(Author)

//   async listAll(req: Request, res: Response, next: NextFunction) {
//     // const data = await AppDataSource.manager.find(Author)
//     // console.log(data)

//     const authors = await this.authorRepository.find({
//       select: {
//         firstName: true,
//         familyName: true
//       }
//     })

//     res.send(authors)
//   }
// }
// const authorController = new AuthorController()
// export default authorController

///////// Using functions
// Display list of all Authors.
export const authorList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send('NOT IMPLEMENTED: Author list')
})

// Display detail page for a specific Author.
export const authorDetail = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: Author detail: ${req.params.id}`)
})

export const authorCreateGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: Author create get: ${req.params.id}`)
})

export const authorCreatePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: Author create post: ${req.params.id}`)
})

export const authorUpdateGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: Author update get: ${req.params.id}`)
})

export const authorUpdatePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: Author update post: ${req.params.id}`)
})

export const authorDeleteGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: Author delete get: ${req.params.id}`)
})

export const authorDeletePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: Author delete post: ${req.params.id}`)
})
