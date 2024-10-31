import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	CornerPieceComponent,
	NavBarComponent,
	NotificationsMenuComponent,
	RightSideMenuComponent,
	RightSideMenuItemComponent,
	UserInfoBarComponent,
	UserSideMenuComponent,
	UserSideMenuItemComponent,
} from "./components";
import { MatIconModule } from "@angular/material/icon";
import { FullNamePipe } from "./pipes/userName.pipe";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ProfileMenuComponent } from "./components/side-menus/right-side/profile/profile-menu.component";

@NgModule({
	declarations: [
		NavBarComponent,
		CornerPieceComponent,
		UserSideMenuComponent,
		UserSideMenuItemComponent,
		UserInfoBarComponent,
		FullNamePipe,
		RightSideMenuComponent,
		RightSideMenuItemComponent,
		ProfileMenuComponent,
		NotificationsMenuComponent,
	],
	imports: [
		CommonModule,
		MatIconModule,
		MatSidenavModule,
		MatDividerModule,
		MatTooltipModule,
	],
	exports: [
		NavBarComponent,
		CornerPieceComponent,
		UserSideMenuComponent,
		FullNamePipe,
		RightSideMenuComponent,
		ProfileMenuComponent,
		NotificationsMenuComponent,
	],
})
export class SharedModule {}
