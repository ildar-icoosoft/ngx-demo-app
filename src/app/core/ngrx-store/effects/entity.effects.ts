import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { filter, map } from 'rxjs';
import { GetEntitiesSuccess } from '../actions/entity.actions';
import { ActionWithNormalizedData } from '../types/action-with-normalized-data';

@Injectable()
export class EntityEffects {
  getEntitiesSuccess$ = createEffect(() =>
    this.actions$.pipe(
      filter((action: any) => !!action.containsNormalizedData),
      map((action: ActionWithNormalizedData) => new GetEntitiesSuccess(action.data.entities)),
    ),
  );

  constructor(private actions$: Actions) {}
}
