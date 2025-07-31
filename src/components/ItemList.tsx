import { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ListItem from './ListItem';

import {
	type TaskData,
	type ItemListOpts,
	type AssessmentDataType,
	type ExampleData,
} from '../data/Data';

import Settings from '../data/Settings';
import Loading from './Loading';

const ItemList = (opts: ItemListOpts) => {
	const baseUrl =
		import.meta.env.MODE === 'production'
			? `/${Settings.courseCode}/${opts.isFile ? '' : '#/'}`
			: `/${opts.isFile ? '' : '#/'}`;

	const [tasks, setTasks] = useState<TaskData[]>([]);
	const [length, setLength] = useState<number>(0);
	const [exampleData, setExampleData] = useState<ExampleData[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		(async () => {
			setLoading(true);
			if (opts.itemType === 'task' && opts.taskStr) {
				const isLab = opts.taskStr.includes('elha7950_l');
				const res = isLab
					? await Settings.api.getLab(opts.taskStr.slice(-2))
					: await Settings.api.getAssignment(opts.taskStr.slice(-2));
				if (res?.success && res.data && !Array.isArray(res.data)) {
					const data = res.data as AssessmentDataType;
					let taskList = [...data.tasks];
					if (
						data.functions &&
						data.functions.length > 0 &&
						!taskList.find((t) => t.id === 'functions')
					) {
						taskList.push({
							id: 'functions',
							name: 'Functions & Constants',
							description: '',
							objectives: [],
							sampleOutput: '',
							skills: [],
						});
					}
					setTasks(taskList);
					setLength(taskList.length);
				}
			} else if (opts.itemType === 'example') {
				const res = await Settings.api.getExamples();
				if (res?.success && Array.isArray(res.data)) {
					setExampleData(res.data);
					setLength(res.data.length);
					console.log(res);
				}
			} else {
				const pageData = await Settings.api.getPageData();
				if (pageData?.success && Array.isArray(pageData.data)) {
					if (opts.itemType === 'assignment') {
						setLength(pageData.data[0].numberOfEntries);
					} else if (opts.itemType === 'lab') {
						setLength(pageData.data[1].numberOfEntries);
					}
				}
			}
			setLoading(false);
		})();
	}, [opts]);
	if (loading) {
		return (
			<Loading />
		);
	}
	if (opts.itemType === 'task' && tasks.length === 0) {
		return (
			<Container maxWidth="md" sx={{ mt: 8, textAlign: 'center', flexGrow: '1' }}>
				<SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
				<Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
					Oops!
				</Typography>
				<Typography variant="h6" gutterBottom color="text.secondary">
					Documentation hasn't been developed for this assignment yet!
				</Typography>
			</Container>
		);
	}

	return (
		<Grid container spacing={3} sx={{ mt: 2 }}>
			{Array.from({ length }, (_, i) => {
				const num = i + 1;
				const padded = String(num).padStart(2, '0');
				let link = '';
				let adds = `${num}`;
				if (opts.itemType === 'assignment') {
					link = `${baseUrl}assignments/elha7950_a${padded}/${opts.isFile ? 'index.html' : ''}`;
				} else if (opts.itemType === 'lab') {
					link = `${baseUrl}labs/elha7950_l${padded}/${opts.isFile ? 'index.html' : ''}`;
				} else if (opts.itemType === 'task') {
					const type = opts.taskStr?.includes('elha7950_l') ? 'labs' : 'assignments';
					const task = tasks[i];
					if (!task) return null;
					link = `${baseUrl}${type}/${opts.taskStr}/${task.id}/${opts.isFile ? 'index.html' : ''}`;
					adds = task.name;
				} else {
					const item = exampleData[i];
					if (!item) return null;
					link = `${baseUrl}examples${item.url}${opts.isFile ? 'index.html' : ''}`;
					adds = item.title;
				}
				return (
					<Grid size={{ xs: 12, sm: 6, md: 4, }}>
						<ListItem key={num} adds={adds} link={link} type={opts.itemType} />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default ItemList;
