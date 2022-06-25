import { Fade, Grid, LinearProgress, Typography } from '@mui/material';

import BooksItem from '../BooksListItem/BooksItem';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import useBooksList from './useBooksList';
import Content from './Content';

import { Statuses } from '../../types';

const BooksList = () => {
	const {
		isLastPage,
		filteredBooks,
		booksLoadingStatus,
		isNewQuery,
		totalItems,
		handleButtonClick,
		handleCardClick,
	} = useBooksList();

	const items = filteredBooks.map((item) => {
		return (
			<Fade timeout={500} key={item.id}>
				<Grid item xs={12} sm={6} md={4} lg={3}>
					<BooksItem
						id={item.id}
						title={item.volumeInfo.title}
						categories={item.volumeInfo.categories}
						thumbnail={item.volumeInfo.imageLinks.thumbnail}
						authors={item.volumeInfo.authors}
						description={item.volumeInfo.description}
						handleClick={handleCardClick(item.id)}
					/>
				</Grid>
			</Fade>
		);
	});

	if (
		filteredBooks.length < 1 &&
		booksLoadingStatus !== Statuses.ERROR &&
		booksLoadingStatus !== Statuses.LOADING
	) {
		return (
			<Typography variant={'h5'} align={'center'}>
				{isNewQuery
					? 'There are no books here'
					: 'We did not found anything by your query'}
			</Typography>
		);
	}

	const errorMessage =
		booksLoadingStatus === Statuses.ERROR ? (
			<ErrorMessage message="Something went wrong." />
		) : null;
	const loadingMessage =
		booksLoadingStatus === Statuses.LOADING && isNewQuery ? (
			<LinearProgress />
		) : null;
	const content =
		(booksLoadingStatus === Statuses.IDLE && filteredBooks.length > 0) ||
		!isNewQuery ? (
			<Content
				totalItems={totalItems}
				items={items}
				handleButtonClick={handleButtonClick}
				booksLoadingStatus={booksLoadingStatus}
				isLastPage={isLastPage}
			/>
		) : null;

	return (
		<>
			{errorMessage}
			{loadingMessage}
			{content}
		</>
	);
};

export default BooksList;
