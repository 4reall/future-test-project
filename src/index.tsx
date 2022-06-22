import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './styles/index.module.css';
import { CssBaseline } from '@mui/material';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<CssBaseline />
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
