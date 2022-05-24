import { schema } from 'normalizr';
import { userSchema } from './user-schema';

export const postSchema = new schema.Entity('posts', {
  user: userSchema,
});

export const postListSchema = {
  items: [postSchema],
};
