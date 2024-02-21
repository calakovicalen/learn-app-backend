import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo:27017/learn-app-db')],
})
export class MongodbModule {}

/* 
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://calakovicalen:alen123@mongo:27017/learn-app-db',
    ),
  ],
})
export class MongodbModule {}
 */
