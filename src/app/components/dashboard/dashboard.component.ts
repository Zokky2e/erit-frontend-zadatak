import { BreakpointObserver } from "@angular/cdk/layout";
import { Component } from "@angular/core";
import { MessagesService } from "@core/services/messages-service";
import { WarningService } from "@core/services/warning-service";
import { IMessage, IWarning } from "@models/interfaces";

@Component({
	selector: "dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
	displayedColumns: string[] = ["roster"];
	cols: number = 2;
	changeRequests: { roster: string }[] = [
		{
			roster: "test",
		},
		{ roster: "test" },
		{ roster: "test" },
	];
	warnings: IWarning[] = [];
	newMessages: IMessage[] = [];
	pinnedMessages: IMessage[] = [];
	constructor(
		private breakpointObserver: BreakpointObserver,
		private warningService: WarningService,
		private messagesService: MessagesService
	) {}

	ngOnInit(): void {
		this.breakpointObserver
			.observe(["(max-width: 600px)"])
			.subscribe((result) => {
				this.cols = result.matches ? 1 : 2; // Set to 1 column on screens <= 600px
			});

		this.warnings = this.warningService.getWarnings();
		this.newMessages = this.messagesService.getMessages();
		this.pinnedMessages = this.messagesService.getMessages(true);
	}
}
