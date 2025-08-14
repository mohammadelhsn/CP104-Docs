/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

/** ======= CUSTOM COMPONENTS ======= */
import SectionWrapper from '../components/Section';
import TopicsAccordion from '../components/Topic';
import TechList from '../components/TechList';
import CardLinks from '../components/CardLinks';

/** ======= ICONS ======= */
import ArticleIcon from '@mui/icons-material/Article';
import TopicIcon from '@mui/icons-material/Topic';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ComputerIcon from '@mui/icons-material/Computer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BiotechIcon from '@mui/icons-material/Biotech';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from '@mui/icons-material/GitHub';
import DataObjectIcon from '@mui/icons-material/DataObject';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

/** ======= STYLE & SETTINGS ======= */
import Settings from '../data/Settings';
import { containerStyles, iconStyles, textStyle } from '../data/Styles';

/** HOME PAGE FOR THIS REPO */
const CP104HomePage = () => {
	return (
		<Container maxWidth="lg" sx={containerStyles}>
			<Box>
				<Typography
					variant="h2"
					sx={textStyle}
				>
					<DataObjectIcon
						fontSize="inherit"
						sx={iconStyles}
					/>
					{Settings.courseName}
				</Typography>
				<Typography
					variant="h5" // smaller than h3 to improve visual hierarchy under h2
					color='textSecondary'
					sx={{
						fontStyle: 'italic',
					}}
				>
					Wilfrid Laurier University — {Settings.term}
				</Typography>
				<Divider sx={{ my: 4 }} />
			</Box>
			<SectionWrapper title="Overview" icon={SummarizeIcon}>
				{/* prettier-ignore */}
				<Paper elevation={3} sx={{ padding: '20px' }}>
					<p>
						This repository contains my coursework, assignments, and projects for <strong>{Settings.courseName}</strong> at <strong>Wilfrid Laurier University</strong>. The course explores core object-oriented programming concepts in Java, such as classes, inheritance, polymorphism, encapsulation, and abstraction, as well as the use of data structures and algorithms in an object-oriented context.
					</p>
				</Paper>
			</SectionWrapper>
			<SectionWrapper title={`Docs Structure`} icon={MenuBookIcon}>
				<Paper
					component="pre"
					elevation={3}
					sx={{
						color: ({ palette }) => palette.text.primary,
						p: 2,
						borderRadius: 1,
						fontFamily: 'monospace',
						fontSize: '0.875rem',
						lineHeight: 1.5,
						overflowX: 'auto',
					}}
				>
					{`mohammadelhsn.github.io/${Settings.courseCode}/
├── #/assignments/                    → All assignments list
├── #/assignments/${Settings.baseAssignment}01        → Assignment A01 summary page
├── #/assignments/${Settings.baseAssignment}01/t01    → Task 1 inside assignment A01
├── #/labs/                           → All labs list
├── #/labs/${Settings.baseLab}02               → Lab 2 summary page
└── #/labs/${Settings.baseLab}02/t03           → Task 3 inside lab 2`}
				</Paper>
			</SectionWrapper>
			<SectionWrapper title="Topics" icon={TopicIcon}>
				<Paper elevation={3}>
					<TopicsAccordion />
				</Paper>
			</SectionWrapper>
			<SectionWrapper title="Technologies" icon={ComputerIcon}>
				<TechList />
			</SectionWrapper>
			<SectionWrapper title="Explore the Docs" icon={ArticleIcon}>
				<Grid container spacing={3}>
					<CardLinks
						title="Assignments"
						desc="All assignments with generated documentation."
						itemType="assignment"
						icon={AssignmentIcon}
					/>
					<CardLinks
						title="Labs"
						desc="Hands-on labs that apply key data structure concepts."
						itemType="lab"
						icon={BiotechIcon}
					/>
					{Settings.exampleEnable == true && <CardLinks
						title="Examples"
						desc="Mini examples, snippets, and helper code from class."
						itemType="example"
						icon={LightbulbIcon}
					/>}
				</Grid>
			</SectionWrapper>
			<Divider sx={{ my: 4 }} />
			<Grid container spacing={4}>
				<Grid size={{ md: 6, xs: 12 }}>
					<Paper
						elevation={1}
						sx={{
							height: '100%',
							p: 3,
							borderRadius: 2,
						}}
					>
						<Typography
							variant="h6"
							sx={textStyle}
						>
							<NoteAltIcon fontSize="inherit"
								sx={iconStyles} /> Notes
						</Typography>
						<Divider sx={{ my: 2 }} />
						<Typography variant="body1" color="text.secondary">
							This repository is for educational use and follows academic
							policies set by <strong>Wilfrid Laurier University</strong>. If
							you're a {Settings.courseCode} student, please ensure your
							submissions maintain academic integrity.
						</Typography>
					</Paper>
				</Grid>

				{/* Right column */}
				<Grid size={{ md: 6, xs: 12 }}>
					<Paper
						elevation={1}
						sx={{
							height: '100%',
							p: 3,
							borderRadius: 2,
						}}
					>
						<Typography
							variant="h6"
							sx={textStyle}
						>
							<ContactSupportIcon fontSize="inherit"
								sx={iconStyles} /> Contact
						</Typography>
						<Divider sx={{ my: 2 }} />
						<Typography variant="body1" color="text.secondary" sx={textStyle} component={'pre'}>
							<GitHubIcon fontSize="inherit"
								sx={iconStyles} /> GitHub:{' '}
							<Link
								href={Settings.github}
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									color: 'primary.main',
									'&:visited': {
										color: 'primary.main',  // same as main color
									},
									'&:hover': {
										textDecoration: 'underline',
									},
								}}
							>
								{Settings.github_handle}
							</Link>
						</Typography>
						<Typography variant="body1" color="text.secondary" sx={textStyle} component='pre'>
							<ContactMailIcon fontSize="inherit"
								sx={iconStyles} /> Email:{' '}
							<Link
								href={`mailto:${Settings.email}`}
								target="_blank"
								rel="noopener noreferrer"
								sx={{
									color: 'primary.main',
									'&:visited': {
										color: 'primary.main',  // same as main color
									},
									'&:hover': {
										textDecoration: 'underline',
									},
								}}
							>
								{Settings.email}
							</Link>
						</Typography>
					</Paper>
				</Grid>
			</Grid>
			<Divider sx={{ my: 4 }} />
		</Container>
	);
};

export default CP104HomePage;
