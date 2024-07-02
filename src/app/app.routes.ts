import {Routes} from '@angular/router';

import { RootGuard } from './shared/guard/root.guard';
import { RoutesConfig } from './shared/helpers/routes.config';
import { AuthGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
    {
        path: '',
        canActivate: [RootGuard],
        loadChildren: () => import('./pages/home/home.routes').then((r) => r.ROUTES),
    },
    {
        path: RoutesConfig.auth,
        canActivate: [AuthGuard],
        loadComponent: () => import('./pages/auth/auth.component').then((c) => c.AuthComponent),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    },
];
