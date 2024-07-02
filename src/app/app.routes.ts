import {Routes} from '@angular/router';

import { RootGuard } from './shared/guard/root.guard';
import { RoutesConfig } from './shared/helpers/routes.config';

export const routes: Routes = [
    {
        path: '',
        canActivate: [RootGuard],
        loadChildren: () => import('./pages/home/home.routes').then((mod) => mod.ROUTES),
    },
    {
        path: RoutesConfig.auth,
        loadComponent: () => import('./pages/auth/auth.component').then((c) => c.AuthComponent),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    },
];
