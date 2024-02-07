import { Request, Response, NextFunction } from 'express'
import asyncHandler from 'express-async-handler'

import { AppDataSource } from '../config/data-source'
import { Book } from '../entity/book.entity'
import { Author } from '../entity/author.entity'
import { Genre } from '../entity/genre.entity'
import { BookInstance } from '../entity/book_instance.entity'
import { BookInstanceStatus } from '../enum/book_instance.enum'

const bookRepository = AppDataSource.getRepository(Book)
const authorRepository = AppDataSource.getRepository(Author)
const genreRepository = AppDataSource.getRepository(Genre)
const bookInstanceRepository = AppDataSource.getRepository(BookInstance)

export const index = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const [numBooks, numBookInstances, availableBookInstances, numAuthors, numGenres] = await Promise.all([
    bookRepository.count(),
    bookInstanceRepository.count(),
    bookInstanceRepository.findAndCount({
      where: { status: BookInstanceStatus.Available }
    }),
    authorRepository.count(),
    genreRepository.count()
  ])

  res.render('index', {
    title: 'Local library home',
    book_count: numBooks,
    book_instance_count: numBookInstances,
    book_instance_available_count: availableBookInstances[1],
    author_count: numAuthors,
    genre_count: numGenres
  })
})

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
