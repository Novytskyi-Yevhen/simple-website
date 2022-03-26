import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as controllers from './controllers';
import * as providers from './providers';
import { GroupEntity } from './entity';
import { GroupService } from './providers';

@Module({
  imports: [TypeOrmModule.forFeature([GroupEntity])],
  exports: [GroupService],
  providers: Object.values(providers),
  controllers: Object.values(controllers),
})
export class GroupModule {}
