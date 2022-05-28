import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ApiService } from '../../../../core/services/api.service';
import { map, mergeMap, tap } from 'rxjs';
import { denormalize, normalize } from 'normalizr';
import NormalizedData from '../../../../core/normalizr/types/normalized-data';
import { GetUsers } from '../../../../core/ngxs-store/actions/user.actions';
import { userSchema } from '../../../../core/normalizr/schemas/user-schema';
import { GetEntities } from '../../../../core/ngxs-store/actions/entity.actions';
import {
  EntitiesState,
  EntitiesStateModel,
} from '../../../../core/ngxs-store/state/entities.state';
import { User } from '../../../../core/types/models/user';

export type UserDropdownListStateModel = number[];

@State<UserDropdownListStateModel>({
  name: 'userDropdownList',
  defaults: [],
})
@Injectable()
export class UserDropdownListState {
  constructor(private api: ApiService) {}

  @Action(GetUsers)
  getUsers(ctx: StateContext<UserDropdownListStateModel>) {
    return this.api.getUsers().pipe(
      map((result) => normalize(result, [userSchema])),
      tap((data: NormalizedData<number[]>) => {
        ctx.setState(data.result);
      }),
      mergeMap((data: NormalizedData<number[]>) => ctx.dispatch(new GetEntities(data.entities))),
    );
  }

  @Selector([EntitiesState])
  static items(state: UserDropdownListState, entities: EntitiesStateModel): User[] {
    return denormalize(state, [userSchema], entities).filter((item: User | undefined) => !!item);
  }
}
