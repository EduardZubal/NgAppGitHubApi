import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiConfig } from "../../helpers/api-config";
import { IUserModel } from "./model/user.model";
import { ResponseList } from "../../interfaces/response-list";

@Injectable({
    providedIn: 'root',
})
export class UsersService {
    constructor(private http: HttpClient) {}

    getData(params?: any): Observable<ResponseList<IUserModel>> {
        return this.http.get<ResponseList<IUserModel>>(`${ApiConfig.searchUsers}`, {
            params: params as Record<string, string | number>,
        });
    }

    getItem(userName: string): Observable<IUserModel> {
        return this.http.get<IUserModel>(`${ApiConfig.user}/${userName}`);
    }
}
