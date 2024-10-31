import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoleService } from "./services/role-service";
import { UserService } from "./services/user-service";
import { NotificationService } from "./services/notification-service";
import { RequestsService } from "./services/requests-service";
import { MessagesService } from "./services/messages-service";
import { HoursService } from "./services/hours-service";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
	imports: [CommonModule, MatIconModule],
	providers: [
		RoleService,
		UserService,
		NotificationService,
		RequestsService,
		MessagesService,
		HoursService,
	],
})
export class CoreModule {
	constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
		if (parentModule) {
			throw new Error(
				"CoreModule is already loaded. Import it in the AppModule only"
			);
		}
	}
}
