import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/service';
import { GroupEntity } from '../entity';
import { Repository } from 'typeorm';

export class GroupService extends GenericService<GroupEntity> {
  constructor(
    @InjectRepository(GroupEntity) private groupRepository: Repository<GroupEntity>,
  ) {
    super(groupRepository);
  }
}
