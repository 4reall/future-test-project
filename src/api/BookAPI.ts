import axios, { AxiosInstance } from 'axios';
import httpRequest from './httpRequest';

class BookAPI {
	private static _baseURL = 'https://www.googleapis.com/books/v1/';
	private static _apiKey = 'AIzaSyB0L95gHLHhnW4u-hkt0bBHBDETKm_T-Xs';

	private static createInstance = (): AxiosInstance => {
		return axios.create({
			baseURL: BookAPI._baseURL,
			params: {
				key: BookAPI._apiKey,
			},
		});
	};

	static fetchByQuery = async <T>(query: string) => {
		return httpRequest<T>({
			axiosInstance: BookAPI.createInstance(),
			requestConfig: {
				url: 'volumes',
				method: 'GET',
				params: {
					q: query,
				},
			},
		});
	};
}

export default BookAPI;
