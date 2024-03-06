import { DateSearch } from 'src/models/date';

export interface IBaseService<R> {
  onFindAll(): Promise<R[]>;
  onFindById(id: string): Promise<R | null>;
  onCreate(item: R): Promise<R>;
  onDelete(id: string): Promise<R>;
  onUpdate(id: string, item: Partial<R>): Promise<R>;
  onSearch(data: Partial<R>): Promise<R[] | R | null>;
}
