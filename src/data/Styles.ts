import type { SxProps } from '@mui/material';

export const cardContentStyles: SxProps = {
	paddingTop: '25px',
	borderRadius: '10px',
	boxShadow: '0 3px 8px rgba(0, 0, 0, 0.05)',
	transition: 'transform 0.2s ease',
};

export const cardBodyStyles: SxProps = {
	paddingTop: '25px',
};

export const cardActionStyles: SxProps = {
	justifyContent: 'flex-start',
	paddingLeft: '1.5',
	paddingBottom: '0',
	paddingTop: '25px',
};

export const buttonStyles: SxProps = {
	color: 'primary',
	textDecoration: 'none',
	fontWeight: 'bold',
	fontSize: '0.9em',
};

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

export const chipStyle: SxProps = {
	marginRight: '0.8rem',
	bgcolor: 'background.paper',
};

export const projectsBox: SxProps = { flexGrow: 1, padding: '3rem 2rem' };
export const projectsHeader: SxProps = {
	textAlign: 'center',
	marginBottom: '2rem',
};

export const projectsGrid = {
	gap: '2rem',
	height: '100%',
	gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
};

export const textStyle = {
	display: 'flex',
	alignItems: 'center', // use "center" instead of "top" for visual balance
	mb: 1, // space between heading and subheading
	flexWrap: 'wrap', // allow wrapping inside flex container
	wordBreak: 'break-word', // break long words if needed
};

export const iconStyles = {
	color: 'primary.main',
	mr: 1.5,
};
