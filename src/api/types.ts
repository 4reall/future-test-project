import { Categories } from '../features/SearchPanel/options';

export interface Book {
	id: string;
	volumeInfo: {
		title: string;
		authors: string[];
		description: string;
		pageCount: 308;
		categories: string[];
		imageLinks: {
			smallThumbnail: string;
			thumbnail: string;
		};
		language: string;
	};
}
export interface BooksApiResponse {
	totalItems: number;
	items: Book[];
}

export interface FetchByQueryProps {
	q: string;
	orderBy?: string;
	startIndex?: number;
	[otherOption: string]: unknown;
}
