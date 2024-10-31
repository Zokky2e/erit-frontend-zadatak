import { Component, Input } from "@angular/core";
import { IWarning } from "@models/interfaces";

@Component({
	selector: "app-list",
	templateUrl: "./list.component.html",
	styleUrl: "../dashboard.component.scss",
})
export class ListComponent {
	@Input() items: any[] = [];
}
