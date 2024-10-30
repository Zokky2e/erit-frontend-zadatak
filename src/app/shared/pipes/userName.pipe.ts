import { Pipe, PipeTransform } from "@angular/core";
import { IUser } from "@models/interfaces";
@Pipe({
	name: "fullName",
})
export class FullNamePipe implements PipeTransform {
	transform(value: IUser): string {
		var fullName = ``;
		if (value.firstName) {
			fullName += value.firstName;
		}
		if (value.lastName) {
			if (value.lastName) {
				fullName += fullName
					? ` ${value.lastName}`
					: `${value.lastName}`;
			}
		}
		return fullName;
	}
}
