import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

import { RoutesConfig } from '../helpers/routes.config';
import { AuthService } from '../services/auth/auth.service';

export const RootGuard: CanActivateFn = async (route, state) => {
    const auth = inject(AuthService);
    const router = inject(Router);

    await auth.checkIfSignInWithEmailLink();
    if (auth.isUserLogged()) {
        return true;
    }
    void router.navigate([RoutesConfig.auth]);
    return false;
};
