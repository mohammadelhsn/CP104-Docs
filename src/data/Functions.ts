import type { LabsAssignmentOpt } from './Data';
import Settings from './Settings';

function Capitalize(str: string) {
	return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

export function getItemType(str: string, capitalize?: boolean) {
	if (capitalize != true) {
		return str === 'assignment'
			? 'assignments'
			: str === 'example'
			? 'examples'
			: 'labs';
	} else {
		const str1 =
			str === 'assignment'
				? 'assignments'
				: str === 'example'
				? 'examples'
				: 'labs';
		return Capitalize(str1);
	}
}

export function enableFile(str: LabsAssignmentOpt) {
	if (str == 'assignment') {
		if (
			Settings.assignmentNumbersDisable == true ||
			Settings.assignmentTasksDisable == true
		) {
			return true;
		}
	} else if (str == 'example') {
		if (Settings.exampleEnable == true) {
			return true;
		}
	} else if (
		(str == 'lab' && Settings.labNumbersDisable == true) ||
		Settings.labTasksDisable == true
	) {
		return true;
	}
	return false;
}
