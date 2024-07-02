import { Directive, inject } from "@angular/core";
import { ComponentListApi } from "../interfaces/component-list-api";
import { UntilDestroy, untilDestroyed } from "@ngneat/until-destroy";
import { BehaviorSubject, finalize } from "rxjs";
import { LoaderService } from "../services/loader.service";

@UntilDestroy()
@Directive()
export abstract class DataList<Model> {

    public list$: BehaviorSubject<Model[]> = new BehaviorSubject<Model[]>([]);

    private _loaderService = inject(LoaderService);

    protected constructor(protected apiService: ComponentListApi<Model>) {}

    public getData(payload?: any): void {
        this._loaderService.loader$.next(true);

        this.apiService
            .getData(payload as any)
            .pipe(
                untilDestroyed(this),
                finalize(() => this._loaderService.loader$.next(false)),
            )
            .subscribe({
                next: (res) => {
                    this.list$.next(res?.items);
                },
            });
    }

    public getListDto(): Partial<Record<string, any>> {
        return {
            q: null,
            page: 1,
            per_page: 20,
        };
    }

}
