import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { WEB_SERVER_CONFIGURATION } from "./configuration";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(WEB_SERVER_CONFIGURATION.port);
}
bootstrap();
