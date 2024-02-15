import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  get url(): string {
    return `genres/${this.id}`
  }
}
