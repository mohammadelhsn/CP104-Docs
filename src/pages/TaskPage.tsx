/** ======= REACT & REACT ROUTER ======= */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';

/** ======= MUI ICONS ======= */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DescriptionIcon from '@mui/icons-material/Description';
import OutputIcon from '@mui/icons-material/Output';
import ChecklistIcon from '@mui/icons-material/Checklist';
import BuildIcon from '@mui/icons-material/Build';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

/** ======= CUSTOM COMPONENTS ======= */
import FunctionsPage from './FunctionsPage';
import SectionWrapper from '../components/Section';
import Loading from '../components/Loading';
import Settings from '../data/Settings';

/** ======= TYPES & STYLES */
import { type LabsAssignmentsOpts } from '../data/Data';
import { containerStyles, dividerStyle, sampleOutput, textStyle } from '../data/Styles';
import type { AssessmentDataType, TaskData } from '@mohammadelhsn/portfolio-api-wrapper/dist/interfaces/Interfaces';

/** Task Display Page */
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
			const shortTask = task.slice(-2);
			try {
				const res = opts.type === 'assignment'
					? await Settings.api.getAssignment(shortNum, shortTask)
					: await Settings.api.getLab(shortNum, shortTask);

				if (res?.data) {
					setTaskData(res.data as TaskData);
				} else {
					setTaskData(null);
					return;
				}

				// Also fetch the full parent section (lab or assignment) to use later
				const sectionRes = opts.type === 'assignment'
					? await Settings.api.getAssignment(shortNum)
					: await Settings.api.getLab(shortNum);

				if (sectionRes?.data) {
					setParentSection(sectionRes.data as AssessmentDataType);
				}
				else {
					setParentSection(null);
				}
			} catch (e) {
				console.error('Failed to fetch task:', e);
			} finally {
				setLoading(false);
			}
		};

		fetchTask();
	}, [num, task, opts.type]);

	// Handle loading or error
	if (loading) return (<Loading />);
	// TODO: MOVE THIS TO ITS OWN COMP
	if (!taskData || !parentSection) {
		return (
			<Container maxWidth="md" sx={{ mt: 8, textAlign: 'center', flexGrow: 1 }}>
				<SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
				<Typography variant="h5">❌ Task not found</Typography>
			</Container>
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

	return (
		<Container maxWidth="lg" sx={containerStyles}>
			{/** // TODO MOVE THIS TO ITS OWN COMPONENT */}
			<Box mb={2}>
				<IconButton onClick={() => navigate(-1)} aria-label="Go back">
					<ArrowBackIcon />
				</IconButton>
			</Box>
			{/** // TODO MOVE THIS TO ITS OWN COMPONENT */}
			<Box mb={3}>
				<Typography variant="h2" sx={textStyle}>
					{taskData.name}
				</Typography>
				<Typography variant="h5" color='textSecondary' sx={{ fontStyle: 'italic' }}>
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
				<Box display='flex' flexWrap='wrap' gap={1}>
					{taskData.skills.map((skill, index) => (
						<Chip key={index} label={skill} variant="outlined" />
					))}
				</Box>
			</SectionWrapper>
		</Container>
	);
};

export default TaskDisplay;
