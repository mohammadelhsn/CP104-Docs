import type { Theme } from '@mui/material';
import { type ElementType } from 'react';

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

/**
 *
 */
export const baseURL = 'https://mohammadelhsn.github.io/';

/**
 *
 */
export interface pageData {
	title: string;
	description: string;
	numberOfEntries: number;
}

export type ItemType = 'lab' | 'example' | 'assignment' | 'task';
export interface ItemListOpts {
	itemType: ItemType;
	count?: number;
	taskStr?: string;
	isFile?: boolean;
}

export interface AssignmentItemOpts {
	key: number;
	link: string;
	adds: string;
	type: ItemType;
}

export interface SectionOpts {
	title: string;
	children: React.ReactNode;
	icon?: ElementType;
}

export interface TopicOpts {
	eventKey: string;
	title: string;
	items: string[];
	icon?: ElementType;
}

export interface ExampleData {
	title: string;
	url: string;
}

export interface TechItemOpts {
	bolded: string;
	nonBolded: string;
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
	objectives: string[]; // list of goals or objectives
	sampleOutput: string; // example output or result, as a string
	skills: string[]; // skills or tech demonstrated, e.g. ["Python", "Multiline Strings"]
}

export interface ConstantsData {
	name: string;
	value: string;
	description?: string;
}
export interface FunctionsData {
	functionName: string;
	signature: string;
	description: string;
}

export interface FunctionPageProps {
	constants: ConstantsData[];
	functions: FunctionsData[];
	parent: string;
}
export interface AssessmentDataType {
	name: string;
	id: string;
	tasks: TaskData[];
	functions?: FunctionsData[];
	constants?: ConstantsData[];
}

export interface FunctionsPageProps {
	data: FunctionsData;
}

export type LabsAssignmentOpt = 'assignment' | 'lab' | 'example';
export interface LabsAssignmentsOpts {
	type: LabsAssignmentOpt;
}
