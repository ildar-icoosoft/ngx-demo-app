import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PostEffects } from './post.effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostListEffects', () => {
  let actions$: Observable<any>;
  let effects: PostEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostEffects, provideMockActions(() => actions$)],
      imports: [HttpClientTestingModule],
    });

    effects = TestBed.inject(PostEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
