import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import img from '../../assets/img.png';

const BooksItem = () => {
	return (
		<Card
			variant="outlined"
			sx={{
				minHeight: '16rem',
				p: 2,
				background: '',
				boxShadow: 3,
			}}
		>
			<CardMedia
				component={'img'}
				alt={'book'}
				image={img}
				sx={{
					mx: 'auto',
					width: 'auto',
					height: '8rem',
					objectFit: 'contain',
					boxShadow: 3,
				}}
			/>
			<CardContent>
				<Typography variant={'overline'}>Computer</Typography>
				<Typography variant={'body2'}>Descr</Typography>
				<Typography variant={'overline'}>Author</Typography>
			</CardContent>
		</Card>
	);
};

export default BooksItem;
