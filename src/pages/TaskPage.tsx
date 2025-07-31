import { useParams, useNavigate } from 'react-router-dom';
import {
	Box, Typography, Paper, Chip, List, ListItem,
	ListItemText, Divider, Container, IconButton
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import FunctionsPage from './FunctionsPage';
import SectionWrapper from '../components/Section';

import DescriptionIcon from '@mui/icons-material/Description';
import OutputIcon from '@mui/icons-material/Output';
import ChecklistIcon from '@mui/icons-material/Checklist';
import BuildIcon from '@mui/icons-material/Build';

import { useEffect, useState } from 'react';
import { type LabsAssignmentsOpts } from '../data/Data';
import { dividerStyle, sampleOutput, textStyle } from '../data/Styles';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import type { AssessmentDataType, TaskData } from '@mohammadelhsn/portfolio-api-wrapper/dist/interfaces/Interfaces';
import Settings from '../data/Settings';
import Loading from '../components/Loading';

const TaskDisplay = (opts: LabsAssignmentsOpts) => {
	const { num, task } = useParams<{ num: string; task: string; }>();
	const navigate = useNavigate();

	const [taskData, setTaskData] = useState<TaskData | null>(null);
	const [parentSection, setParentSection] = useState<AssessmentDataType | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTask = async () => {
			if (!num || !task) return;

			const shortNum = num.slice(-2);
			try {
				const res = opts.type === 'assignment'
					? await Settings.api.getAssignment(shortNum.slice(-2), task.slice(-2))
					: await Settings.api.getLab(shortNum.slice(-2), task.slice(-2));

				if (res?.data) {
					setTaskData(res.data as TaskData);
				}

				// Also fetch the full parent section (lab or assignment) to use later
				const sectionRes = opts.type === 'assignment'
					? await Settings.api.getAssignment(shortNum.slice(-2))
					: await Settings.api.getLab(shortNum.slice(-2));

				if (sectionRes?.data) {
					setParentSection(sectionRes.data as AssessmentDataType);
				}
			} catch (e) {
				console.error('Failed to fetch task:', e);
			} finally {
				setLoading(false);
			}
		};

		fetchTask();
	}, [num, task]);

	// Handle loading or error
	if (loading) {
		return (
			<Loading />
		);
	}

	if (parentSection?.functions && task === 'functions') {
		return (
			<FunctionsPage
				functions={parentSection.functions}
				constants={parentSection.constants || []}
				parent={num || ''}
			/>
		);
	}

	if (!taskData || !parentSection) {
		return (
			<Container maxWidth="md" sx={{ mt: 8, textAlign: 'center', flexGrow: 1 }}>
				<SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
				<Typography variant="h5">❌ Task not found</Typography>
			</Container>
		);
	}

	return (
		<Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 }, py: { xs: 4, sm: 6 } }}>
			<Box sx={{ mb: 2 }}>
				<IconButton onClick={() => navigate(-1)} aria-label="Go back">
					<ArrowBackIcon />
				</IconButton>
			</Box>
			<Box sx={{ mb: 3 }}>
				<Typography variant="h2" sx={textStyle}>
					{taskData.name}
				</Typography>
				<Typography variant="h5" color="text.secondary" sx={{ fontStyle: 'italic' }}>
					{opts.type === 'assignment' ? `Assignment: ${parentSection.id}` : `Lab: ${parentSection.id}`}
				</Typography>
			</Box>
			<Divider sx={dividerStyle} />

			<SectionWrapper title="Description" icon={DescriptionIcon}>
				<Paper elevation={3} sx={{ p: 2, mb: 3 }}>
					<Typography>{taskData.description}</Typography>
				</Paper>
			</SectionWrapper>

			<SectionWrapper title="Objectives" icon={ChecklistIcon}>
				<List>
					{taskData.objectives.map((obj, index) => (
						<ListItem key={index} component={Paper} elevation={3} sx={{ mb: 1, borderRadius: 2, px: 2, py: 1, boxShadow: 1, gap: 1.5, alignItems: 'flex-start' }}>
							<ListItemText primary={obj} />
						</ListItem>
					))}
				</List>
			</SectionWrapper>

			<SectionWrapper title="Sample Output" icon={OutputIcon}>
				<Paper elevation={3} sx={sampleOutput}>
					{taskData.sampleOutput}
				</Paper>
			</SectionWrapper>

			<SectionWrapper title="Skills Demonstrated" icon={BuildIcon}>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
					{taskData.skills.map((skill, index) => (
						<Chip key={index} label={skill} variant="outlined" />
					))}
				</Box>
			</SectionWrapper>
		</Container>
	);
};

export default TaskDisplay;
