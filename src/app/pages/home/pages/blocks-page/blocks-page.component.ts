import { Component } from '@angular/core';
import { UsersService } from '../../../../shared/services/users/users.service';
import { DataList } from '../../../../shared/classes/data-list';
import { IUserModel } from '../../../../shared/services/users/model/user.model';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { SearchFieldComponent } from '../../../../shared/components/search-field/search-field.component';
import { Router, RouterLink } from '@angular/router';
import { RoutesConfig } from '../../../../shared/helpers/routes.config';

@Component({
  selector: 'app-blocks-page',
  standalone: true,
  imports: [SearchFieldComponent, RouterLink, NgForOf, NgIf, AsyncPipe],
  templateUrl: './blocks-page.component.html',
  styleUrl: './blocks-page.component.scss'
})
export class BlocksPageComponent extends DataList<IUserModel>  {

  constructor(usersService: UsersService, private router: Router) {
    super(usersService);
  }

  public onSearch(event: string | null): void {
    this.getData({
        ...super.getListDto(),
        q: event
      });
  }

  public navigateToDetail(login: string): void {
     this.router.navigate([RoutesConfig?.detailPage], { queryParams: { user: login } });
  }

}
