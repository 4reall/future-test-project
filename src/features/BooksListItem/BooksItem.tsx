import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { createTypographyList } from '../../helpers/helpers';
import styles from './styles';

interface BooksItemProps {
	id: string;
	title: string;
	description: string;
	authors: string[];
	categories: string[];
	thumbnail: string;
	handleClick: () => void;
}

const BooksItem = ({
	title,
	authors,
	categories,
	thumbnail,
	handleClick,
}: BooksItemProps) => {
	const authorsList = createTypographyList({
		list: authors,
		variant: 'overline',
		component: 'div',
		sx: styles.authors,
	});
	return (
		<Card onClick={handleClick} variant="outlined" sx={styles.card}>
			<CardMedia
				component={'img'}
				alt={title}
				image={thumbnail}
				sx={styles.img}
			/>
			<CardContent>
				<Typography variant={'overline'} sx={styles.categories}>
					{categories && categories[0]}
				</Typography>
				<Typography variant={'body2'} mb={1}>
					{title}
				</Typography>
				{authorsList}
			</CardContent>
		</Card>
	);
};

export default BooksItem;
