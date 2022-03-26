import {
  Body,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { DeepPartial } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { GenericService } from '../service';

export abstract class AbstractCRUDController<
  DTO,
  Entity,
  Service extends GenericService<Entity>,
> {
  constructor(private service: Service, private readonly entityName) {}
  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get('/findOneById')
  async findOneById(@Query('id') id: string) {
    return await this.service.findOneById(id);
  }

  @Patch('/update/:id')
  async update(
    @Param('id') id: string,
    @Body() data: QueryDeepPartialEntity<Entity>,
  ) {
    return await this.service.update(id, data);
  }

  @Post('/create')
  async create(@Body() data: DTO) {
    return await this.service.create(data as unknown as DeepPartial<Entity>);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string) {
    let { affected } = await this.service.delete(id);
    return affected === 0
      ? {
          statusCode: HttpStatus.BAD_REQUEST,
          message: `${this.entityName} for delete is not found`,
        }
      : {
          statusCode: HttpStatus.OK,
          message: `${this.entityName} deleted successfully`,
        };
  }
}
