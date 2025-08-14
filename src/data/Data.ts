/** ======= MUI TYPES ======= */
import type { Theme } from '@mui/material';
/** ======= REACT TYPES ======= */
import type { ElementType } from 'react';

export type SettingOpts = {
	exampleEnable?: boolean;
	assignmentNumbersDisable?: boolean;
	assignmentTasksDisable?: boolean;
	labNumbersDisable?: boolean;
	labTasksDisable?: boolean;
	courseCode: string;
	courseName: string;
	term: string;
	light?: Theme;
	dark?: Theme;
	name?: string;
	username?: string;
	github_handle?: string;
	github?: string;
	email?: string;
	linkedIn?: string;
	baseLab?: string;
	baseAssignment?: string;
};

/** The type of the item */
type ItemType = 'lab' | 'example' | 'assignment' | 'task';
export interface ItemListOpts {
	/** The type of the item */
	itemType: ItemType;
	/** The count of the item */
	count?: number;
	/**  */
	taskStr?: string;
	/**  */
	isFile?: boolean;
}

export interface AssignmentItemOpts {
	/**  */
	key: number;
	/** */
	link: string;
	/** */
	adds: string;
	/** */
	type: ItemType;
}

export interface SectionOpts {
	/** The title for the section */
	title: string;
	/** The children for the component */
	children: React.ReactNode;
	/** The icon for the section title */
	icon?: ElementType;
}

export interface ExampleData {
	/** The title of the example */
	title: string;
	/** The URL of the example */
	url: string;
}

export interface TechItemOpts {
	/** The title */
	bolded: string;
	/** The description */
	nonBolded: string;
	/** The icon for the item */
	icon?: ElementType;
}

export interface CardTypes {
	title: string;
	desc: string;
	itemType: ItemType;
	icon?: ElementType;
}

export interface TaskData {
	name: string;
	id: string; // id: t{num}
	description: string;
	/** List of goals or objectives */
	objectives: string[];
	/** Example output or result as a string */
	sampleOutput: string;
	/** Skills or tech demonstrated, e.g. ["Python", "Multiline Strings"] */
	skills: string[];
}

interface ConstantsData {
	/** The name of the constant */
	name: string;
	/** The value of the constant */
	value: string;
	/** The description of the constant */
	description?: string;
}
interface FunctionsData {
	/** The name of the function */
	functionName: string;
	/** The signature of the function */
	signature: string;
	/** The description of the function */
	description: string;
}

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

export type LabsAssignmentOpt = 'assignment' | 'lab' | 'example';
export interface LabsAssignmentsOpts {
	type: LabsAssignmentOpt;
}

export interface FunctionPageProps {
	constants: ConstantsData[];
	functions: FunctionsData[];
	parent: string;
}

export interface HeaderProps {
	mode: 'light' | 'dark';
	toggleColorMode: () => void;
}
