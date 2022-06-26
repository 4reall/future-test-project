import { expect, jest, test } from '@jest/globals';
import { transformToBookType } from './helpers';
import notFoundImg from '../assets/not-found.png';

describe('API test', () => {
	test('Transform book correct', () => {
		const mockedTransformToBookType = jest.fn(transformToBookType);
		const mockedNotFullBook = {
			id: '123',
			volumeInfo: {
				title: '123',
				authors: '123',
				description: '123',
				pageCount: '123',
			},
		};
		const mockedFullBook = {
			id: '123',
			volumeInfo: {
				title: '123',
				authors: '123',
				description: '123',
				pageCount: '123',
				categories: ['1', '2', '3'],
				imageLinks: {
					smallThumbnail: '123',
					thumbnail: '123',
				},
			},
		};
		expect(mockedTransformToBookType(mockedNotFullBook)).toEqual({
			id: '123',
			volumeInfo: {
				title: '123',
				authors: '123',
				description: '123',
				pageCount: '123',
				categories: [],
				imageLinks: {
					smallThumbnail: notFoundImg,
					thumbnail: notFoundImg,
				},
			},
		});
		expect(mockedTransformToBookType(mockedFullBook)).toEqual(
			mockedFullBook
		);
	});
});
