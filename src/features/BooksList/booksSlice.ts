import {
	createAsyncThunk,
	createEntityAdapter,
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
import { Book } from '../../api/types';

const booksAdapter = createEntityAdapter<Book>();

const initialState = booksAdapter.getInitialState({
	totalItems: 0,
	startIndex: 0,
	// activeCategory: Categories.ALL,
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
	const { startIndex, isNewQuery } = getState().books;
	return await BooksAPI.fetchByQuery<BooksApiResponse>({
		...params,
		startIndex: isNewQuery ? 0 : startIndex,
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
				state.startIndex = action.payload.items.length;
			} else {
				booksAdapter.addMany(state, action.payload.items);
				state.startIndex += action.payload.items.length;
			}
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

const { reducer, actions } = booksSlice;

export const {
	setLastQuery,
	setIsNewQuery,
	setIsLastPage,
	setBooksLoadingStatus,
} = actions;

export default reducer;
