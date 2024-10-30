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

@NgModule({
	declarations: [
		NavBarComponent,
		CornerPieceComponent,
		UserSideMenuComponent,
		UserSideMenuItemComponent,
		UserInfoBarComponent,
		FullNamePipe,
	],
	imports: [CommonModule, MatIconModule],
	exports: [
		NavBarComponent,
		CornerPieceComponent,
		UserSideMenuComponent,
		FullNamePipe,
	],
})
export class SharedModule {}
