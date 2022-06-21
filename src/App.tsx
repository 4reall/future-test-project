import './styles/app.module.css';
import {
	Container,
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@mui/material';
import SearchPanel from './features/SearchPanel/SearchPanel';

const theme = responsiveFontSizes(
	createTheme({
		typography: {},
	})
);

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Container
				sx={{
					py: { lg: '2rem', md: '1.5rem', xs: '1rem' },
				}}
				maxWidth={'lg'}
			>
				<SearchPanel />
			</Container>
		</ThemeProvider>
	);
};

export default App;
