import { Album } from '../../../types/models/album';

export type NormalizedAlbumEntity = Omit<Album, 'user'> & {
  user?: number;
};
