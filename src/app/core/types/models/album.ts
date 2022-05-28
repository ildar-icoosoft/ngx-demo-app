import { User } from './user';

export interface Album {
  id: number;
  user?: User;
  title: string;
}
