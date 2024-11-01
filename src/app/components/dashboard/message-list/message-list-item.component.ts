import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IMessage } from "@models/interfaces";

@Component({
	selector: "message-list-item",
	templateUrl: "./message-list-item.component.html",
	styleUrl: "../dashboard.component.scss",
})
export class MessageListItemComponent {
	@Input() message: IMessage | undefined;
	@Output() changePinState: EventEmitter<IMessage> =
		new EventEmitter<IMessage>();

	onChangePingStateClick() {
		this.message!.isPinned = !this.message?.isPinned;
		this.changePinState.emit(this.message);
	}
}
