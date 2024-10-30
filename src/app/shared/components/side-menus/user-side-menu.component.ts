import { Component, HostListener } from "@angular/core";
import { IUserSideMenuItem } from "./user-side-menu-item.component";

@Component({
	selector: "user-side-menu",
	templateUrl: "./user-side-menu.component.html",
	styleUrl: "./side-menu.component.scss",
})
export class UserSideMenuComponent {
	public isScreenSmall: boolean = false;
	public selectedItemLabel: string | undefined = "Documents";
	public currentMenuItems: IUserSideMenuItem[] = [];
	public menuItems: IUserSideMenuItem[] = [
		{
			icon: "folder_open",
			label: "Documents",
		},
		{
			icon: "today",
			label: "Roster",
		},
		{
			icon: "chat",
			label: "Messages",
		},
		{
			icon: "schedule",
			label: "Hours",
		},
		{
			icon: "verified",
			label: "Ratings",
		},
		{
			icon: "school",
			label: "Trainings",
		},
		{
			icon: "running_with_errors",
			label: "Warnings", //only show on screens with width bigger than 600px
		},
	];
	private checkScreenSize() {
		this.isScreenSmall = window.innerWidth < 600;
		this.currentMenuItems = this.isScreenSmall
			? this.menuItems.filter((item) => item.label !== "Warnings")
			: this.menuItems;
	}

	@HostListener("window:resize", ["$event"])
	onResize(event: Event) {
		this.checkScreenSize();
	}

	ngOnInit() {
		this.checkScreenSize();
	}

	onItemClicked(item: IUserSideMenuItem) {
		this.selectedItemLabel = item.label;
		console.log(this.selectedItemLabel);
		console.log(item);
	}
}
