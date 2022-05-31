import { ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { devTools } from '@ngneat/elf-devtools';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((moduleRef) => {
    if (!environment.production) {
      devTools({
        name: 'Elf demo',
        postTimelineUpdate: () => moduleRef.injector.get(ApplicationRef).tick(),
      });
    }
  })
  .catch((err) => console.error(err));
