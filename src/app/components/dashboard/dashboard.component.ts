import { BreakpointObserver } from "@angular/cdk/layout";
import { DatePipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { HoursService } from "@core/services/hours-service";
import { MessagesService } from "@core/services/messages-service";
import { RequestsService } from "@core/services/requests-service";
import { WarningService } from "@core/services/warning-service";
import { IHours, IMessage, IRequest, IWarning } from "@models/interfaces";
import { TableComponent } from "./app-table";

@Component({
	selector: "dashboard",
	templateUrl: "./dashboard.component.html",
	styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {
	@ViewChild("table") table?: TableComponent;
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
	recievedChangeRequests: IRequest[] = [];
	sentChangeRequests: IRequest[] = [];
	hours: IHours[] = [];
	recievedChangeRequestsColumns: string[] = [];
	sentChangeRequestsColumns: string[] = [];
	hoursColumns: string[] = [];
	recievedChangeRequestsColumnsConfigs: {
		key: string;
		header: string;
		renderer?: (item: any) => any;
	}[] = [];
	sentChangeRequestsColumnsConfigs: {
		key: string;
		header: string;
		renderer?: (item: any) => any;
	}[] = [];
	hoursColumnsConfigs: {
		key: string;
		header: string;
		renderer?: (item: any) => any;
	}[] = [];
	constructor(
		private breakpointObserver: BreakpointObserver,
		private warningService: WarningService,
		private messagesService: MessagesService,
		private requestsService: RequestsService,
		private hoursService: HoursService
	) {}

	ngOnInit(): void {
		this.breakpointObserver
			.observe(["(max-width: 600px)"])
			.subscribe((result) => {
				this.cols = result.matches ? 1 : 2;
			});

		this.warnings = this.warningService.getWarnings();
		this.newMessages = this.messagesService.getMessages();
		this.pinnedMessages = this.messagesService.getMessages(true);
		this.recievedChangeRequests =
			this.requestsService.getRequests("recieved");
		this.sentChangeRequests = this.requestsService.getRequests("sent");
		this.hours = this.hoursService.getHours();
		this.recievedChangeRequestsColumns = [
			"roster",
			"dateCreated",
			"shift",
			"sentTo",
			"status",
		];
		this.sentChangeRequestsColumns = [
			"roster",
			"dateCreated",
			"shift",
			"sentTo",
			"status",
		];
		this.hoursColumns = [
			"licenseUnit",
			"role",
			"lastWork",
			"period",
			"hours",
		];
		this.recievedChangeRequestsColumnsConfigs = [
			{ key: "roster", header: "Roster" },
			{
				key: "dateCreated",
				header: "Date",
				renderer: (item: IRequest) =>
					new DatePipe("en-US").transform(
						item.dateCreated,
						"dd.MM.YY"
					) + `'`,
			},
			{ key: "shift", header: "Shift" },
			{ key: "sentTo", header: "Sender" },
			{
				key: "status",
				header: "Status",
				renderer: (item: IRequest) =>
					this.requestsService!.transformWithArrowIcon(
						item.shift[0],
						item.shift[1]
					),
			},
		];
		this.sentChangeRequestsColumnsConfigs = [
			{ key: "roster", header: "Roster" },
			{
				key: "dateCreated",
				header: "Date",
				renderer: (item: IRequest) =>
					new DatePipe("en-US").transform(
						item.dateCreated,
						"dd.MM.YY"
					) + `'`,
			},
			{ key: "shift", header: "Shift" },
			{ key: "sentTo", header: "Sent To" },
			{ key: "status", header: "Status" },
		];
		this.hoursColumnsConfigs = [
			{ key: "licenseUnit", header: "License unit" },
			{ key: "role", header: "Role" },
			{
				key: "lastWork",
				header: "Last Work",
				renderer: (item: IHours) =>
					new DatePipe("en-US").transform(item.lastWork, "dd.MM.YY."),
			},
			{ key: "period", header: "Period" },
			{ key: "hours", header: "Hours" },
		];
	}
}
