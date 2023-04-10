import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GeneralModule } from './general/general.module';

@Module({
  imports: [
    GeneralModule,
    MongooseModule.forRoot(
      'mongodb+srv://ldelacruzg97:mvBGFon5Ix7wvBNQ@cluster0.nkcs6yr.mongodb.net/sweaden?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
