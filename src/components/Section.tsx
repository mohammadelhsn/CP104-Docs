// MUI Components

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { useTheme } from '@mui/material/styles';

// Data

import { type SectionOpts } from '../data/Data';

// Section Wrapper

const SectionWrapper = (opts: SectionOpts) => {
	const theme = useTheme();
	return (
		<Box component="section" sx={{ mb: 6 }}>
			<Card
				elevation={1}
				sx={{
					backgroundColor: theme.palette.background.paper,
					borderRadius: 2,
				}}
			>
				<CardContent>
					<Typography
						variant="h4"
						color="text.primary"
						sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
					>
						{opts.icon && (
							<opts.icon
								fontSize="inherit"
								sx={{
									color: 'primary.main',
									mr: 1.5,
								}}
							/>
						)}
						{opts.title}
					</Typography>
					<Divider
						sx={{
							my: 2,
							borderColor: theme.palette.divider,
						}}
					/>
					<Box>{opts.children}</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default SectionWrapper;
