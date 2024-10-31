import { Component, Input } from "@angular/core";

export interface IRightSideMenuItem {
	icon: string;
	title: string;
	description?: string;
	dateCreated?: Date;
	isRead?: boolean;
}

@Component({
	selector: "right-side-menu-item",
	templateUrl: "./right-side-menu-item.component.html",
	styleUrl: "./right-side-menu.component.scss",
})
export class RightSideMenuItemComponent {
	@Input() item: IRightSideMenuItem = { icon: "", title: "" };
}
