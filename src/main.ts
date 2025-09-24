import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Home } from './app/home/home';
import { provideServerRendering } from '@angular/ssr';
import { provideServiceWorker } from '@angular/service-worker';
import { isDevMode } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    provideServiceWorker('ngsw-worker.js', { enabled: !isDevMode() }),
  ],
});

