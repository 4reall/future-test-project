import { Container, Grid, Paper, Typography } from '@mui/material';
import BooksItem from '../BooksListItem/BooksItem';
import { useSelector } from 'react-redux';
import { fetchBooksByQuery, selectAllBooks } from './booksSlice';
import { RootState, store } from '../../app/store';
import { useAppDispatch } from '../../hooks/hooks';
import { useEffect } from 'react';

const BooksList = () => {
	const { totalItems, booksLoadingStatus } = useSelector(
		(state: RootState) => state.books
	);
	const books = useSelector(selectAllBooks);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(fetchBooksByQuery('c++'));
	}, []);
	const items = books.map((item, i) => (
		<Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
			<BooksItem
				title={item.volumeInfo.title}
				categories={item.volumeInfo.categories}
				thumbnail={item.volumeInfo.imageLinks.smallThumbnail}
				authors={item.volumeInfo.authors}
				description={item.volumeInfo.description}
			/>
		</Grid>
	));
	return (
		<Paper
			sx={{
				height: 1,
				p: 2,
			}}
		>
			<Typography variant="h5" align={'center'} mb={2}>
				Found {totalItems} results
			</Typography>
			<Grid container spacing={2}>
				{items}
			</Grid>
		</Paper>
	);
};

export default BooksList;
