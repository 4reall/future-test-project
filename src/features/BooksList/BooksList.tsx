import { Container, Grid, Paper } from '@mui/material';
import BooksItem from '../BooksListItem/BooksItem';

const mock = new Array(10).fill('').map((item, i) => i);

const BooksList = () => {
	const items = mock.map((item) => (
		<Grid item xs={12} sm={6} md={4} lg={3}>
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
