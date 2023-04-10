import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { General } from './schemas/general.schema';

@Injectable()
export class GeneralService {
  constructor(
    @InjectModel(General.name) private generalModel: Model<General>,
  ) {}

  async findByRuc(ruc: string): Promise<General> {
    return this.generalModel.findOne({ ruc });
  }
}
