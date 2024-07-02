import { Component, OnInit, signal } from '@angular/core';
import { UsersService } from '../../../../shared/services/users/users.service';
import { IUserModel } from '../../../../shared/services/users/model/user.model';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { LoaderService } from '../../../../shared/services/loader.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-detail-page',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './detail-page.component.html',
  styleUrl: './detail-page.component.scss'
})
export class DetailPageComponent implements OnInit {

  public userSignal = signal<IUserModel | null>(null);

  constructor(
    private _usersService: UsersService,
    private _activatedRoute: ActivatedRoute,
    private _loaderService: LoaderService,
  ) { }

  ngOnInit() {
    const params = this._activatedRoute.snapshot.queryParams;
    this.getItem(params?.['user']);
  }

    public getItem(user: string): void {
      this._loaderService.loader$.next(true);

      this._usersService
          .getItem(user)
          .pipe(
              untilDestroyed(this),
              finalize(() => this._loaderService.loader$.next(false)),
          )
          .subscribe({
            next: (res) => {
              this.userSignal.set(res);
            },
          });
    }

}
