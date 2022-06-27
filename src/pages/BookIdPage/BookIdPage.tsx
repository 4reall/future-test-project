import { LinearProgress } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import MainContainer from '../../features/Containers/MainContainer';
import ErrorMessage from '../../features/ErrorMessage/ErrorMessage';
import BookCard from '../../features/BookCard/BookCard';

import { useAppDispatch } from '../../hooks/hooks';
import {
	fetchBookById,
	selectBookById,
	setBooksLoadingStatus,
} from '../../features/BooksList/booksSlice';
import { paths } from '../paths';

import { RootState, store } from '../../app/store';
import { Statuses } from '../../types';
import { ArrowBack } from '@mui/icons-material';
import CircledButton from '../../features/UI/CircledButton';

const BookIdPage = () => {
	const { bookId } = useParams();
	const navigate = useNavigate();
	const { booksLoadingStatus } = useSelector(
		(state: RootState) => state.books
	);
	const book = selectBookById(store.getState(), bookId as string);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!book) dispatch(fetchBookById({ volumeId: bookId as string }));
	}, [bookId]);

	const handleClick = () => {
		if (booksLoadingStatus === Statuses.ERROR)
			dispatch(setBooksLoadingStatus(Statuses.IDLE));

		navigate(paths.mainPage);
	};

	if (booksLoadingStatus === Statuses.LOADING)
		return (
			<MainContainer>
				<LinearProgress />
			</MainContainer>
		);

	if (booksLoadingStatus === Statuses.ERROR) {
		return (
			<MainContainer>
				<ErrorMessage message="There is not such book">
					<CircledButton handleClick={handleClick}>
						<ArrowBack />
					</CircledButton>
				</ErrorMessage>
			</MainContainer>
		);
	}

	return <BookCard book={book} handleClick={handleClick} />;
};

export default BookIdPage;
