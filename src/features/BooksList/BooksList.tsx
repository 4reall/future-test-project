import { Button, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import BooksItem from '../BooksListItem/BooksItem';
import { useSelector } from 'react-redux';
import { fetchBooksByQuery, filteredBooksSelector } from './booksSlice';
import { RootState } from '../../app/store';
import { useAppDispatch } from '../../hooks/hooks';
import { useState } from 'react';
import { Statuses } from './types';
import ErrorMessage from './ErrorMessage';

const BooksList = () => {
	const [offset, setOffset] = useState(0);

	const { totalItems, booksLoadingStatus, lastQuery, isNewQuery } =
		useSelector((state: RootState) => state.books);
	const filteredBooks = useSelector(filteredBooksSelector);
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(fetchBooksByQuery({ q: lastQuery, startIndex: offset }));
		setOffset((prevState) => prevState + filteredBooks.length);
	};

	const items = filteredBooks.map((item, i) => {
		return (
			<Grid key={item.id} item xs={12} sm={6} md={4} lg={2.4}>
				<BooksItem
					title={item.volumeInfo.title}
					categories={item.volumeInfo.categories}
					thumbnail={item.volumeInfo.imageLinks.smallThumbnail}
					authors={item.volumeInfo.authors}
					description={item.volumeInfo.description}
				/>
			</Grid>
		);
	});

	const emptyList =
		filteredBooks.length < 1 &&
		booksLoadingStatus !== Statuses.ERROR &&
		booksLoadingStatus !== Statuses.LOADING ? (
			<Typography variant={'h5'} align={'center'}>
				There are no books here
			</Typography>
		) : null;
	const errorMessage =
		booksLoadingStatus === Statuses.ERROR ? <ErrorMessage /> : null;
	const spinner =
		booksLoadingStatus === Statuses.LOADING && isNewQuery ? (
			<LinearProgress />
		) : null;
	const content =
		(booksLoadingStatus === Statuses.IDLE && filteredBooks.length > 0) ||
		!isNewQuery ? (
			<>
				<Typography variant="h5" align={'center'} mb={2}>
					Found {totalItems} results
				</Typography>
				<Grid container spacing={2}>
					{items}
				</Grid>
				<Button
					variant={'outlined'}
					sx={{
						textTransform: 'uppercase',
						mx: 'auto',
						display: 'block',
						mt: 3,
					}}
					onClick={handleClick}
					disabled={booksLoadingStatus === Statuses.LOADING}
				>
					Load more
				</Button>
			</>
		) : null;

	return (
		<Paper
			sx={{
				p: 2,
			}}
		>
			<>
				{emptyList}
				{errorMessage}
				{spinner}
				{content}
			</>
		</Paper>
	);
};

export default BooksList;
