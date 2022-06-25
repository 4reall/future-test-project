import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Paper,
	Typography,
} from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

import MainContainer from '../../features/Containers/MainContainer';
import CircledButton from '../UI/CircledButton';

import { Book } from '../../api/types';

import { createTypographyList } from '../../helpers/helpers';
import styles from './styles';

interface BookCardProps {
	book: Book | undefined;
	handleClick: () => void;
}

const BookIdPage = ({ book, handleClick }: BookCardProps) => {
	if (!book) return <></>;

	const authors = createTypographyList({
		list: book?.volumeInfo.authors,
		variant: 'overline',
		component: 'div',
		sx: styles.authors,
	});

	const categories = createTypographyList({
		list: book.volumeInfo.categories,
		variant: 'overline',
		component: 'div',
		sx: styles.categories,
	});

	return (
		<MainContainer>
			<Card sx={styles.card}>
				<Box sx={styles.imgWrapper}>
					<CardMedia
						image={book.volumeInfo.imageLinks.thumbnail}
						component={'img'}
						sx={styles.img}
					/>
				</Box>
				<CardContent sx={styles.cardContent}>
					{categories}
					<Typography variant="h5" sx={styles.title}>
						{book.volumeInfo.title}
					</Typography>
					<Paper sx={styles.descriptionWrapper}>
						<Typography variant="body1" sx={styles.description}>
							{book?.volumeInfo.description ||
								'This book does not have a description'}
						</Typography>
					</Paper>
					{authors}
				</CardContent>
				<CircledButton handleClick={handleClick}>
					<ArrowBack />
				</CircledButton>
			</Card>
		</MainContainer>
	);
};

export default BookIdPage;
