/** ======= MUI TYPES ======= */
import type { Theme } from '@mui/material';
/** ======= REACT TYPES ======= */
import type { ElementType } from 'react';

/** Defines the configuration options for a project or application, including course details, personal information, and feature flags. */
export type SettingOpts = {
	/** Enable the example sub pages */
	exampleEnable?: boolean;
	/** Enable assignment numbers (this renders an HTML in its place like Doxygen or JavaDoc) */
	assignmentNumbersDisable?: boolean;
	/** Enable tasks numbers (this disables the task endpoint because it just renders an HTML before) */
	assignmentTasksDisable?: boolean;
	/** Disable Lab Numbers (this renders an HTML in its place like Doxygen or JavaDoc) */
	labNumbersDisable?: boolean;
	/** Disable Tasks Numbers (this disables the task endpoint because it just renders an HTML at the lab level) */
	labTasksDisable?: boolean;
	/** The code of the course, for example: CP213 */
	courseCode: string;
	/** The name of the course, for example: Intro to Object-Oriented Programming */
	courseName: string;
	/** The term in which the course took place, example: Fall 2024 */
	term: string;
	/** The light theme for this project */
	light?: Theme;
	/** The dark theme for this project */
	dark?: Theme;
	/** Your name */
	name?: string;
	/** Your username */
	username?: string;
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
};

/** The type of the item */
export type ItemType = 'lab' | 'example' | 'assignment' | 'task';

/** Options for generating a list of items, such as tasks or assignments. */
export interface ItemListOpts {
	/** The type of the item */
	itemType: ItemType;
	/** The count of the item */
	count?: number;
	/** The string identifier for the parent lab or assignment, used when `itemType` is 'task'. */
	taskStr?: string;
	/** Whether the generated link should point to a static HTML file instead of a route. */
	isFile?: boolean;
}

/** Options for configuring a single assignment list item. */
export interface AssignmentItemOpts {
	/** A unique key for the list item, used by React. */
	key: number;
	/** The link/URL for the list item. */
	link: string;
	/** The display string for the item number or name (e.g., '01', 'Task 1'). */
	adds: string;
	/** The type of the item, used for styling and context. */
	type: ItemType;
}

/** Options for configuring a section component. */
export interface SectionOpts {
	/** The title for the section */
	title: string;
	/** The children for the component */
	children: React.ReactNode;
	/** The icon for the section title */
	icon?: ElementType;
}

/** Represents structured data for an example. */
export interface ExampleData {
	/** The title of the example */
	title: string;
	/** The URL of the example */
	url: string;
}

/** Options for configuring a technical item, typically for display. */
export interface TechItemOpts {
	/** The title */
	bolded: string;
	/** The description */
	nonBolded: string;
	/** The icon for the item */
	icon?: ElementType;
}

/** Represents the structured data for a card component. */
export interface CardTypes {
	/** The title of the card */
	title: string;
	/** The description for the card */
	desc: string;
	/** The type of item for the card, used for routing */
	itemType: ItemType;
	/** The icon for the card */
	icon?: ElementType;
}

/** Represents the data structure for a single task within a lab or assignment. */
export interface TaskData {
	/** The name of the task. */
	name: string;
	/** The unique identifier for the task, e.g., 't01'. */
	id: string;
	/** A detailed description of the task requirements. */
	description: string;
	/** List of goals or objectives */
	objectives: string[];
	/** Example output or result as a string */
	sampleOutput: string;
	/** Skills or tech demonstrated, e.g. ["Python", "Multiline Strings"] */
	skills: string[];
}

/**
 * Represents the structured data for a single constant.
 */
export interface ConstantsData {
	/** The name of the constant */
	name: string;
	/** The value of the constant */
	value: string;
	/** The description of the constant */
	description?: string;
}

/** Represents the structured data for a single function. */
export interface FunctionsData {
	/** The name of the function */
	functionName: string;
	/** The signature of the function */
	signature: string;
	/** The description of the function */
	description: string;
}

/** Represents the structured data for an assessment, which could be a lab or an assignment. */
export interface AssessmentDataType {
	/** The name of the lab/assignment */
	name: string;
	/** The count of the lab/assignment */
	id: string;
	/** Array of task data */
	tasks: TaskData[];
	/** Array of functions data */
	functions?: FunctionsData[];
	/** Array of constants data */
	constants?: ConstantsData[];
}

/** Specifies the type of assessment: 'assignment', 'lab', or 'example' */
export type LabsAssignmentOpt = 'assignment' | 'lab' | 'example';

/** Options for configuring labs or assignments. */
export interface LabsAssignmentsOpts {
	/** Type of lab or assignment */
	type: LabsAssignmentOpt;
}

/** Props for the FunctionPage component. */
export interface FunctionPageProps {
	/** Array of constant data objects */
	constants: ConstantsData[];
	/** Array of function data objects */
	functions: FunctionsData[];
	/** Name or identifier of the parent entity */
	parent: string;
}

/** Props for the Header component. */
export interface HeaderProps {
	/** The current color mode, either 'light' or 'dark'. */
	mode: 'light' | 'dark';
	/** A function to toggle the color mode. */
	toggleColorMode: () => void;
}
