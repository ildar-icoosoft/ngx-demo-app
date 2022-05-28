import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { normalize } from 'normalizr';
import NormalizedData from '../../normalizr/types/normalized-data';
import { ApiService } from '../../services/api.service';
import * as userActions from '../actions/user.actions';
import { userListSchema } from '../../normalizr/schemas/user-schema';
import { PageResult } from '../../types/pagination/page-result';

@Injectable()
export class UserEffects {
  getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.GET_USERS),
      switchMap(() =>
        this.api.getUsers({}).pipe(
          map((pageResult) => normalize(pageResult, userListSchema)),
          map((data: NormalizedData<PageResult<number>>) => new userActions.GetUsersSuccess(data)),
          catchError((error) => of(new userActions.GetUsersFailure(error))),
        ),
      ),
    ),
  );

  constructor(private actions$: Actions, private api: ApiService) {}
}
