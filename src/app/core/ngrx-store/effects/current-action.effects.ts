import { Injectable } from '@angular/core';
import { Actions, createEffect } from '@ngrx/effects';
import { filter, map } from 'rxjs';
import { EndAction, StartAction } from '../actions/current-action.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class CurrentActionEffects {
  startAction$ = createEffect(() =>
    this.actions$.pipe(
      filter((action: any) => !!action.actionIsStarted),
      map((action: Action) => new StartAction(action.type)),
    ),
  );

  endAction$ = createEffect(() =>
    this.actions$.pipe(
      filter((action: any) => !!action.triggeredAction),
      map((action: any) => new EndAction(action.triggeredAction)),
    ),
  );

  constructor(private actions$: Actions) {}
}
