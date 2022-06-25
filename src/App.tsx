import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Component } from 'react';

import Routes from './pages/Routes';

const theme = responsiveFontSizes(createTheme());

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</ThemeProvider>
		);
	}
}

export default App;
