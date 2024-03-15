import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000) || process.env.PORT;
  app.enableCors({
    methods: [ "GET", "POST", "PUT", "DELETE","OPTIONS", "PATCH"],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
 });
}
bootstrap();
