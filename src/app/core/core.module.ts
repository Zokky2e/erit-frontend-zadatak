import { NgModule, Optional, SkipSelf } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoleService } from "./services/role-service";
import { UserService } from "./services/user-service";
import { NotificationService } from "./services/notification-service";

@NgModule({
	imports: [CommonModule],
	providers: [RoleService, UserService, NotificationService],
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
