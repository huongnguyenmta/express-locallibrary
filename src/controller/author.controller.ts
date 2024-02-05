import { Request, Response, NextFunction } from 'express'
import { AppDataSource } from '../config/data-source'
import { Author } from '../entity/author.entity'

export class AuthorController {
  private readonly authorRepository = AppDataSource.getRepository(Author)

  async listAll(req: Request, res: Response, next: NextFunction) {
    // const data = await AppDataSource.manager.find(Author)
    // console.log(data)

    const authors = await this.authorRepository.find({
      select: {
        firstName: true,
        familyName: true
      }
    })

    return authors
  }
}
