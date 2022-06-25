import { Categories, SortOptions } from '../../types';

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
	filters: [SortOptions.RELEVANCE, SortOptions.NEWEST],
};
