import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrentActionEffects } from './current-action.effects';

describe('CurrentActionEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrentActionEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentActionEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CurrentActionEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
