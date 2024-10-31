import { Component, EventEmitter, Input, Output } from "@angular/core";

export interface IUserSideMenuItem {
	label?: string;
	icon?: string;
}

@Component({
	selector: "user-side-menu-item",
	templateUrl: "./user-side-menu-item.component.html",
	styleUrl: "./user-side-menu.component.scss",
})
export class UserSideMenuItemComponent {
	@Input() public item: IUserSideMenuItem = {};
	@Input() public isSelected: boolean = false;
	@Output() public onItemClick: EventEmitter<any> = new EventEmitter<any>();

	itemClick() {
		this.onItemClick.emit(this.item);
	}
}
