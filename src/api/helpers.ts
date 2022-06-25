import { Book } from './types';

import notFoundImg from '../assets/not-found.png';

export const transformToBookType = (item: any): Book => {
	const v = item.volumeInfo;
	return {
		id: item.id,
		volumeInfo: {
			title: v.title,
			authors: v.authors,
			description: v.description,
			pageCount: v.pageCount,
			categories: v.categories ? v.categories : [],
			imageLinks: v.imageLinks
				? {
						smallThumbnail: v.imageLinks.smallThumbnail,
						thumbnail: v.imageLinks.thumbnail,
				  }
				: {
						smallThumbnail: notFoundImg,
						thumbnail: notFoundImg,
				  },
		},
	};
};
