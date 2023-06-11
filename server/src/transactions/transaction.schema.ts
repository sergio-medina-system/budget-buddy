import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';

@Schema()
export class Transaction extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: mongoose.Types.ObjectId;

  @Prop({ type: Number, required: true })
  amount: number;

  @Prop({ type: String, required: true, enum: ['income', 'expense'] })
  type: 'income' | 'expense';

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: String })
  note: string;

  @Prop({ type: Date, default: Date.now })
  date: Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

// Add the index
TransactionSchema.index({ userId: 1, date: -1 });
