import axios, { AxiosInstance, AxiosResponse } from 'axios';

import httpRequest from './httpRequest';
import { FetchByIdProps, FetchByQueryProps } from './types';
import { transformToBookType } from './helpers';

class BooksAPI {
	private static _baseURL = 'https://www.googleapis.com/books/v1/volumes';
	private static _apiKey = 'AIzaSyB0L95gHLHhnW4u-hkt0bBHBDETKm_T-Xs';

	private static _createInstance = (): AxiosInstance => {
		return axios.create({
			baseURL: BooksAPI._baseURL,
			params: {
				key: BooksAPI._apiKey,
				maxResults: 30,
				projection: 'lite',
			},
		});
	};

	static fetchByQuery = async <T>(params: FetchByQueryProps) => {
		const response = await httpRequest<T>({
			axiosInstance: BooksAPI._createInstance(),
			requestConfig: {
				params: params,
			},
		});
		return BooksAPI._transformListResponse(response);
	};

	static fetchById = async <T>(params: FetchByIdProps) => {
		const response = await httpRequest<T>({
			axiosInstance: BooksAPI._createInstance(),
			requestConfig: {
				url: params.volumeId,
			},
		});
		return BooksAPI._transformItemResponse(response);
	};

	private static _transformListResponse = (response: AxiosResponse) => {
		try {
			const d = response.data;
			const items =
				d.totalItems > 0
					? d.items.map((item: any) => transformToBookType(item))
					: [];
			return {
				totalItems: d.totalItems,
				items: items,
			};
		} catch (e) {
			throw new Error(`transform error`);
		}
	};

	private static _transformItemResponse = (response: AxiosResponse) => {
		return transformToBookType(response.data);
	};
}

export default BooksAPI;
