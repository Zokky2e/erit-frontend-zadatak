import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard";

@NgModule({
	imports: [CommonModule],
	declarations: [DashboardComponent],
	providers: [],
	exports: [DashboardComponent],
})
export class CoreModule {}
