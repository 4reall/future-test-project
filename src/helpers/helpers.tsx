import { SxProps, Typography, TypographyVariant } from '@mui/material';

interface CreateTypographyListProps {
	list: string[] | undefined;
	sx?: SxProps;
	component?: string;
	variant?: TypographyVariant;
}

export const createTypographyList = ({
	list,
	...args
}: CreateTypographyListProps) => {
	if (list) {
		return list.map((item, i) => (
			<Typography key={i} {...args}>
				{item}
			</Typography>
		));
	}
	return [];
};

export const concatQuery = (query: string, terms: string[]) => {
	return `${query}+${terms.map((item) => item.toLowerCase()).join('+')}`;
};
