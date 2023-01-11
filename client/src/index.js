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
    background: {
      paper: '#fff',
      primary: '#0D47A1',
      secondary: '#90CAF9',
    },
    text: {
      primary: '#1565C0',
      secondary: '#E3F2FD',
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
