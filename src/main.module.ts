import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupEntity } from './groups/entity';
import { GroupModule } from './groups/group.module';
import { UserEntity } from './users/entity';
import { UserModule } from './users/user.module';

require('dotenv').config();
@Module({
  imports: [
    UserModule,
    GroupModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.POSTGRES_PORT) || 5432,
      username: process.env.POSTGRES_USER || 'user',
      password: process.env.POSTGRES_PASSWORD || 'pg_pass',
      database: process.env.POSTGRES_DB_NAME || 'postgres',
      entities: [
        UserEntity,
        GroupEntity
      ],
      synchronize: true,
    }),
  ],
})
export class MainModule {
  // configure(consumer: MiddlewareConsumer): void {
  //   consumer.apply(HTTPLogger).forRoutes('*');
  // }
}
