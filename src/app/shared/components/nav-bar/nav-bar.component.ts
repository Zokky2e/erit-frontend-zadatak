import { Component, EventEmitter, Output } from "@angular/core";
import { UserService } from "@core/services/user-service";
import { IUser } from "@models/interfaces";

@Component({
	selector: "nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrl: "./nav-bar.component.scss",
})
export class NavBarComponent {
	@Output() public onSideBarToggle: EventEmitter<string> =
		new EventEmitter<string>();
	public currentUser: IUser = { id: "" };

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.currentUser = this.userService.getCurrentUser();
	}

	updateUserRole(user: IUser) {
		this.currentUser = user;
		this.userService.updateUser(this.currentUser.id, this.currentUser);
		this.currentUser = this.userService.getCurrentUser();
	}

	sideBarToggle(sideBarType: string) {
		this.onSideBarToggle.emit(sideBarType);
	}
}
