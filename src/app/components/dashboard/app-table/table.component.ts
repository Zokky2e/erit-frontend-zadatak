import { Component, Input } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
	selector: "app-table",
	templateUrl: "./table.component.html",
	styleUrl: "../dashboard.component.scss",
})
export class TableComponent {
	@Input() items: any[] = [];
	@Input() displayedColumns: string[] = [];
	@Input() columnConfigs: {
		key: string;
		header: string;
		renderer?: (item: any) => any;
	}[] = [];
}
