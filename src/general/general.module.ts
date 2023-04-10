import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GeneralService } from './general.service';
import { GeneralController } from './general.controller';
import { General, GeneralSchema } from './schemas/general.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: General.name, schema: GeneralSchema }]),
  ],
  providers: [GeneralService],
  controllers: [GeneralController],
})
export class GeneralModule {}
