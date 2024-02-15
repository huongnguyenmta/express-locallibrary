import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

import { AppDataSource } from '../config/data-source'
import { Genre } from '../entity/genre.entity'

export const genreList = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send('NOT IMPLEMENTED: genre list')
})

// Display detail page for a specific genre.
export const genreDetail = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: genre detail: ${req.params.id}`)
})

export const genreCreateGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: genre create get: ${req.params.id}`)
})

export const genreCreatePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: genre create post: ${req.params.id}`)
})

export const genreUpdateGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: genre update get: ${req.params.id}`)
})

export const genreUpdatePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: genre update post: ${req.params.id}`)
})

export const genreDeleteGet = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: genre delete get: ${req.params.id}`)
})

export const genreDeletePost = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  res.send(`NOT IMPLEMENTED: genre delete post: ${req.params.id}`)
})
