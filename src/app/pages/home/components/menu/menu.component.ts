import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoutesConfig } from '../../../../shared/helpers/routes.config';
import { MENU_ITEMS, MenuItem } from './menu.config';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgForOf],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  public readonly RoutesConfig = RoutesConfig;
  public readonly menu: MenuItem[] = MENU_ITEMS();

  constructor() {}

}
