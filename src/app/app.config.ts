import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const FIREBASE_CONFIG = {
    "projectId":"angularappp",
    "appId":"1:78574811980:web:b9bb84433033a640d2ede9",
    "databaseURL":"https://angularappp.firebaseio.com",
    "storageBucket":"angularappp.appspot.com",
    "apiKey":"AIzaSyCxznYbMYVqYtTYWmC1YSPxcv6iHwGbWgw",
    "authDomain":"angularappp.firebaseapp.com",
    "messagingSenderId":"78574811980"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideFirebaseApp(() => initializeApp(FIREBASE_CONFIG)),
    provideAuth(() => getAuth()),
  ]
};