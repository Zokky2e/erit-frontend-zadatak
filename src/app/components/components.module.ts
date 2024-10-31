import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
	CardComponent,
	DashboardComponent,
	ListComponent,
	MessageListItemComponent,
	TableComponent,
	WarningsListItemComponent,
} from "./dashboard";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
	imports: [
		CommonModule,
		MatGridListModule,
		MatTableModule,
		MatExpansionModule,
		MatCardModule,
		MatIconModule,
	],
	declarations: [
		DashboardComponent,
		CardComponent,
		WarningsListItemComponent,
		ListComponent,
		MessageListItemComponent,
		MessageListItemComponent,
		TableComponent,
	],
	providers: [],
	exports: [DashboardComponent],
})
export class ComponentsModule {}
