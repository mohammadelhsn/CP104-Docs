/** ======= REACT ======= */
import { useNavigate } from 'react-router-dom';

/** ======= MUI COMPONENTS ======= */
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';

/** ======= MUI ICONS ======= */
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LockIcon from '@mui/icons-material/Lock';
import FunctionsIcon from '@mui/icons-material/Functions';
import NumbersIcon from '@mui/icons-material/Numbers';
import BuildIcon from '@mui/icons-material/Build';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

/** ======= CUSTOM COMPONENTS ======= */
import SectionWrapper from '../components/Section';

/** ======= DATA & STYLES ======= */
import { type FunctionPageProps } from '../data/Data';
import { textStyle, iconStyles, dividerStyle, containerStyles } from '../data/Styles';

/** Functions Page */
const FunctionsPage = (opts: FunctionPageProps) => {
	const { functions = [], constants = [] } = opts;
	const navigate = useNavigate();
	return (
		<Container maxWidth="lg" sx={containerStyles}>
			<Box>
				<IconButton onClick={() => navigate(-1)} aria-label="Go back" sx={{ mb: 1 }}>
					<ArrowBackIcon />
				</IconButton>
				<Typography variant="h2" sx={textStyle}>
					Functions & Constants
				</Typography>
				<Typography
					variant="h5"
					color='textSecondary'
					sx={{ fontStyle: 'italic' }}
				>
					{opts.parent} Functions
				</Typography>
				<Divider sx={{ my: 4 }} />
			</Box>
			<SectionWrapper title="Constants" icon={LockIcon}>
				{constants.length == 0 && (
					<Paper elevation={3} sx={{ textAlign: 'center', flexGrow: '1', padding: '1rem' }}>
						<SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
						<Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
							Oops!
						</Typography>
						<Typography variant="h6" gutterBottom color="text.secondary">
							Looks like this there are no documented constants
						</Typography>
					</Paper>
				)}
				{constants.length > 0 && (
					<Stack spacing={2}>
						{constants.map((c, index) => (
							<Paper key={index} elevation={3} sx={{ padding: '1rem' }}>
								<Box
									display="flex"
									alignItems="center"
									justifyContent="space-between"
									mb={1}
								>
									<Typography variant="h6" sx={textStyle}>
										<NumbersIcon sx={iconStyles} /> {c.name}
									</Typography>
									<Chip
										label={c.value}
										color="primary"
										variant="outlined"
										size="small"
									/>
								</Box>

								<Divider sx={dividerStyle} />

								{c.description && (
									<Typography variant="body2" color="text.secondary">
										{c.description}
									</Typography>
								)}
							</Paper>
						))}
					</Stack>
				)}
			</SectionWrapper>
			<SectionWrapper title="Functions" icon={FunctionsIcon}>
				{functions.length == 0 && (
					<Paper elevation={3} sx={{ textAlign: 'center', flexGrow: '1', padding: '1rem' }}>
						<SentimentVeryDissatisfiedIcon sx={{ fontSize: 60, color: 'error.main', mb: 2 }} />
						<Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
							Oops!
						</Typography>
						<Typography variant="h6" gutterBottom color="text.secondary">
							Looks like this there are no documented constants
						</Typography>
					</Paper>
				)}
				{functions.length > 0 && (
					<Stack spacing={3}>
						{functions.map((fn, index) => (
							<Paper key={`${index}-${fn.functionName}`} elevation={3} sx={{ padding: '1rem' }}>
								<Typography variant="h6" sx={textStyle} gutterBottom>
									<BuildIcon sx={iconStyles} /> {fn.functionName}
								</Typography>
								<Divider sx={dividerStyle} />
								<Typography
									variant="body2"
									sx={{
										fontFamily: 'monospace',
										backgroundColor: 'background.default',
										p: 1,
										borderRadius: 1,
										mb: 3,
										userSelect: 'all',
									}}
								>
									{fn.signature}
								</Typography>
								<Typography variant="body1" color='textSecondary'>
									{fn.description}
								</Typography>
							</Paper>
						))}
					</Stack>
				)}
			</SectionWrapper>
			{
				functions.length === 0 && constants.length === 0 && (
					<Typography mt={4} textAlign="center" color='textSecondary'>
						No functions or constants to display.
					</Typography>
				)
			}
		</Container >
	);
};

export default FunctionsPage;
