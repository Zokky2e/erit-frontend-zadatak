// src/app/services/role.service.ts
import { Injectable } from "@angular/core";
import { IWarning } from "@models/interfaces";

@Injectable({
	providedIn: "root",
})
export class WarningService {
	private warnings: IWarning[] = [
		{
			id: "1",
			type: "success",
			dateCreated: new Date(),
			description: "Minimum rest time",
		},
		{
			id: "2",
			type: "warning",
			dateCreated: new Date(),
			description: "Minimum hours",
		},
		{
			id: "3",
			type: "warning",
			dateCreated: new Date(),
			description: "Check time",
		},
		{
			id: "4",
			type: "success",
			dateCreated: new Date(),
			description: "Check time",
		},
	];

	constructor() {}

	getWarnings(): IWarning[] {
		return this.warnings;
	}
}
