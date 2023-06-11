import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './transaction.schema';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('Transaction') private transactionModel: Model<Transaction>,
  ) {}

  async create(transaction: Transaction): Promise<Transaction> {
    const newTransaction = new this.transactionModel(transaction);
    return newTransaction.save();
  }

  async findByUserId(userId: string): Promise<Transaction[]> {
    return this.transactionModel.find({ userId: userId }).exec();
  }

  async findById(id: string): Promise<Transaction> {
    return this.transactionModel.findById(id).exec();
  }

  async update(id: string, transaction: Transaction): Promise<Transaction> {
    return this.transactionModel
      .findByIdAndUpdate(id, transaction, { new: true })
      .exec();
  }

  async delete(id: string): Promise<Transaction> {
    return this.transactionModel.findByIdAndRemove(id).exec();
  }
}
