// src/app/services/role.service.ts
import { Injectable } from "@angular/core";
import { INotification } from "@models/interfaces";

@Injectable({
	providedIn: "root",
})
export class NotificationService {
	private notifications: INotification[] = [
		{
			id: "1",
			title: "Important message",
			description: "Tomislav Horvat sent a message",
			notificationType: "message",
			dateCreated: new Date(),
		},
		{
			id: "1",
			title: "Changes in hours",
			notificationType: "hours",
			dateCreated: new Date(),
		},
		{
			id: "1",
			title: "Important message",
			description: "Marko Markić sent a message",
			notificationType: "message",
			dateCreated: new Date(),
			isRead: true,
		},
		{
			id: "1",
			title: "Good to know message",
			description: "Marko Markić sent a message",
			notificationType: "message",
			dateCreated: new Date(new Date().setDate(-1)),
			isRead: true,
		},
		{
			id: "1",
			title: "Shift change - Accepted",
			notificationType: "hours",
			dateCreated: new Date(new Date().setDate(-1)),
			isRead: true,
		},
		{
			id: "1",
			title: "Rating expires soon",
			notificationType: "rating",
			dateCreated: new Date(new Date().setDate(-1)),
			isRead: true,
		},
	];

	constructor() {}

	getNotifications(): INotification[] {
		return this.notifications;
	}
}
