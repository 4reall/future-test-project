import './styles/app.module.css';
import {
	Container,
	createTheme,
	responsiveFontSizes,
	ThemeProvider,
} from '@mui/material';
import SearchPanel from './features/SearchPanel/SearchPanel';
import BooksList from './features/BooksList/BooksList';
import { useEffect } from 'react';
import { fetchBooksByQuery } from './features/BooksList/booksSlice';
import { useAppDispatch } from './hooks/hooks';

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
				<SearchPanel sx={{ mb: 3 }} />
				<BooksList />
			</Container>
		</ThemeProvider>
	);
};

export default App;
