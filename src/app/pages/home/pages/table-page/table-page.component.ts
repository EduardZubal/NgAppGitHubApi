import { Component } from '@angular/core';
import { UsersService } from '../../../../shared/services/users/users.service';
import { SearchFieldComponent } from '../../../../shared/components/search-field/search-field.component';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { DataList } from '../../../../shared/classes/data-list';
import { IUserModel } from '../../../../shared/services/users/model/user.model';
import { Router } from '@angular/router';
import { RoutesConfig } from '../../../../shared/helpers/routes.config';

@Component({
  selector: 'app-table-page',
  standalone: true,
  imports: [SearchFieldComponent, NgForOf, NgIf, AsyncPipe],
  templateUrl: './table-page.component.html',
  styleUrl: './table-page.component.scss'
})
export class TablePageComponent extends DataList<IUserModel> {
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
