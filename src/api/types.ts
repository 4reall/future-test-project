import { Categories } from '../types';

export interface BooksApiResponse {
	totalItems: number;
	items: Book[];
}

export interface FetchByQueryProps {
	q: string;
	subject?: Categories;
	orderBy?: string;
	startIndex?: number;
}

export interface FetchByIdProps {
	volumeId: string;
}
export interface Book {
	id: string;
	volumeInfo: {
		title: string;
		authors: string[];
		description: string;
		pageCount: number;
		categories: string[];
		imageLinks: {
			smallThumbnail: string;
			thumbnail: string;
		};
	};
}
