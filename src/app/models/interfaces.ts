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

export interface IRequest {
	id: string;
	type: string;
	dateCreated: Date;
	shift: string[];
	roster: string;
	sentTo: string;
	status?: string[];
}

export interface IHours {
	id: string;
	licenseUnit: string;
	role: string;
	lastWork: Date;
	period: string; //TODO create logic with startDate endDate
	hours: string; //!should this be a timestamp or timerange?
}
