// src/app/services/user.service.ts
import { Injectable } from "@angular/core";
import { IUser } from "@models/interfaces";

@Injectable({
	providedIn: "root", // Provides the service globally
})
export class UserService {
	private users: IUser[] = [
		{
			id: "1",
			firstName: "Pero",
			lastName: "Nikić",
			age: 28,
			role: "Admin",
		},
		{
			id: "2",
			firstName: "Mario",
			lastName: "Klarić",
			age: 35,
			role: "User",
		},
	];
	private currentUser: IUser = {
		id: "1",
		firstName: "Pero",
		lastName: "Nikić",
		age: 28,
		role: "Admin",
	};

	constructor() {}

	getUsers(): IUser[] {
		return this.users;
	}

	getCurrentUser(): IUser {
		return this.currentUser;
	}

	addUser(user: IUser): void {
		this.users.push(user);
	}

	updateUser(userId: string, updatedUser: IUser): void {
		const index = this.users.findIndex((u) => u.id === userId);
		if (index !== -1) {
			this.users[index] = { ...this.users[index], ...updatedUser };
		}
		if (this.currentUser.id === userId) {
			this.currentUser = updatedUser;
		}
	}
}
