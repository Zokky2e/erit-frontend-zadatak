import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ComponentsModule } from "@components/components.module";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { MatSidenavModule } from "@angular/material/sidenav";
import {
	provideHttpClient,
	withInterceptorsFromDi,
} from "@angular/common/http";

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ComponentsModule,
		CoreModule,
		SharedModule,
		MatSidenavModule,
	],
	providers: [
		provideAnimationsAsync(),
		provideHttpClient(withInterceptorsFromDi()),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
