import { Component, Input } from "@angular/core";

@Component({
	selector: "corner-piece",
	templateUrl: "./corner-piece.component.html",
	styleUrl: "./corner-piece.component.scss",
})
export class CornerPieceComponent {
	@Input() public inverted: boolean = false;
}
