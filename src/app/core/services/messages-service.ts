// src/app/services/role.service.ts
import { Injectable } from "@angular/core";
import { IMessage } from "@models/interfaces";

@Injectable({
	providedIn: "root",
})
export class MessagesService {
	private messages: IMessage[] = [
		{
			id: "1",
			type: "recieved",
			dateCreated: new Date(),
			title: "ACC ROMA",
			description: "Minimum rest time",
			isPinned: false,
		},
		{
			id: "2",
			type: "sent",
			dateCreated: new Date(),
			title: "ACC ROMA",
			description: "Minimum rest time",
			isPinned: false,
		},
		{
			id: "3",
			type: "sent",
			dateCreated: new Date(),
			title: "ACC ROMA",
			description: "Minimum rest time",
			isPinned: false,
		},
		{
			id: "4",
			type: "recieved",
			dateCreated: new Date(),
			title: "ACC ROMA",
			description: "Minimum rest time",
			isPinned: true,
		},
		{
			id: "5",
			type: "sent",
			dateCreated: new Date(),
			title: "ACC ROMA",
			description: "Minimum rest time",
			isPinned: true,
		},
		{
			id: "6",
			type: "sent",
			dateCreated: new Date(),
			title: "ACC ROMA",
			description: "Minimum rest time",
			isPinned: true,
		},
	];

	constructor() {}

	getMessages(pinned: boolean = false): IMessage[] {
		return this.messages.filter((m) => m.isPinned == pinned);
	}

	updateMessage(messageId: string, updatedMessage: IMessage): void {
		const index = this.messages.findIndex((m) => m.id === messageId);
		if (index !== -1) {
			this.messages[index] = {
				...this.messages[index],
				...updatedMessage,
			};
		}
	}
}
