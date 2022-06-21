export enum Categories {
	ALL = 'all',
	ART = 'art',
	BIOGRAPHY = 'biography',
	COMPUTERS = 'computers',
	HISTORY = 'history',
	MEDICAL = 'Medical',
	POETRY = 'poetry',
}

export enum Filters {
	RELEVANCE = 'relevance',
	NEWEST = 'newest',
}

export type Options = Categories | Filters;

type OptionsConfig = {
	categories: Categories[];
	filters: Filters[];
};

export const options: OptionsConfig = {
	categories: [
		Categories.ALL,
		Categories.ART,
		Categories.BIOGRAPHY,
		Categories.COMPUTERS,
		Categories.HISTORY,
		Categories.MEDICAL,
		Categories.POETRY,
	],
	filters: [Filters.NEWEST, Filters.RELEVANCE],
};
