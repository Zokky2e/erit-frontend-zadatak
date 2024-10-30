import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RoleService } from "@core/services/role-service";
import { IRole, IUser } from "@models/interfaces";

@Component({
	selector: "user-info-bar",
	templateUrl: "./user-info-bar.component.html",
	styleUrl: "./nav-bar.component.scss",
})
export class UserInfoBarComponent {
	@Input() public user: IUser = { id: "" };
	@Output() public onUserRoleChange: EventEmitter<IUser> =
		new EventEmitter<IUser>();
	public roles: IRole[] = [];
	public selectedRole: IRole | undefined;
	public isDrawerOpen: boolean = false;

	constructor(private roleService: RoleService) {}

	ngOnInit(): void {
		this.roles = this.roleService.getRoles();
		this.getSelectedRole();
	}

	onRoleClick(role: IRole) {
		this.user.role = role.name;
		this.getSelectedRole();
		this.onUserRoleChange.emit(this.user);
	}

	getSelectedRole() {
		this.selectedRole = this.roles.find((r) => r.name == this.user.role);
	}

	onUserInfoBarClick() {
		this.isDrawerOpen = !this.isDrawerOpen;
	}
}
