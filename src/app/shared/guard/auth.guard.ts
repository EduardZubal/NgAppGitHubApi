import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { RoutesConfig } from '../helpers/routes.config';
import { AuthService } from '../services/auth/auth.service';

export const AuthGuard: CanActivateFn = async (route, state) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (!auth.isUserLogged()) {
        return true;
    }

    void router.navigate([RoutesConfig.blocksPage]);
    return false;
};
