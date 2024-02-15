import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

import { Book } from './book.entity'
import { BookInstanceStatus } from '../enum/book_instance.enum'

@Entity()
export class BookInstance {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  imprint: string

  @Column()
  dueBack: Date

  @Column({
    type: 'enum',
    enum: BookInstanceStatus,
    default: BookInstanceStatus.Maintenance
  })
  status: BookInstanceStatus

  @ManyToOne(() => Book, (book) => book.bookInstances)
  book: Book

  get url(): string {
    return `book_instances/${this.id}`
  }
}
