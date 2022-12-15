import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Users {

  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id'
  })
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  nama: string;

  @Column({
    nullable: false,
    default: '',
  })
  username: string;

  @Column({
    nullable: false,
    default: '',
  })
  email: string;

  @Column({
    nullable: false,
    default: '',
  })
  image: string;

  @Column({
    nullable: false,
    default: ''
  })
  password: string;

}