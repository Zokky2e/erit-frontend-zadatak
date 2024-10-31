import { Component, ViewChild } from "@angular/core";
import { MatSidenav } from "@angular/material/sidenav";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrl: "./app.component.scss",
})
export class AppComponent {
	@ViewChild("sidenav") public sidenav: MatSidenav | undefined;
	title = "Erit Frontend Zadatak";
	isNotificationSideBar: boolean = false;
	sideBarWidth: number = 230;

	onSideBarToggle(event: string) {
		this.isNotificationSideBar = event === "notifications";
		this.sideBarWidth = this.isNotificationSideBar ? 290 : 230;
		this.sidenav!.toggle();
	}
}
