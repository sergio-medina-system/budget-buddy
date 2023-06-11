import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(user: User): Promise<User> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findUserById(userId: string): Promise<User> {
    return this.userModel.findById(userId);
  }

  async updateUser(userId: string, updateUser: User): Promise<User> {
    return this.userModel.findByIdAndUpdate(userId, updateUser, { new: true });
  }

  async deleteUser(userId: string): Promise<User> {
    return this.userModel.findByIdAndDelete(userId);
  }
}
