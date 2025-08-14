/** ======= REACT ======= */
import { type FC } from 'react';

/** ======= MUI COMPONENTS ======= */
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

/** ======= ICONS ======= */
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';

/** ======= STYLES & PROPS ======= */
import { divCenter } from '../data/Styles';
import type { HeaderProps } from '../data/Data';

/** ======= EXTERNAL LINK ======= */
const StyledExternalLink = styled(Link)(({ theme }) => ({
	color: 'inherit',
	textDecoration: 'none',
	marginRight: theme.spacing(2),
	fontWeight: 'normal',
	display: 'inline-flex',
	alignItems: 'center',
	'&:hover': {
		textDecoration: 'none',
	},
}));

/** ======= HEADER FOR THE PROJECT ======= */
const Header: FC<HeaderProps> = ({ mode, toggleColorMode }) => {
	const theme = useTheme();
	return (
		<AppBar
			position="static"
			sx={{
				bgcolor: ({ palette }) => palette.background.default,
				color: ({ palette }) => palette.text.primary,
			}}
		>
			<Toolbar>
				<Box sx={{
					width: 48,
					height: 48,
					borderRadius: '50%',
					backgroundColor: ({ palette }) => palette.primary.main,
					...divCenter,
					overflow: 'hidden',
					mr: 1
				}}>
					<Box
						component="img"
						src="pfp.png"
						alt="Logo"
						sx={{
							width: '100%',
							height: '100%',
							objectFit: 'cover',
						}}
					/>
				</Box>
				<StyledExternalLink href="https://mohammadelhsn.github.io/">
					<Button color="inherit">
						Home
					</Button>
				</StyledExternalLink>
				<StyledExternalLink href="https://mohammadelhsn.github.io/#/projects">
					<Button color="inherit">
						Projects
					</Button>
				</StyledExternalLink>
				<Typography sx={{
					flexGrow: 1,
				}} />
				<IconButton
					onClick={toggleColorMode}
					size="small"
					sx={{
						border: `1px solid ${theme.palette.divider}`,
						borderRadius: 3,
						p: 0.75,
						transition: 'all 0.3s ease',
						'&:hover': {
							backgroundColor: ({ palette }) => palette.action.hover,
						}
					}}
				>
					{mode === 'light' ? (
						<DarkModeIcon sx={{ color: ({ palette }) => palette.primary.main }} />
					) : (
						<LightModeIcon sx={{ color: ({ palette }) => palette.primary.main }} />
					)}
				</IconButton>

			</Toolbar>
		</AppBar>
	);
};

export default Header;
