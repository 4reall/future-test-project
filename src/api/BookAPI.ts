import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import httpRequest from './httpRequest';
import { Book, BooksApiResponse } from './types';
import notFoundImg from '../assets/not-found.png';

class BookAPI {
	private static _baseURL = 'https://www.googleapis.com/books/v1/';
	private static _apiKey = 'AIzaSyB0L95gHLHhnW4u-hkt0bBHBDETKm_T-Xs';

	private static createInstance = (): AxiosInstance => {
		return axios.create({
			baseURL: BookAPI._baseURL,
			params: {
				key: BookAPI._apiKey,
				maxResults: 30,
			},
		});
	};

	static fetchByQuery = async <T>(params: object) => {
		const response = await httpRequest<T>({
			axiosInstance: BookAPI.createInstance(),
			requestConfig: {
				url: 'volumes',
				method: 'GET',
				params: params,
			},
		});
		return BookAPI._transformResponse(response);
	};

	private static _transformResponse = async (
		response: AxiosResponse
	): Promise<BooksApiResponse> => {
		const items = response.data.items.map((item: any) => {
			const v = item.volumeInfo;
			return {
				id: item.id,
				volumeInfo: {
					title: v.title,
					authors: v.authors,
					description:
						v.description?.length > 100
							? v.description.slice(0, 100)
							: v.description,
					pageCount: v.pageCount,
					categories: v.categories ? v.categories : [],
					imageLinks: {
						smallThumbnail: v.imageLinks
							? v.imageLinks.smallThumbnail
							: notFoundImg,
						thumbnail: v.imageLinks
							? v.imageLinks.thumbnail
							: notFoundImg,
					},
				},
			};
		});
		return {
			totalItems: response.data.totalItems,
			items: items,
		};
	};
}

export default BookAPI;
