import { Post } from '../../../types/models/post';

export type NormalizedPostEntity = Omit<Post, 'user'> & {
  user: number;
};
