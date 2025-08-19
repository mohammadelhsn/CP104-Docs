import type { Theme } from '@mui/material';
import { lightTheme, darkTheme } from './Theme';
import type { SettingOpts } from './Data';
import API from '@mohammadelhsn/portfolio-api-wrapper';

export class SettingsClass {
	/** Enable the example sub pages */
	exampleEnable: boolean;
	/** Enable assignment numbers (this renders an HTML in its place like Doxygen or JavaDoc) */
	assignmentNumbersDisable: boolean;
	/** Enable tasks numbers (this disables the task endpoint because it just renders an HTML before) */
	assignmentTasksDisable: boolean;
	/** Disable Lab Numbers (this renders an HTML in its place like Doxygen or JavaDoc) */
	labNumbersDisable: boolean;
	/** Disable Tasks Numbers (this disables the task endpoint because it just renders an HTML at the lab level) */
	labTasksDisable: boolean;
	/** The code of the course, for example: CP213 */
	courseCode: string;
	/** The name of the course, for example: Intro to Object-Oriented Programming */
	courseName: string;
	/** The term in which the course took place, example: Fall 2024 */
	term: string;
	/** The light theme for this project */
	light: Theme;
	/** The dark theme for this project */
	dark: Theme;
	/** Your name */
	name: string;
	/** Your username */
	username: string;
	/** Your GitHub handle */
	github_handle?: string;
	/** Your GitHub URL */
	github?: string;
	/** Your email */
	email?: string;
	/** Your LinkedIn URL */
	linkedIn?: string;
	/** This should be set for HTML files, an example is: elha7950_l */
	baseLab?: string;
	/** This should be set for HTML files, an example is: elha7950_a */
	baseAssignment?: string;
	/** An instance of my own API for large static data */
	api = new API('CP104');
	constructor({
		exampleEnable = false,
		assignmentNumbersDisable = false,
		assignmentTasksDisable = false,
		labNumbersDisable = false,
		labTasksDisable = false,
		courseCode,
		courseName,
		term,
		light = lightTheme,
		dark = darkTheme,
		name = 'Mohammad El-Hassan',
		username = 'mohammadelhsn',
		github_handle,
		github,
		email,
		linkedIn,
		baseLab = 'elha7950_l',
		baseAssignment = 'elha7950_a',
	}: SettingOpts) {
		this.exampleEnable = exampleEnable;
		this.assignmentNumbersDisable = assignmentNumbersDisable;
		this.assignmentTasksDisable = assignmentTasksDisable;
		this.labNumbersDisable = labNumbersDisable;
		this.labTasksDisable = labTasksDisable;
		this.courseCode = courseCode;
		this.courseName = `${this.courseCode} - ${courseName}`;
		this.term = term;
		this.light = light;
		this.dark = dark;
		this.name = name;
		this.username = username;
		this.github_handle = github_handle ? github_handle : `@${this.username}`;
		this.github = github ? github : `https://github.com/${this.username}`;
		this.email = email ? email : `${this.username}@gmail.com`;
		this.linkedIn = linkedIn
			? linkedIn
			: `https://www.linkedin.com/in/${this.username}`;
		this.baseLab = baseLab;
		this.baseAssignment = baseAssignment;
	}
	updateExample(status: boolean) {
		this.exampleEnable = status;
		return this;
	}
	updateAssignNumbers(status: boolean) {
		this.assignmentNumbersDisable = status;
		return this;
	}
	updateAssignTasks(status: boolean) {
		this.assignmentTasksDisable = status;
		return this;
	}
	updateLabNumber(status: boolean) {
		this.labNumbersDisable = status;
		return this;
	}
	updateLabTasks(status: boolean) {
		this.labTasksDisable = status;
		return this;
	}
	updateCourseCode(code: string) {
		this.courseCode = code;
		return this;
	}
	updateCourseName(code: string) {
		this.courseName = `${this.courseCode} - ${code}`;
		return this;
	}
	updateTerm(term: string) {
		this.term = term;
		return this;
	}
}

const Settings = new SettingsClass({
	courseCode: 'CP104',
	courseName: 'Introduction to Programming with Python',
	term: 'Fall 2023',
});

export default Settings;
