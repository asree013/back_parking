import { Injectable } from '@nestjs/common';
import { IBaseRepo } from 'src/interfaces/Ibase_repo';
import { IBaseService } from 'src/interfaces/Ibase_service';
import { DateSearch } from 'src/models/date';

@Injectable()
export class BaseService<T> implements IBaseService<T> {
  constructor(private repo: IBaseRepo<T>) {}
  onSearch(data: Partial<T>) {
    return this.repo.search(data);
  }
  onFindAll(): Promise<T[]> {
    return this.repo.findAll();
  }
  onFindById(id: string): Promise<T> {
    return this.repo.findById(id);
  }
  onCreate(item: T): Promise<T> {
    return this.repo.create(item);
  }
  onDelete(id: string): Promise<T> {
    return this.repo.delete(id);
  }
  onUpdate(id: string, item: Partial<T>): Promise<T> {
    return this.repo.update(id, item);
  }
}
