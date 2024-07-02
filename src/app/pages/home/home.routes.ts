import { Routes } from '@angular/router';
import { RoutesConfig } from '../../shared/helpers/routes.config';
import { HomeComponent } from './home.component';

export const ROUTES: Routes = [
    {
        path: RoutesConfig.root,
        component: HomeComponent,
        children: [
            {
                path: '',
                children: [
                    {
                        path: '',
                        redirectTo: RoutesConfig.blocksPage,
                        pathMatch: 'full',
                    },
                    {
                        path: RoutesConfig.blocksPage,
                        loadComponent: () => import('./pages/blocks-page/blocks-page.component').then((c) => c.BlocksPageComponent),
                    },
                    {
                        path: RoutesConfig.tablePage,
                        loadComponent: () => import('./pages/table-page/table-page.component').then((c) => c.TablePageComponent),
                    },
                    {
                        path: RoutesConfig.detailPage,
                        loadComponent: () => import('./pages/detail-page/detail-page.component').then((c) => c.DetailPageComponent),
                    },
                ],
            },
        ],
    },
];
