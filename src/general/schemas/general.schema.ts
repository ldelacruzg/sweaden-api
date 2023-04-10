import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type GeneralDocument = HydratedDocument<General>;

interface Notifications {
  sms: boolean;
  email: boolean;
}

@Schema({ collection: 'general' })
export class General {
  @Prop()
  ruc: string;

  @Prop()
  name: string;

  @Prop()
  locations: string[];

  @Prop()
  website: string;

  @Prop()
  umbral: number;

  @Prop({ type: Types.Map })
  notifications: Object;

  @Prop()
  asgtype: string;
}

export const GeneralSchema = SchemaFactory.createForClass(General);
