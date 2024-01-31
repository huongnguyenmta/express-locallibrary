import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

import { Book } from './book.entity'

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  familyName: string

  @Column()
  dateOfBirth: Date

  @Column()
  dateOfDeath: Date

  @OneToMany(() => Book, (book) => book.author)
  books: Book[]
}
