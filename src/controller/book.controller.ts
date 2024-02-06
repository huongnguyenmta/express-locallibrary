import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

import { AppDataSource } from '../config/data-source'
import { Book } from '../entity/book.entity'

export const bookList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send('NOT IMPLEMENTED: book list')
})

// Display detail page for a specific book.
export const bookDetail = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: book detail: ${req.params.id}`)
})

export const bookCreateGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: book create get: ${req.params.id}`)
})

export const bookCreatePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: book create post: ${req.params.id}`)
})

export const bookUpdateGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: book update get: ${req.params.id}`)
})

export const bookUpdatePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: book update post: ${req.params.id}`)
})

export const bookDeleteGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: book delete get: ${req.params.id}`)
})

export const bookDeletePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: book delete post: ${req.params.id}`)
})
