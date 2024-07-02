import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs/operators';

import { RoutesConfig } from '../helpers/routes.config';
import { AuthService } from '../services/auth/auth.service';

export const RootGuard: CanActivateFn = (route, state) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    return auth.isLogged$.pipe(
        map((isLogged) => {
            if (isLogged) return true;

            void router.navigate([RoutesConfig.auth]);
            return false;
        })
    );
};
