// React

import { useState, useEffect } from 'react';

// Types 

import type { TechItemOpts } from '@mohammadelhsn/portfolio-api-wrapper/dist/interfaces/Interfaces';

// MUI Components

import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';

// Custom Components

import TechItem from './TechItem';
import Loading from './Loading';

// Icons

import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';

// Types

import type { SvgIconComponent } from '@mui/icons-material';

// Settings

import Settings from '../data/Settings';

// Tech List

const TechList = () => {
	const [techList, setTechList] = useState<TechItemOpts[]>([]);
	const [loading, setLoading] = useState(true);
	const icons: Record<string, SvgIconComponent> = {};
	useEffect(() => {
		(async () => {
			const res = await Settings.api.getTechData();
			if (res?.data) {
				setTechList(res.data);
			}
			setLoading(false);
		})();
	}, []);
	if (loading) {
		return (
			<Loading />
		);
	}
	return (
		<List component={Paper} elevation={3}>
			{techList.map(({ bolded, nonBolded }, idx) => {
				icons[techList[0].bolded] = TerminalIcon;
				icons[techList[1].bolded] = CodeIcon;
				icons[techList[2].bolded] = GitHubIcon;
				const icon = icons[bolded];
				return (
					<>
						<TechItem
							key={`${idx}-${bolded.split(' ')[0]}-${nonBolded.split(' ')[0]}`}
							bolded={bolded}
							nonBolded={nonBolded}
							icon={icon}
						></TechItem>
						<Divider />
					</>
				);
			})}
		</List>
	);
};

export default TechList;
