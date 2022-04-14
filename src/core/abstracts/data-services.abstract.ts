import { Family } from '../entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract families: IGenericRepository<Family>;
}
