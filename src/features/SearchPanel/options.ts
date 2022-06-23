export enum Categories {
	ALL = 'All',
	ART = 'Art',
	BIOGRAPHY = 'Biography',
	COMPUTERS = 'Computers',
	HISTORY = 'History',
	MEDICAL = 'Medical',
	POETRY = 'Poetry',
}

export enum SortOptions {
	RELEVANCE = 'relevance',
	NEWEST = 'newest',
}

export type Options = Categories | SortOptions;

type OptionsConfig = {
	categories: Categories[];
	filters: SortOptions[];
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
	filters: [SortOptions.NEWEST, SortOptions.RELEVANCE],
};
