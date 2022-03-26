import { Controller } from '@nestjs/common';
import { AbstractCRUDController } from 'src/shared/controllers';
import { GroupEntity } from '../entity';
import { GroupDTO } from '../DTO';
import { GroupService } from '../providers';

@Controller('group')
export class GroupController extends AbstractCRUDController<
  GroupDTO,
  GroupEntity,
  GroupService
> {
  constructor(private groupService: GroupService) {
    super(groupService, 'GroupEntity');
  }
}
