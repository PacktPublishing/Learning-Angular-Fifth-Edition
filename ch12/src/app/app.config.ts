import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { APP_SETTINGS, appSettings } from './app.settings';
import { AppErrorHandler } from './app-error-handler';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: APP_SETTINGS, useValue: appSettings },
    { provide: ErrorHandler, useClass: AppErrorHandler }, provideAnimationsAsync()
  ]
};
