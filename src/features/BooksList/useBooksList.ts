import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	setIsLastPage,
	fetchBooksByQuery,
	filteredBooksSelector,
} from './booksSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { paths } from '../../pages/paths';

import { RootState } from '../../app/store';

const useBooksList = () => {
	const {
		totalItems,
		booksLoadingStatus,
		lastQuery,
		isNewQuery,
		isLastPage,
	} = useSelector((state: RootState) => state.books);
	const filteredBooks = useSelector(filteredBooksSelector);
	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleCardClick = (id: string) => {
		return () => {
			// dispatch(fetchBookById({ volumeId: id }));
			navigate(`${paths.mainPage}/${id}`);
		};
	};

	const handleButtonClick = () => {
		if (
			filteredBooks.length < 30 ||
			totalItems - filteredBooks.length < 30
		) {
			dispatch(setIsLastPage(true));
			return;
		}
		dispatch(fetchBooksByQuery({ q: lastQuery }));
	};
	return {
		filteredBooks,
		totalItems,
		booksLoadingStatus,
		lastQuery,
		isNewQuery,
		isLastPage,
		handleButtonClick,
		handleCardClick,
	};
};

export default useBooksList;
