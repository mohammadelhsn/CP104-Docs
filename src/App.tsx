// React

import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import React from 'react';

// Components

import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AssignmentsPage from './pages/AssignmentsPage';
import AssignmentPage from './pages/AssignmentPage';
import TaskDisplay from './pages/TaskPage';

// Theme

import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, darkTheme } from './data/Theme';

// Data

import Settings from './data/Settings';

// Styles

import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const App = () => {
	const [mode, setMode] = React.useState<'light' | 'dark'>(() => {
		const stored = localStorage.getItem('colorMode');
		return stored === 'dark' ? 'dark' : 'light';
	});
	const toggleColorMode = () => {
		setMode((prevMode) => {
			const nextMode = prevMode === 'light' ? 'dark' : 'light';
			localStorage.setItem('colorMode', nextMode); // Save preference
			return nextMode;
		});
	};
	const theme = React.useMemo(
		() => (mode === 'light' ? lightTheme : darkTheme),
		[mode]
	);
	return (
		<HashRouter>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header toggleColorMode={toggleColorMode} mode={`${mode}`} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/assignments/"
						element={<AssignmentsPage type="assignment" />}
					/>
					{(Settings.assignmentNumbersDisable == false && (
						<Route
							path="/assignments/:num"
							element={<AssignmentPage type="assignment" />}
						/>
					))}
					{(Settings.assignmentTasksDisable == false && (
						<Route
							path="/assignments/:num/:task"
							element={<TaskDisplay type="assignment" />}
						/>
					))}
					<Route path="/labs/" element={<AssignmentsPage type="lab" />} />
					{(Settings.labNumbersDisable == false && (
						<Route
							path="/labs/:num" element={<AssignmentPage type="lab" />}
						/>
					))}
					{(Settings.labTasksDisable == false && (
						<Route
							path="/labs/:num/:task" element={<TaskDisplay type="lab" />}
						/>
					))}
					{(Settings.exampleEnable == true && (
						<Route path="/examples" element={<AssignmentsPage type='example' />} />
					))}
					<Route path="*" element={<Navigate to="/" replace />} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</HashRouter>
	);
};

export default App;
