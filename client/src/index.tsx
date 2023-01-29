import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from './App';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import { CssBaseline } from '@mui/material';
import type {} from '@mui/x-data-grid-pro/themeAugmentation';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { SettingsProvider } from './context/settingsContext';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';

const theme = createTheme({
	palette: {
		background: {
			paper: '#fff',
		},
		text: {
			primary: '#1565C1',
			secondary: '#b7d1e2',
		},
		primary: {
			main: '#0D47A1',
		},
		secondary: {
			main: '#8ad1f8',
			light: '#e6edf3',
		},
	},
});

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<LocalizationProvider dateAdapter={AdapterLuxon}>
				<SettingsProvider>
					<CssBaseline />
					<App />
				</SettingsProvider>
			</LocalizationProvider>
		</ThemeProvider>
	</React.StrictMode>
);
