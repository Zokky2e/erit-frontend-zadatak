import { Component } from "@angular/core";
import { IRightSideMenuItem } from "@shared/components";

@Component({
	selector: "profile-menu",
	templateUrl: "./profile-menu.component.html",
	styleUrl: "../right-side-menu.component.scss",
})
export class ProfileMenuComponent {
	profileItems: IRightSideMenuItem[] = [
		{
			icon: "person",
			title: "Personal info",
		},
		{
			icon: "folder_open",
			title: "Personal files",
		},
		{
			icon: "settings",
			title: "Profile settings",
		},
	];
	logoutItem: IRightSideMenuItem = {
		icon: "logout",
		title: "Logout",
	};
}
