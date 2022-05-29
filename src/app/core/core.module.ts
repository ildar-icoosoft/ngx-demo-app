import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers, State } from './ngrx-store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EntityEffects } from './ngrx-store/effects/entity.effects';
import { CurrentActionEffects } from './ngrx-store/effects/current-action.effects';
import { PostEffects } from './ngrx-store/effects/post.effects';
import { UserEffects } from './ngrx-store/effects/user.effects';
import { NgxsModule } from '@ngxs/store';
import { EntitiesState } from './ngxs-store/state/entities.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { AlbumEntitiesState } from './ngxs-store/state/entities/album-entities.state';
import { UserEntitiesState } from './ngxs-store/state/entities/user-entities.state';
import { NgxsActionsExecutingModule } from '@ngxs-labs/actions-executing';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot<State>(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([EntityEffects, CurrentActionEffects, PostEffects, UserEffects]),
    NgxsModule.forRoot([EntitiesState, AlbumEntitiesState, UserEntitiesState], {
      developmentMode: !environment.production,
      selectorOptions: {
        // Такие значения рекомендуются в документации. И они будут дефолтными в NGXS 4
        suppressErrors: false,
        injectContainerState: false,
      },
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsActionsExecutingModule.forRoot(),
  ],
})
export class CoreModule {}
