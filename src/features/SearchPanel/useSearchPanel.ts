import { FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';

import { useAppDispatch } from '../../hooks/hooks';
import {
	// setActiveCategory,
	setIsLastPage,
	setLastQuery,
	fetchBooksByQuery,
	setIsNewQuery,
} from '../BooksList/booksSlice';

import { Categories, SortOptions } from '../../types';
import { RootState } from '../../app/store';

const useSearchPanel = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [category, setCategory] = useState(Categories.ALL);
	const [sortOption, setSortOption] = useState(SortOptions.RELEVANCE);
	const [isValid, setIsValid] = useState(true);
	const { booksLoadingStatus } = useSelector(
		(state: RootState) => state.books
	);

	const dispatch = useAppDispatch();

	const resetForm = () => {
		setIsValid(true);
		setCategory(Categories.ALL);
		setSortOption(SortOptions.RELEVANCE);
		setSearchQuery('');
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const query =
			category === Categories.ALL
				? searchQuery
				: `${searchQuery}+subject:${category}`;

		if (searchQuery.trim().length < 1) {
			setIsValid(false);
			return;
		}
		dispatch(setIsLastPage(false));
		dispatch(setIsNewQuery(true));
		dispatch(setLastQuery(query));

		dispatch(
			fetchBooksByQuery({
				q: query,
				orderBy: sortOption,
			})
		);

		resetForm();
	};

	return {
		booksLoadingStatus,
		isValid,
		searchQuery,
		setSearchQuery,
		category,
		setCategory,
		sortOption,
		setSortOption,
		handleSubmit,
	};
};
export default useSearchPanel;
