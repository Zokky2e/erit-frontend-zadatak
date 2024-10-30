import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, CoreModule, SharedModule],
	providers: [provideAnimationsAsync()],
	bootstrap: [AppComponent],
})
export class AppModule {}