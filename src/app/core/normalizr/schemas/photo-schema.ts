import { schema } from 'normalizr';
import { albumSchema } from './album-schema';

export const photoSchema = new schema.Entity('photos', {
  album: albumSchema,
});

export const photoListSchema = {
  items: [photoSchema],
};
