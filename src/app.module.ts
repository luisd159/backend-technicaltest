import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NoteModule } from './note/note.module';
import { Note } from './note/entity/note.entity';
import * as dotenv from 'dotenv';
dotenv.config();

const db_option = {
  host: process.env.HOST,
  port: parseInt(process.env.DB_PORT),
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  database: process.env.DB_NAME,
};

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...db_option,
      entities: [Note],
      synchronize: true,
      logging: true,
    }),
    NoteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
