import { Album } from './album';

export interface Photo {
  id: number;
  album?: Album;
  title: string;
  url: string;
  thumbnailUrl: string;
}
