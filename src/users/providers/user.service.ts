import { InjectRepository } from '@nestjs/typeorm';
import { GenericService } from 'src/shared/service';
import { UserEntity } from '../entity';
import { Repository } from 'typeorm';

export class UserService extends GenericService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
  ) {
    super(userRepository);
  }
}
