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

const theme = createTheme({
	palette: {
		primary: {
			main: '#6de8c0',
		},
		secondary: {
			main: '#47beff',
			light: '#a7e6ff',
		},
		background: {
			paper: '#fff',
		},
		text: {
			primary: '#222222',
		},
	},
	typography: {
		body2: {
			fontSize: '0.75rem',
			lineHeight: '1.5',
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</React.StrictMode>
);
