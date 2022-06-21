import { Box, Grid, Paper, Typography } from '@mui/material';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import { FormEvent, useState } from 'react';
import { Categories, Filters, Options, options } from '../../data/options';

const SearchPanel = () => {
	const [search, setSearch] = useState('');
	const [category, setCategory] = useState<Options>(Categories.ALL);
	const [filter, setFilter] = useState<Options>(Filters.NEWEST);

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		console.log(search);
	};

	return (
		<Box
			sx={{
				textAlign: 'center',
				mx: 'auto',
			}}
			component={'form'}
			maxWidth={'sm'}
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
				<Grid container spacing={2}>
					<Grid item xs={12}>
						<Input
							name={'search'}
							value={search}
							setValue={setSearch}
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
							value={filter}
							setValue={setFilter}
						/>
					</Grid>
				</Grid>
			</Paper>
		</Box>
	);
};

export default SearchPanel;
