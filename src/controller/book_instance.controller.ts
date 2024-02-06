import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

import { AppDataSource } from '../config/data-source'
import { BookInstance } from '../entity/book_instance.entity'

export const bookInstanceList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send('NOT IMPLEMENTED: bookInstance list')
})

// Display detail page for a specific bookInstance.
export const bookInstanceDetail = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: bookInstance detail: ${req.params.id}`)
})

export const bookInstanceCreateGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: bookInstance create get: ${req.params.id}`)
})

export const bookInstanceCreatePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: bookInstance create post: ${req.params.id}`)
})

export const bookInstanceUpdateGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: bookInstance update get: ${req.params.id}`)
})

export const bookInstanceUpdatePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: bookInstance update post: ${req.params.id}`)
})

export const bookInstanceDeleteGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: bookInstance delete get: ${req.params.id}`)
})

export const bookInstanceDeletePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: bookInstance delete post: ${req.params.id}`)
})
