import {Routes} from '@angular/router';

import { RootGuard } from './shared/guard/root.guard';
import { RoutesConfig } from './shared/helpers/routes.config';

export const routes: Routes = [
    {
        path: '',
        canActivate: [RootGuard],
        loadChildren: () => import('./pages/home/home.routes').then((mod) => mod.ROUTES),
    },
    // {
    //     path: RoutesConfig.auth,
    //     loadChildren: () => import('./pages/auth/auth.routes').then((mod) => mod.ROUTES),
    // },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    },
];
