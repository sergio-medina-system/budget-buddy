import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Transaction } from './transaction.schema';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Post()
  async create(@Body() transaction: Transaction): Promise<Transaction> {
    return this.transactionsService.create(transaction);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Transaction> {
    return this.transactionsService.findById(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() transaction: Transaction,
  ): Promise<Transaction> {
    return this.transactionsService.update(id, transaction);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Transaction> {
    return this.transactionsService.delete(id);
  }
}

@Controller('users/:userId/transactions')
export class UserTransactionsController {
  constructor(private readonly transactionsService: TransactionsService) {}

  @Get()
  async findByUserId(@Param('userId') userId: string): Promise<Transaction[]> {
    return this.transactionsService.findByUserId(userId);
  }
}
