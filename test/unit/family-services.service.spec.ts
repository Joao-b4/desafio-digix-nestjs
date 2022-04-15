import {
  FamilyServices,
} from "../../src/core";
import { DataServicesMock, GenericRepositoryMock } from "./mocks/data-services.mock";
import { familyMock1, familyMock2  } from "./mocks/family.mock";

describe("FamilyService", () => {
  let familyServices: FamilyServices;

  beforeEach(async () => {
    const dataservices = new DataServicesMock()
    dataservices.families = new GenericRepositoryMock()
    familyServices = new FamilyServices(dataservices) 
  });

  it("FamilyServices - should be defined", () => {
    expect(familyServices).toBeDefined();
  });

  describe("getOneFamily", () => {
    it("should get family", async () => {
      const familyReturned = await familyServices.getFamilyById(familyMock1._id);
      expect(familyReturned).toEqual(familyMock1);
      expect(familyReturned.points).toEqual(7);
    });
  });
  describe("getAllFamilies", () => {
    it("should get families", async () => {
      const familiesReturned = await familyServices.getAllFamilies();
      expect(familiesReturned).toEqual([familyMock1, familyMock2]);
      expect(familiesReturned[0].points).toEqual(7);
      expect(familiesReturned[1].points).toEqual(3);
    });
  });
  describe("createFamily", () => {
    it("should create family", async () => {
      const familyReturned = await familyServices.createFamily(familyMock1);
      expect(familyReturned).toEqual(familyMock1);
    });
  });
  describe("updateFamily", () => {
    it("should updated family", async () => {
      const familyReturned = await familyServices.updateFamily(familyMock1._id, familyMock1);
      expect(familyReturned).toEqual(familyMock1);
    });
  });
});
