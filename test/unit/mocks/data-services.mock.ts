import { IDataServices, IGenericRepository } from "../../../src/core";
import { FamilyMock, familyMock1, familyMock2 } from "./family.mock";

export class GenericRepositoryMock<FamilyMock> extends IGenericRepository<any> {
  getAll() {
    return Promise.resolve([familyMock1, familyMock2]);
  }

  get(id: string) {
    familyMock1._id = id;
    return Promise.resolve(familyMock1);
  }

  create(item: FamilyMock) {
    return Promise.resolve(item);
  }

  update(id: string, item: FamilyMock) {
    return { ...item, _id: id };
  }
}

export class DataServicesMock extends IDataServices {
  families: GenericRepositoryMock<FamilyMock>;
}
