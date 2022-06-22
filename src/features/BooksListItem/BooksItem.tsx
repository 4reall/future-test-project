import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import img from '../../assets/img.png';

interface BooksItemProps {
	title: string;
	description: string;
	authors: string[];
	categories: string[];
	thumbnail: string;
}

const BooksItem = ({
	title,
	description,
	authors,
	categories,
	thumbnail,
}: BooksItemProps) => {
	return (
		<Card
			variant="outlined"
			sx={{
				minHeight: '100%',
				p: 2,
				background: '',
				boxShadow: 3,
				// s
			}}
		>
			<CardMedia
				component={'img'}
				alt={'book'}
				image={thumbnail}
				sx={{
					mx: 'auto',
					width: 'auto',
					height: '8rem',
					objectFit: 'contain',
					boxShadow: 3,
					mb: 'auto',
				}}
			/>
			<CardContent>
				<Typography variant={'overline'}>
					{categories && categories[0]}
				</Typography>
				<Typography variant={'body2'}>{title}</Typography>
				<Typography variant={'overline'}>{authors}</Typography>
			</CardContent>
		</Card>
	);
};

export default BooksItem;
