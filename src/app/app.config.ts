import { ApplicationConfig } from '@angular/core';
import { routes } from './app.routes'; // Correct import statement
import { provideRouter } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration()]
};
