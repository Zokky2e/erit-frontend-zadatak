import { Component, EventEmitter, Output } from "@angular/core";
import { UserService } from "@core/services/user-service";
import { IUser } from "@models/interfaces";

@Component({
	selector: "dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {}
