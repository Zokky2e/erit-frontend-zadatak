export interface IUser {
	id: string;
	firstName?: string;
	lastName?: string;
	age?: number;
	role?: string;
}

export interface IRole {
	id: string;
	name?: string;
}

export interface INotification {
	id: string;
	title: string;
	description?: string;
	notificationType: string;
	dateCreated: Date;
	isRead?: boolean;
}

export interface INotificationType {
	id: string;
	type: string;
}

export interface IWarning {
	id: string;
	type: string;
	dateCreated: Date;
	description: string;
}

export interface IMessage {
	id: string;
	type: string;
	dateCreated: Date;
	title: string;
	description: string;
	isPinned?: boolean;
}
