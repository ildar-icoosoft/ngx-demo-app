import { Photo } from '../../../types/models/photo';

export type NormalizedPhotoEntity = Omit<Photo, 'album'> & {
  album?: number;
};
