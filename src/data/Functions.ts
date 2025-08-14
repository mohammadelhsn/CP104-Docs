import type { LabsAssignmentOpt } from './Data';
import Settings from './Settings';

/**
 * Returns the capitalized version of the string.
 *
 * @param {string} str - The string to be capitalized.
 * @return {string} The capitalized version of the string.
 * @see https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
 */
export function capitalize(str: string) {
	return String(str).charAt(0).toUpperCase() + String(str).slice(1);
}

/**
 *
 * @param str
 * @param cap
 * @returns
 */
export function getItemType(str: string, cap?: boolean) {
	if (cap != true) {
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
		return capitalize(str1);
	}
}

/**
 *
 * @param str
 * @returns
 */
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
