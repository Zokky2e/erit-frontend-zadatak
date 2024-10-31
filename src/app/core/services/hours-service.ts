// src/app/services/role.service.ts
import { Injectable } from "@angular/core";
import { IHours, IRequest } from "@models/interfaces";

@Injectable({
	providedIn: "root",
})
export class HoursService {
	private hours: IHours[] = [
		{
			id: "1",
			licenseUnit: "LDZO ACS",
			lastWork: new Date(),
			period: "02.09. - 01.12.",
			hours: "27:32",
			role: "ACC",
		},
		{
			id: "2",
			licenseUnit: "LDZO ACS",
			lastWork: new Date(),
			period: "02.09. - 01.12.",
			hours: "15:32",
			role: "TMA ZAG",
		},
		{
			id: "3",
			licenseUnit: "LDZO ACS",
			lastWork: new Date(),
			period: "02.09. - 01.12.",
			hours: "15:32",
			role: "TMA ZAG",
		},
	];

	constructor() {}

	getHours(): IHours[] {
		return this.hours;
	}
}
