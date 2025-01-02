import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TUser } from './user.interface';
import { User } from './user.model';

const saveEmailItoDB = async (payload: TUser) => {
  const user = await User.isUserExistsByEmail(payload.email);

  if (user) {
    throw new AppError(
      httpStatus.CONFLICT,
      'You have already registered for early access!!'
    );
  }

  const result = await User.create(payload);
  return result;
};

const getAllUsersFromDB = async (query: Record<string, unknown>) => {
  const users = await User.find(query);

  return users;
};

export const UserServices = {
  saveEmailItoDB,
  getAllUsersFromDB,
};
