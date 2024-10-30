// src/app/services/role.service.ts
import { Injectable } from "@angular/core";
import { IRole } from "@models/interfaces";

@Injectable({
	providedIn: "root",
})
export class RoleService {
	private roles: IRole[] = [
		{ id: "1", name: "User" },
		{ id: "2", name: "Supervisor" },
		{ id: "3", name: "Manager" },
		{ id: "4", name: "Admin" },
		{ id: "5", name: "Super admin" },
	];

	constructor() {}

	getRoles(): IRole[] {
		return this.roles;
	}
}
