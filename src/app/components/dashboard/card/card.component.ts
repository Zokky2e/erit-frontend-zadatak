import { Component, Input } from "@angular/core";

@Component({
	selector: "card",
	templateUrl: "./card.component.html",
	styleUrl: "../dashboard.component.scss",
})
export class CardComponent {
	@Input() closeable: boolean = false;
	@Input() title: string = "";
}
