import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { filter, map } from 'rxjs';
import NormalizedData from '../../normalizr/types/normalized-data';
import { GetEntitiesSuccess } from '../actions/entity.actions';
import { PayloadAction } from '../types/payload-action';

@Injectable()
export class EntityEffects {
  getEntitiesSuccess$ = createEffect(() =>
    this.actions$.pipe(
      filter((action: any) => !!action.containsNormalizedData),
      map(
        (action: PayloadAction<NormalizedData<any>>) =>
          new GetEntitiesSuccess(action.payload.entities),
      ),
    ),
  );

  constructor(private actions$: Actions) {}
}
