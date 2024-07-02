import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    public isLogged$: BehaviorSubject<boolean> = new BehaviorSubject(false);

    constructor() {}
}
