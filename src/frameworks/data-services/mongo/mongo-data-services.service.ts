import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IDataServices } from "../../../core";
import { MongoGenericRepository } from "./mongo-generic-repository";
import { Family, FamilyDocument } from "./model";

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  families: MongoGenericRepository<Family>;

  constructor(
    @InjectModel(Family.name)
    private FamilyRepository: Model<FamilyDocument>
  ) {}

  onApplicationBootstrap() {
    this.families = new MongoGenericRepository<Family>(this.FamilyRepository);
  }
}
