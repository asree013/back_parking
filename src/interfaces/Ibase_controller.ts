import { DateSearch } from 'src/models/date';

export interface IBaseController<R> {
  handlerGetAll(): Promise<R[]>;
  handlerGerById(id: string): Promise<R>;
  handlerUpdateById(id: string, item: Partial<R>): Promise<R | null>;
  handlerDeleteById(id: string): Promise<R>;
  handlerCreate(item: R): Promise<R>;
  handlerSearch(data: Partial<R>): Promise<R[] | R | null>;
}
