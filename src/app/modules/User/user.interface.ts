/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

export type TUser = {
  email: string;
};

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<TUser>;
}
