import {
	createAsyncThunk,
	createEntityAdapter,
	createSlice,
} from '@reduxjs/toolkit';
import { Book, BooksApiResponse } from '../../api/types';
import { Statuses } from './types';
import BookAPI from '../../api/BookAPI';
import { RootState } from '../../app/store';

const booksAdapter = createEntityAdapter<Book>();

const initialState = booksAdapter.getInitialState({
	totalItems: 0,
	booksLoadingStatus: Statuses.IDLE,
});

export const fetchBooksByQuery = createAsyncThunk(
	'books/fetchBooksByQuery',
	async (query: string): Promise<BooksApiResponse> => {
		const response = await BookAPI.fetchByQuery<BooksApiResponse>(query);
		return response.data;
	}
);

const booksSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchBooksByQuery.pending, (state) => {
			state.booksLoadingStatus = Statuses.LOADING;
		});
		builder.addCase(fetchBooksByQuery.fulfilled, (state, action) => {
			state.booksLoadingStatus = Statuses.IDLE;
			state.totalItems = action.payload.totalItems;
			booksAdapter.setAll(state, action.payload.items);
		});
		builder.addCase(fetchBooksByQuery.rejected, (state, action) => {
			console.log(action.error);
			state.booksLoadingStatus = Statuses.ERROR;
		});
	},
});

export const { selectAll: selectAllBooks } =
	booksAdapter.getSelectors<RootState>((state) => state.books);

const { reducer, actions } = booksSlice;

export default reducer;
