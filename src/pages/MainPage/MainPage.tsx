import { Box, Divider, Typography } from '@mui/material';

import SearchPanel from '../../features/SearchPanel/SearchPanel';
import BooksList from '../../features/BooksList/BooksList';
import MainContainer from '../../features/Containers/MainContainer';

const MainPage = () => {
	return (
		<Box sx={{ p: 1 }}>
			<Typography
				variant={'h3'}
				component="h1"
				align="center"
				sx={{ mx: 'auto' }}
			>
				Search for books
			</Typography>
			<MainContainer>
				<SearchPanel sx={{ mb: 3 }} />
				<Divider sx={{ height: 1, my: 2, background: 'black' }} />
				<BooksList />
			</MainContainer>
		</Box>
	);
};

export default MainPage;
