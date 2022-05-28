import { schema } from 'normalizr';

export const userSchema = new schema.Entity('users');

export const userListSchema = {
  items: [userSchema],
};
