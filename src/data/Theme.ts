import { createTheme } from '@mui/material';

/** The primary colour for the project */
const primary = '#6093EA';
/** The secondary colour for the project */
const secondary = '#9C27B0';

/** The config for the light theme for the project */
export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: { main: primary },
		secondary: { main: secondary },
	},
});

/** The config for the dark theme for the project */
export const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: { main: primary },
		secondary: { main: secondary },
	},
});
