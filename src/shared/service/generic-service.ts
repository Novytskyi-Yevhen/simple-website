import { Injectable } from '@nestjs/common';
import { DeepPartial, DeleteResult, FindOneOptions, FindOperator, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Injectable()
export abstract class GenericService<T> {
  constructor(private repository: Repository<T>) {}
  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }
  async findOneById(id: string): Promise<T> {
    return await this.repository.findOne(id as unknown as FindOneOptions<T>);
  }
  async create(data: DeepPartial<T>): Promise<T> {
    const newObject = this.repository.create(data);
    await this.repository.save(newObject as unknown as DeepPartial<T>);
    return newObject;
  }
  async delete(id: string): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }
  async update(id: string, data: QueryDeepPartialEntity<T>) {
    await this.repository.update(id, data);
    return await this.repository.findOne(id as unknown);
  }
}
