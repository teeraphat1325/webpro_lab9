import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  fullName: string;

  // roles: ('admin' | 'user')[];
  
  @Column()
  gender: 'male' | 'female' | 'others';
}
