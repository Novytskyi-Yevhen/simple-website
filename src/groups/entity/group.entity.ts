import { UserEntity } from 'src/users/entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GroupEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @OneToMany(() => UserEntity, (user) => user.group)
  users: UserEntity[];
}
