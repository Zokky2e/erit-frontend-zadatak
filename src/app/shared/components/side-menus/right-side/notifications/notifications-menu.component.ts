import { Component } from "@angular/core";
import { NotificationService } from "@core/services/notification-service";
import { IRightSideMenuItem } from "@shared/components";

@Component({
	selector: "notifications-menu",
	templateUrl: "./notifications-menu.component.html",
	styleUrl: "../right-side-menu.component.scss",
})
export class NotificationsMenuComponent {
	allNotificationsItems: IRightSideMenuItem[] = [];
	todayNotifications: IRightSideMenuItem[] = [];
	oldNotifications: IRightSideMenuItem[] = [];

	constructor(private notificationService: NotificationService) {}

	ngOnInit(): void {
		this.allNotificationsItems = this.notificationService
			.getNotifications()
			.map((notif) => {
				var itemIcon = this.getItemIconFromNotificationType(
					notif.notificationType
				);
				var item: IRightSideMenuItem = {
					icon: itemIcon,
					title: notif.title,
					description: notif.description,
					dateCreated: notif.dateCreated,
					isRead: notif.isRead,
				};
				return item;
			});
		this.todayNotifications = this.allNotificationsItems.filter((notif) => {
			const notifDateString = notif
				.dateCreated!.toISOString()
				.split("T")[0];
			const todayDateString = new Date().toISOString().split("T")[0];
			return notifDateString === todayDateString;
		});
		this.oldNotifications = this.allNotificationsItems.filter(
			(notif) => !this.todayNotifications.includes(notif)
		);
	}

	getItemIconFromNotificationType(notificationType: string) {
		var icon = "";
		switch (notificationType) {
			case "message":
				icon = "chat";
				break;
			case "hours":
				icon = "schedule";
				break;
			case "rating":
				icon = "verified";
				break;
			default:
				icon = "";
				break;
		}
		return icon;
	}
}
