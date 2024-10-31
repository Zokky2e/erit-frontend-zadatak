import { Component, Input } from "@angular/core";
import { IMessage } from "@models/interfaces";

@Component({
	selector: "message-list-item",
	templateUrl: "./message-list-item.component.html",
	styleUrl: "../dashboard.component.scss",
})
export class MessageListItemComponent {
	@Input() message: IMessage | undefined;
}
