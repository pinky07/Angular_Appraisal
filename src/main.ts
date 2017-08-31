import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// Enable prod mode in production-like environments
if (environment.production) {
  enableProdMode();
}

// Bootstrap the application
platformBrowserDynamic().bootstrapModule(AppModule);
