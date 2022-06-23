import { Box, Grid, Paper, SxProps, Typography } from '@mui/material';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import { FormEvent, useState } from 'react';
import { Categories, SortOptions, Options, options } from './options';
import { useAppDispatch } from '../../hooks/hooks';
import {
	changeActiveCategory,
	changeLastQuery,
	fetchBooksByQuery,
	setIsNewQuery,
} from '../BooksList/booksSlice';

interface SearchPanelProps {
	sx?: SxProps;
}

const SearchPanel = ({ sx }: SearchPanelProps) => {
	const [searchQuery, setSearchQuery] = useState('');
	const [category, setCategory] = useState(Categories.ALL);
	const [sortOption, setSortOption] = useState(SortOptions.NEWEST);
	const [isValid, setIsValid] = useState(true);

	const dispatch = useAppDispatch();

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (searchQuery.trim().length < 1) {
			setIsValid(false);
			return;
		}
		setIsValid(true);
		dispatch(setIsNewQuery());
		dispatch(changeActiveCategory(category));
		dispatch(changeLastQuery(searchQuery));
		dispatch(fetchBooksByQuery({ q: searchQuery, orderBy: sortOption }));
	};

	return (
		<Box
			sx={{
				textAlign: 'center',
				mx: 'auto',
				...sx,
			}}
			component={'form'}
			maxWidth={'lg'}
			onSubmit={handleSubmit}
		>
			<Typography
				variant={'h3'}
				component="h1"
				mb={{ lg: 4, md: 3, xs: 2 }}
			>
				Search for books
			</Typography>
			<Paper sx={{ p: { lg: 3, xs: 2 } }}>
				<Grid
					container
					spacing={2}
					sx={{ maxWidth: 'sm', mx: { sm: 'auto' } }}
				>
					<Grid item xs={12}>
						<Input
							isValid={isValid}
							name={'search'}
							value={searchQuery}
							setValue={setSearchQuery}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Select
							label={'categories'}
							name={'categories'}
							options={options.categories}
							value={category}
							setValue={setCategory}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Select
							label={'sorting by'}
							name={'filters'}
							options={options.filters}
							value={sortOption}
							setValue={setSortOption}
						/>
					</Grid>
				</Grid>
			</Paper>
		</Box>
	);
};

export default SearchPanel;
