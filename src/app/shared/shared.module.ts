import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	CornerPieceComponent,
	NavBarComponent,
	UserSideMenuComponent,
	UserSideMenuItemComponent,
} from "./components";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
	declarations: [
		NavBarComponent,
		CornerPieceComponent,
		UserSideMenuComponent,
		UserSideMenuItemComponent,
	],
	imports: [CommonModule, MatIconModule],
	exports: [NavBarComponent, CornerPieceComponent, UserSideMenuComponent],
})
export class SharedModule {}
