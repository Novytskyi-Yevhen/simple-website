import { Controller } from '@nestjs/common';
import { AbstractCRUDController } from 'src/shared/controllers';
import { UserEntity } from '../entity';
import { UserDTO } from '../DTO';
import { UserService } from '../providers';

@Controller('user')
export class UserController extends AbstractCRUDController<
  UserDTO,
  UserEntity,
  UserService
> {
  constructor(private userService: UserService) {
    super(userService, 'UserEntity');
  }
}
