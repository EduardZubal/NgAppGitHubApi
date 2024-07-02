import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { EMAIL_PATTERN } from '../../shared/helpers/constants';

@Component({
    selector: 'tms-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.scss'],
    standalone: true,
    imports: [RouterOutlet, ReactiveFormsModule],
})
export class AuthComponent {
    public emailControl = new FormControl('', [Validators.required, Validators.pattern(EMAIL_PATTERN)]);

    public isAlertHidden = true;
    public isToastHidden = true;

    constructor(private _authService: AuthService ) {}

    public signInWithRedirect() {
        this._authService.signInGithubAuth();
    }

    public async signInWithEmail() {
        if (this.emailControl.value?.trim()) {
            const result = await this._authService.signInWithEmail(this.emailControl.value);
            this.isAlertHidden = !result;
            this.isToastHidden = result;
        }
    }
}
