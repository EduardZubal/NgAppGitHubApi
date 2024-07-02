import { Injectable, inject } from "@angular/core";
import { Auth, GithubAuthProvider, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink, signInWithPopup } from "@angular/fire/auth";
import { RoutesConfig } from "../../helpers/routes.config";
import { Router } from "@angular/router";
import { IUserModel } from "../users/model/user.model";

const STOREG_KEY = 'GithubAuthUserTest';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    private _fireAuth = inject(Auth);

    public isUserLogged(): boolean {
        return !!localStorage.getItem(STOREG_KEY);
    }

    get user(): IUserModel {
        return JSON.parse(localStorage.getItem(STOREG_KEY) || '');
    }

    constructor(private _router: Router) {}

    public signInGithubAuth() {
        const provider = new GithubAuthProvider();
        provider.addScope('repo');
        signInWithPopup(this._fireAuth, provider)
            .then((result) => {
                localStorage.setItem(STOREG_KEY, JSON.stringify(result?.user));
                void this._router.navigateByUrl(RoutesConfig.root);
            }).catch((error) => {
                console.error(error);
            });
    }

    public async signInWithEmail(email: string): Promise<boolean> {
        const actionCodeSettings = {
            url: 'http://localhost:4200',
            handleCodeInApp: true,
        };

        try {
            await sendSignInLinkToEmail(this._fireAuth, email, actionCodeSettings);
            localStorage.setItem('emailForSignIn', email);
            return true;
        } catch (error) {
            console.error(error);
            return false
        }
    }

    public async checkIfSignInWithEmailLink(): Promise<boolean> {
        const email = localStorage.getItem('emailForSignIn') || '';
        if (isSignInWithEmailLink(this._fireAuth, window.location.href)) {
            const result = await signInWithEmailLink(this._fireAuth, email, window.location.href);
            localStorage.setItem(STOREG_KEY, JSON.stringify(result?.user));
            localStorage.removeItem('emailForSignIn');
            return true;
        }
        return false;
    }

    public async signOut(): Promise<void> {
        await this._fireAuth.signOut();
        localStorage.removeItem(STOREG_KEY);
        this._router.navigateByUrl(RoutesConfig.auth);
    }
}
