import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	CornerPieceComponent,
	NavBarComponent,
	UserInfoBarComponent,
	UserSideMenuComponent,
	UserSideMenuItemComponent,
} from "./components";
import { MatIconModule } from "@angular/material/icon";
import { FullNamePipe } from "./pipes/userName.pipe";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
	declarations: [
		NavBarComponent,
		CornerPieceComponent,
		UserSideMenuComponent,
		UserSideMenuItemComponent,
		UserInfoBarComponent,
		FullNamePipe,
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
	],
})
export class SharedModule {}
