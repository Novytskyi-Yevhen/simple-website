import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity';
import * as controllers from './controllers';
import * as providers from './providers';
import { UserService } from './providers';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [UserService],
  providers: Object.values(providers),
  controllers: Object.values(controllers),
})
export class UserModule {}
