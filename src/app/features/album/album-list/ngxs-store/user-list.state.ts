import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { denormalize } from 'normalizr';
import { GetUsersSuccess } from '../../../../core/ngxs-store/actions/user.actions';
import { userSchema } from '../../../../core/normalizr/schemas/user-schema';
import {
  EntitiesState,
  EntitiesStateModel,
} from '../../../../core/ngxs-store/state/entities.state';
import { User } from '../../../../core/types/models/user';
import { PageResult } from '../../../../core/types/pagination/page-result';

export type UserListStateModel = number[];

@State<UserListStateModel>({
  name: 'userList',
  defaults: [],
})
@Injectable()
export class UserListState {
  @Action(GetUsersSuccess)
  getUsers(ctx: StateContext<UserListStateModel>, action: GetUsersSuccess) {
    const pageResult: PageResult<number> = action.data.result;

    ctx.setState(pageResult.items);
  }

  @Selector([UserListState, EntitiesState])
  static items(state: UserListState, entities: EntitiesStateModel): User[] {
    return denormalize(state, [userSchema], entities).filter((item: User | undefined) => !!item);
  }
}
