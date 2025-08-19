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
 * Converts an item type string to its plural form, with an option to capitalize it.
 *
 * @param {string} str - The singular item type (e.g., 'assignment', 'lab').
 * @param {boolean} [cap=false] - Whether to capitalize the output string.
 * @returns {string} The plural and optionally capitalized version of the item type.
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
 * Checks if a given assessment type should link to a static HTML file instead of a route.
 * This is based on the global settings which can disable dynamic pages for labs or assignments.
 *
 * @param {LabsAssignmentOpt} str - The type of assessment ('assignment', 'lab', or 'example').
 * @returns {boolean} `true` if the link should be to a static file, `false` otherwise.
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
