import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NewsPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  author: string;
}
