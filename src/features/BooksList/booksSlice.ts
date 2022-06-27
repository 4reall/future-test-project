import {
	createAsyncThunk,
	createEntityAdapter,
	createSelector,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';

import BooksAPI from '../../api/BooksAPI';

import {
	BooksApiResponse,
	FetchByIdProps,
	FetchByQueryProps,
} from '../../api/types';
import { Statuses } from '../../types';
import { RootState } from '../../app/store';
import { Categories } from '../../types';
import { Book } from '../../api/types';

const booksAdapter = createEntityAdapter<Book>();

const initialState = booksAdapter.getInitialState({
	totalItems: 0,
	offset: 0,
	activeCategory: Categories.ALL,
	lastQuery: '',
	isNewQuery: true,
	isLastPage: false,
	booksLoadingStatus: Statuses.IDLE,
});

export const fetchBooksByQuery = createAsyncThunk<
	BooksApiResponse,
	FetchByQueryProps,
	{ state: RootState }
>('books/fetchBooksByQuery', async (params, { getState }) => {
	const { offset } = getState().books;
	return await BooksAPI.fetchByQuery<BooksApiResponse>({
		...params,
		startIndex: offset,
	});
});

export const fetchBookById = createAsyncThunk<Book, FetchByIdProps>(
	'books/fetchBookById',
	async (params) => {
		return await BooksAPI.fetchById<Book>(params);
	}
);

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setActiveCategory: (state, action: PayloadAction<Categories>) => {
			state.activeCategory = action.payload;
		},
		setLastQuery: (state, action: PayloadAction<string>) => {
			state.lastQuery = action.payload;
		},
		setIsNewQuery: (state, action: PayloadAction<boolean>) => {
			state.isNewQuery = action.payload;
		},
		setIsLastPage: (state, action: PayloadAction<boolean>) => {
			state.isLastPage = action.payload;
		},
		setBooksLoadingStatus: (state, action: PayloadAction<Statuses>) => {
			state.booksLoadingStatus = action.payload;
		},
		removeBook: booksAdapter.removeOne,
	},
	extraReducers: (builder) => {
		builder.addCase(fetchBooksByQuery.pending, (state) => {
			state.booksLoadingStatus = Statuses.LOADING;
		});

		builder.addCase(fetchBooksByQuery.fulfilled, (state, action) => {
			state.booksLoadingStatus = Statuses.IDLE;
			state.totalItems = action.payload.totalItems;
			if (state.isNewQuery) {
				booksAdapter.setAll(state, action.payload.items);
				state.isNewQuery = false;
			} else {
				booksAdapter.addMany(state, action.payload.items);
			}
			state.offset += action.payload.items.length;
		});

		builder.addCase(fetchBooksByQuery.rejected, (state, action) => {
			console.log(action.error);
			state.booksLoadingStatus = Statuses.ERROR;
		});

		builder.addCase(fetchBookById.pending, (state) => {
			state.booksLoadingStatus = Statuses.LOADING;
		});

		builder.addCase(fetchBookById.fulfilled, (state, action) => {
			state.booksLoadingStatus = Statuses.IDLE;
			booksAdapter.addOne(state, action.payload);
		});

		builder.addCase(fetchBookById.rejected, (state, action) => {
			console.log(action.error);
			state.booksLoadingStatus = Statuses.ERROR;
		});
	},
});

export const { selectAll: selectAllBooks, selectById: selectBookById } =
	booksAdapter.getSelectors<RootState>((state) => state.books);

export const filteredBooksSelector = createSelector(
	(state: RootState) => state.books.activeCategory,
	selectAllBooks,
	(activeCategory, books) => {
		if (activeCategory === Categories.ALL) return books;
		return books.filter((book) => {
			let haveCategory = false;
			book.volumeInfo.categories.forEach((category) => {
				if (category.includes(activeCategory)) haveCategory = true;
			});
			return haveCategory;
		});
	}
);

const { reducer, actions } = booksSlice;

export const {
	setActiveCategory,
	setLastQuery,
	setIsNewQuery,
	setIsLastPage,
	setBooksLoadingStatus,
} = actions;

export default reducer;
