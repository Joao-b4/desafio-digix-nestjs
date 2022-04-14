import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { createConnection } from "mongoose";

async function bootstrap() {
  // var mongoDB =
  // "mongodb://admin:admin@localhost:27017/digix?authMechanism=DEFAULT";
  // let db = await createConnection(mongoDB, null, (err) => {
  //   console.log(err);
  // });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

}
bootstrap();
