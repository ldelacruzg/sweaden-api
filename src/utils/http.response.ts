import { HttpStatus } from '@nestjs/common';
import { Response } from 'express';

export interface Payload {
  readonly statusCode?: HttpStatus;
  message?: string;
  data: any;
}

export class HttpResponse {
  static OK(res: Response, payload: Payload) {
    const response: Payload = {
      statusCode: HttpStatus.OK,
      message: 'The request has been successfully executed',
      ...payload,
    };

    return res.status(response.statusCode).json(response);
  }
}
