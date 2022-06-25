import MainPage from './MainPage/MainPage';
import BookIdPage from './BookIdPage/BookIdPage';
import Page404 from './Page404/Page404';

export const paths = {
	mainPage: '/future-test-project',
	bookIdPage: '/future-test-project/:bookId',
	page404: '*',
};

export const routes = [
	{
		path: paths.mainPage,
		component: MainPage,
		exact: true,
	},
	{
		path: paths.bookIdPage,
		component: BookIdPage,
		exact: true,
	},
	{
		path: paths.page404,
		component: Page404,
		exact: true,
	},
];
