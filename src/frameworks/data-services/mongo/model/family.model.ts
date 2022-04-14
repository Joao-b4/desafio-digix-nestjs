import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class FamilyMember {
  @Prop()
  name: string;
  
  @Prop()
  age: number;
  
  @Prop()
  dependent: boolean;
}

export const FamilyMemberSchema = SchemaFactory.createForClass(FamilyMember);


export type FamilyDocument = Family & Document;

@Schema()
export class Family {
  @Prop({ required: true })
  name: string;
 
  @Prop({ type: [FamilyMemberSchema] })
  members: Array<FamilyMember>;

  @Prop()
  financeTotal: number;

  @Prop()
  points: number;
}

export const FamilySchema = SchemaFactory.createForClass(Family);

