import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoutesConfig } from '../../../../shared/helpers/routes.config';
import { MENU_ITEMS, MenuItem } from './menu.config';
import { NgForOf, NgIf } from '@angular/common';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { IUserModel } from '../../../../shared/services/users/model/user.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgForOf, NgIf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  public readonly RoutesConfig = RoutesConfig;
  public readonly menu: MenuItem[] = MENU_ITEMS();

  public user: IUserModel | null = null;

  constructor(private _authService: AuthService ) {
    this.user = this._authService.user;
  }

  public signOut(): void {
    this._authService.signOut();
  }

}
