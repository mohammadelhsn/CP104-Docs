// React

import React from 'react';

// Material UI 

import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { styled, useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

// Icons 

import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeIcon from '@mui/icons-material/LightModeOutlined';

// Interfaces

interface HeaderProps {
	mode: 'light' | 'dark';
	toggleColorMode: () => void;
}

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

const Header: React.FC<HeaderProps> = ({ mode, toggleColorMode }) => {
	const theme = useTheme();
	return (
		<AppBar
			position="static"
			sx={{
				bgcolor: (theme) => theme.palette.background.default,
				color: (theme) => theme.palette.text.primary,
			}}
		>
			<Toolbar>
				<Box sx={{
					width: 48,
					height: 48,
					borderRadius: '50%',
					backgroundColor: 'primary.main',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
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
							backgroundColor: theme.palette.action.hover,
						}
					}}
				>
					{mode === 'light' ? (
						<DarkModeIcon sx={{ color: theme.palette.primary.main }} />
					) : (
						<LightModeIcon sx={{ color: theme.palette.primary.main }} />
					)}
				</IconButton>

			</Toolbar>
		</AppBar>
	);
};

export default Header;
