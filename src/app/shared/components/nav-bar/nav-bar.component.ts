import { Component } from "@angular/core";
import { UserService } from "@core/services/user-service";
import { IUser } from "@models/interfaces";

@Component({
	selector: "nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrl: "./nav-bar.component.scss",
})
export class NavBarComponent {
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
}
