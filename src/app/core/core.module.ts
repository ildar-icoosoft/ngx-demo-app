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
import { PhotoEntitiesState } from './ngxs-store/state/entities/photo-entities.state';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { enableAkitaProdMode } from '@datorama/akita';

if (environment.production) {
  enableAkitaProdMode();
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgbModule,
    NgxsModule.forRoot([EntitiesState, AlbumEntitiesState, UserEntitiesState, PhotoEntitiesState], {
      developmentMode: !environment.production,
      selectorOptions: {
        // Такие значения рекомендуются в документации. И они будут дефолтными в NGXS 4
        suppressErrors: false,
        injectContainerState: false,
      },
    }),
    environment.production ? [] : NgxsReduxDevtoolsPluginModule.forRoot({ name: 'NGXS demo' }),
    NgxsActionsExecutingModule.forRoot(),
    environment.production ? [] : AkitaNgDevtools.forRoot({ name: 'Akita demo' }),
    AkitaNgRouterStoreModule,
    // Ngrx нужно подключать после Akita, потому что иначе они будут конфликтовать в redux devtools
    StoreModule.forRoot<State>(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument({ name: 'NgRx demo' }) : [],
    EffectsModule.forRoot([EntityEffects, CurrentActionEffects, PostEffects, UserEffects]),
  ],
  providers: [
    {
      provide: NG_ENTITY_SERVICE_CONFIG,
      useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' },
    },
  ],
})
export class CoreModule {}
