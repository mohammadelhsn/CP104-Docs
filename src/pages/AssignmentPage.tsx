/** ======= REACT & REACT ROUTER ======= */
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

/** ======= CUSTOM COMPONENTS ======= */
import ItemList from '../components/ItemList';
import SectionWrapper from '../components/Section';
import Loading from '../components/Loading';

/** ======= ICONS ======= */
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ListIcon from '@mui/icons-material/List';

/** ======= DATA & STYLES ======= */
import { containerStyles, iconStyles, textStyle } from '../data/Styles';
import type { LabsAssignmentsOpts } from '../data/Data';
import type { AssessmentDataType } from '@mohammadelhsn/portfolio-api-wrapper/dist/interfaces/Interfaces';
import Settings from '../data/Settings';

// Lab/Assignment page for individual 
const LabAssignmentPage = (opts: LabsAssignmentsOpts) => {
	const { num } = useParams<{ num: string; }>();
	const navigate = useNavigate();
	const [dataSource, setDataSource] = useState<AssessmentDataType>();
	const [loading, setLoading] = useState<boolean>(true);
	useEffect(() => {
		const fetchData = async () => {
			if (!num) return;
			try {
				const assessmentNum = num.slice(-2);
				// TODO: Find a better way to do this
				if (opts.type === 'assignment') {
					const res = await Settings.api.getAssignment(assessmentNum);
					if (res?.data) {
						setDataSource(res.data as AssessmentDataType);
					}
				} else {
					const res = await Settings.api.getLab(assessmentNum);
					if (res?.data) {
						setDataSource(res.data as AssessmentDataType);
					}
				}
			} catch (err) {
				// TODO: Bring over a global snackbar
				console.error('Failed to fetch data:', err);
			} finally {
				setLoading(false);
			}
		};

		if (num) fetchData();
	}, [num, opts.type]);
	if (loading) return (<Loading />);
	if (!dataSource) {
		return (
			<Container maxWidth="md" sx={{ mt: 8, textAlign: 'center', flexGrow: '1' }}>
				<SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
				<Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
					Oops!
				</Typography>
				<Typography variant="h6" gutterBottom color='textSecondary'>
					Looks like this {opts.type === 'assignment' ? 'assignment' : 'lab'} doesn’t exist.
				</Typography>
				<Typography variant="body1" color='textSecondary'>
					Maybe you mistyped the URL? Or this one’s lost in space 🪐
				</Typography>
			</Container>
		);
	}
	return (
		<Container maxWidth="lg" sx={containerStyles}>
			{/** // TODO: REPLACE WITH COMPONENT, ALSO BE MORE INTENTIONAL WITH BACK BUTTON */}
			<Box mb={2}>
				<IconButton onClick={() => navigate(-1)} aria-label="Go back">
					<ArrowBackIcon />
				</IconButton>
			</Box>
			{/** // TODO: REPLACE WITH COMPONENT */}
			<Box>
				<Typography variant="h2" sx={textStyle}>
					<MenuBookIcon fontSize='inherit' sx={iconStyles} /> {dataSource.name}
				</Typography>
				<Typography variant="h5" sx={{ fontStyle: 'italic' }}>
					Here are the documented {dataSource.name}.
				</Typography>
				<Divider sx={{ my: 4 }} />
			</Box>
			<Box>
				<SectionWrapper title="Tasks" icon={ListIcon}>
					<ItemList
						itemType="task"
						taskStr={num || ''}
						count={dataSource.tasks.length}
					/>
				</SectionWrapper>
			</Box>
		</Container >
	);
};

export default LabAssignmentPage;