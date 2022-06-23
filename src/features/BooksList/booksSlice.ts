import {
	createAsyncThunk,
	createEntityAdapter,
	createSelector,
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit';
import { Book, BooksApiResponse, FetchByQueryProps } from '../../api/types';
import { Statuses } from './types';
import BookAPI from '../../api/BookAPI';
import { RootState } from '../../app/store';
import { Categories } from '../SearchPanel/options';

const booksAdapter = createEntityAdapter<Book>();

const initialState = booksAdapter.getInitialState({
	totalItems: 0,
	activeCategory: Categories.ALL,
	lastQuery: '',
	isNewQuery: true,
	booksLoadingStatus: Statuses.IDLE,
});

export const fetchBooksByQuery = createAsyncThunk(
	'books/fetchBooksByQuery',
	async (params: FetchByQueryProps): Promise<BooksApiResponse> => {
		return await BookAPI.fetchByQuery<BooksApiResponse>(params);
	}
);

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		changeActiveCategory: (state, action: PayloadAction<Categories>) => {
			state.activeCategory = action.payload;
		},
		changeLastQuery: (state, action: PayloadAction<string>) => {
			state.lastQuery = action.payload;
		},
		setIsNewQuery: (state) => {
			state.isNewQuery = true;
		},
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
		});
		builder.addCase(fetchBooksByQuery.rejected, (state, action) => {
			console.log(action.error);
			state.booksLoadingStatus = Statuses.ERROR;
		});
	},
});

export const { selectAll: selectAllBooks } =
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

export const { changeActiveCategory, changeLastQuery, setIsNewQuery } = actions;

export default reducer;
