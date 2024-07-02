import { Injectable, inject } from "@angular/core";
import { Auth, GithubAuthProvider, isSignInWithEmailLink, sendSignInLinkToEmail, signInWithEmailLink, signInWithPopup } from "@angular/fire/auth";
import { RoutesConfig } from "../../helpers/routes.config";
import { Router } from "@angular/router";
import { IUserModel } from "../users/model/user.model";

const STOREG_KEY = 'GithubAuthUserTest';
const STOREG_KEY_EMAIL = 'emailForSignIn';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private _firebaseAuth = inject(Auth);

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
        signInWithPopup(this._firebaseAuth, provider)
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
            await sendSignInLinkToEmail(this._firebaseAuth, email, actionCodeSettings);
            localStorage.setItem(STOREG_KEY_EMAIL, email);
            return true;
        } catch (error) {
            console.error(error);
            return false
        }
    }

    public async checkIfSignInWithEmailLink(): Promise<boolean> {
        const email = localStorage.getItem(STOREG_KEY_EMAIL) || '';
        if (isSignInWithEmailLink(this._firebaseAuth, window.location.href)) {
            const result = await signInWithEmailLink(this._firebaseAuth, email, window.location.href);
            localStorage.setItem(STOREG_KEY, JSON.stringify(result?.user));
            localStorage.removeItem(STOREG_KEY_EMAIL);
            return true;
        }
        return false;
    }

    public async signOut(): Promise<void> {
        await this._firebaseAuth.signOut();
        localStorage.removeItem(STOREG_KEY);
        this._router.navigateByUrl(RoutesConfig.auth);
    }
}
