import { schema } from 'normalizr';
import { userSchema } from './user-schema';

export const albumSchema = new schema.Entity('albums', {
  user: userSchema,
});

export const albumListSchema = {
  items: [albumSchema],
};
