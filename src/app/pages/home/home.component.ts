import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MenuComponent } from "./components/menu/menu.component";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, MenuComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
