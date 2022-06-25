export interface BooksApiResponse {
	totalItems: number;
	items: Book[];
}

export interface FetchByQueryProps {
	q: string;
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
		pageCount: 308;
		categories: string[];
		imageLinks: {
			smallThumbnail: string;
			thumbnail: string;
		};
	};
}
