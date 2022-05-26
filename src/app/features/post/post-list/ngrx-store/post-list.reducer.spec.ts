import { reducer, postListInitialState } from './post-list.reducer';

describe('PostList Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(postListInitialState, action);

      expect(result).toBe(postListInitialState);
    });
  });
});
