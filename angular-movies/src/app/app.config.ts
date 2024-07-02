import { ApplicationConfig, isDevMode } from '@angular/core';
import {provideRouter, withViewTransitions} from '@angular/router';

import { routes } from './app.routes';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient, withFetch } from "@angular/common/http";

import {provideAnimations} from "@angular/platform-browser/animations";

import { register } from 'swiper/element/bundle';
register();

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()), 
    provideHttpClient(withFetch()), 
    provideAnimations(), 
    provideServiceWorker('ngsw-worker.js', {
        enabled: true, //!isDevMode(),
        registrationStrategy: 'registerWhenStable:3000'
    })]
};
