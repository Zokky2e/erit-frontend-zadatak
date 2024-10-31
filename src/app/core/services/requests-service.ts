// src/app/services/role.service.ts
import { Injectable } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { IRequest } from "@models/interfaces";

@Injectable({
	providedIn: "root",
})
export class RequestsService {
	private requests: IRequest[] = [
		{
			id: "1",
			type: "recieved",
			dateCreated: new Date(),
			shift: ["N", "N2"],
			roster: "LDZO ACS",
			sentTo: "Pero Perić",
			status: ["pending", "pending"],
		},
		{
			id: "2",
			type: "recieved",
			dateCreated: new Date(),
			shift: ["N", "N2"],
			roster: "LDZO ACS",
			sentTo: "Pero Perić",
			status: ["check-circle", "pending"],
		},
		{
			id: "3",
			type: "recieved",
			dateCreated: new Date(),
			shift: ["N", "N2"],
			roster: "LDZO ACS",
			sentTo: "Pero Perić",
			status: ["check-circle", "close"],
		},
		{
			id: "4",
			type: "sent",
			dateCreated: new Date(),
			shift: ["N", "N2"],
			roster: "LDZO ACS",
			sentTo: "Pero Perić",
			status: ["check-circle", "check-circle"],
		},
		{
			id: "5",
			type: "sent",
			dateCreated: new Date(),
			shift: ["N", "N2"],
			roster: "LDZO ACS",
			sentTo: "Pero Perić",
			status: ["close", "pending"],
		},
		{
			id: "6",
			type: "sent",
			dateCreated: new Date(),
			shift: ["N", "N2"],
			roster: "LDZO ACS",
			sentTo: "Pero Perić",
			status: ["pending", "check-circle"],
		},
	];

	constructor(private sanitizer: DomSanitizer) {}

	getRequests(type: string = "sent"): IRequest[] {
		return this.requests.filter((m) => m.type == type);
	}

	public transformWithArrowIcon(first: string, second: string): SafeHtml {
		return this.sanitizer.bypassSecurityTrustHtml(`
			<span>${first}</span>
			<mat-icon style="vertical-align: middle;">arrow_right_alt</mat-icon>
			<span>${second}</span>
		`);
	}
}
