import type { SxProps } from '@mui/material';

/** The styles for the card body */
export const cardBodyStyles: SxProps = {
	paddingTop: '25px',
};

/** Card actions styles */
export const cardActionStyles: SxProps = {
	justifyContent: 'flex-start',
	paddingLeft: '1.5',
	paddingBottom: '0',
	paddingTop: '25px',
};

/** The default button styles */
export const buttonStyles: SxProps = {
	color: 'primary',
	textDecoration: 'none',
	fontWeight: 'bold',
	fontSize: '0.9em',
};

/** Divider styles */
export const dividerStyle: SxProps = {
	margin: '2rem 0',
	marginLeft: 0,
};

export const sampleOutput: SxProps = {
	p: 2,
	mb: 3,
	bgcolor: 'background.paper',
	fontFamily: 'monospace',
	whiteSpace: 'pre-wrap',
};

/** Default text styles */
export const textStyle = {
	display: 'flex',
	alignItems: 'center', // use "center" instead of "top" for visual balance
	mb: 1, // space between heading and subheading
	flexWrap: 'wrap', // allow wrapping inside flex container
	wordBreak: 'break-word', // break long words if needed
};

/** Icon Styles */
export const iconStyles = {
	color: 'primary.main',
	mr: 1.5,
};

/** The default container styles */
export const containerStyles: SxProps = {
	px: { xs: 2, sm: 3 },
	py: { xs: 4, sm: 6 },
};

/** Styles to center anything */
export const divCenter: SxProps = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};
