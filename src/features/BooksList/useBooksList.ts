import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {
	setIsLastPage,
	fetchBooksByQuery,
	// filteredBooksSelector,
	selectAllBooks,
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

	const books = useSelector(selectAllBooks);

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleCardClick = (id: string) => {
		return () => {
			navigate(`${paths.mainPage}/${id}`);
		};
	};

	const handleButtonClick = () => {
		if (books.length < 30 || totalItems - books.length < 30) {
			dispatch(setIsLastPage(true));
			return;
		}
		dispatch(fetchBooksByQuery({ q: lastQuery }));
	};
	return {
		filteredBooks: books,
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
