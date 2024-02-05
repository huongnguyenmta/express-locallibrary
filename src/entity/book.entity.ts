import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from 'typeorm'

import { Author } from './author.entity'
import { BookInstance } from './book_instance.entity'
import { Genre } from './genre.entity'

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  summary: string

  @Column()
  isbn: Date

  @ManyToOne(() => Author, (author) => author.books)
  author: Author

  @OneToMany(() => BookInstance, (bookInstance) => bookInstance.book)
  bookInstances: BookInstance[]

  @ManyToMany(() => Genre)
  @JoinTable()
  genres: Genre[]
}
