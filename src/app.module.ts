import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongodbModule } from './mongodb/mongodb.module';

@Module({
  imports: [ProductsModule, MongodbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
