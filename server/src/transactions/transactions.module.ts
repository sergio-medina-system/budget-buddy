import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from './transaction.schema';
import {
  TransactionsController,
  UserTransactionsController,
} from './transactions.controller';
import { TransactionsService } from './transactions.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
  controllers: [TransactionsController, UserTransactionsController],
  providers: [TransactionsService],
})
export class TransactionsModule {}
