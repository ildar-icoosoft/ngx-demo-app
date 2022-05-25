import { User } from './user';

export interface Post {
  id: number;
  user?: User;
  title: string;
  body: string;
}
