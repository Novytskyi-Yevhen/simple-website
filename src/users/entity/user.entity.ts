import { GroupEntity } from 'src/groups/entity';
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({type: 'text'})
  userName: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => GroupEntity, (group) => group.users)
  group: GroupEntity;
}
