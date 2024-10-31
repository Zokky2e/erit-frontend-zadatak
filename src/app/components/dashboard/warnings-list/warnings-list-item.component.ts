import { Component, Input } from "@angular/core";
import { IWarning } from "@models/interfaces";

@Component({
	selector: "warning-list-item",
	templateUrl: "./warnings-list-item.component.html",
	styleUrl: "../dashboard.component.scss",
})
export class WarningsListItemComponent {
	@Input() warning: IWarning | undefined;
}
