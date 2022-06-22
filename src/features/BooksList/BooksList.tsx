import { Container, Grid, Paper } from '@mui/material';
import BooksItem from '../BooksListItem/BooksItem';
import { useSelector } from 'react-redux';
import { selectAllBooks } from './booksSlice';
import { store } from '../../app/store';

const BooksList = () => {
	const books = selectAllBooks(store.getState());
	console.log(books);

	const items = books.map((item, i) => (
		<Grid key={i} item xs={12} sm={6} md={4} lg={3}>
			<BooksItem />
		</Grid>
	));
	return (
		<Paper
			sx={{
				height: 1,
				p: 2,
			}}
		>
			<Grid container spacing={2}>
				{items}
			</Grid>
		</Paper>
	);
};

export default BooksList;
