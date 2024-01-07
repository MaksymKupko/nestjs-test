import { Exclude } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import { StarterEntity } from '../../../shared/starter.entity';

@Entity('users')
export class User extends StarterEntity {
  @Column()
  email: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  @Exclude()
  password: string;
}
