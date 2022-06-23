import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import img from '../../assets/img.png';
import { useMemo } from 'react';

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
	const renderAuthors = () => {
		return authors.map((author, i) => (
			<Typography
				key={i}
				variant={'overline'}
				component={'div'}
				sx={{ textDecoration: 'underline', lineHeight: 1.5 }}
			>
				{author}
			</Typography>
		));
	};
	return (
		<Card
			variant="outlined"
			sx={{
				minHeight: '100%',
				p: 2,
				background: '',
				boxShadow: 3,
			}}
		>
			<CardMedia
				component={'img'}
				alt={title}
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
				<Typography
					variant={'overline'}
					sx={{ textDecoration: 'underline' }}
				>
					{categories && categories[0]}
				</Typography>
				<Typography variant={'body2'} mb={1}>
					{title}
				</Typography>
				{authors && renderAuthors()}
			</CardContent>
		</Card>
	);
};

export default BooksItem;
