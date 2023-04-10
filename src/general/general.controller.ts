import {
  Controller,
  Get,
  Query,
  BadRequestException,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { GeneralService } from './general.service';
import { HttpResponse } from 'src/utils/http.response';

@Controller('general')
export class GeneralController {
  constructor(private generalService: GeneralService) {}

  @Get()
  async findGeneralByRuc(@Query('ruc') ruc: string, @Res() res) {
    // It is validated that the RUC parameter exists
    if (!ruc) {
      throw new BadRequestException('The RUC parameter is not specified');
    }

    // The general data of the company is searched by the RUC
    const generalInfo = await this.generalService.findByRuc(ruc);
    if (!generalInfo) {
      throw new NotFoundException('Requested data not found');
    }

    // The requested data is returned
    return HttpResponse.OK(res, { data: generalInfo });
  }

  @Get('/assigment-type')
  async getAssigmentType(@Query('ruc') ruc: string, @Res() res) {
    const general = await this.generalService.findByRuc(ruc);
    return HttpResponse.OK(res, { data: { assigmentType: general.asgtype } });
  }

  @Get('/notifications')
  async getNotifications(@Query('ruc') ruc: string, @Res() res) {
    const general = await this.generalService.findByRuc(ruc);
    return HttpResponse.OK(res, {
      data: { notifications: general.notifications },
    });
  }
}
