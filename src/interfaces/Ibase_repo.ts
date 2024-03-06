import { DateSearch } from 'src/models/date';

export interface IBaseRepo<R> {
  findAll(): Promise<R[]>;
  findById(id: string): Promise<R | null>;
  create(item: R): Promise<R>;
  update(id: string, item: Partial<R>): Promise<R>;
  delete(id: string): Promise<R>;
  search(data: Partial<R>): Promise<R[] | R | null>;
}
