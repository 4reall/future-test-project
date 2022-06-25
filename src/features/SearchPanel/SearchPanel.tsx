import { Box, Grid, SxProps } from '@mui/material';

import Input from '../UI/Input';
import Select from '../UI/Select';

import useSearchPanel from './useSearchPanel';
import { options } from './options';

import { Statuses } from '../../types';

interface SearchPanelContentProps {
	sx?: SxProps;
}

const SearchPanel = ({ sx }: SearchPanelContentProps) => {
	const {
		booksLoadingStatus,
		isValid,
		searchQuery,
		setSearchQuery,
		category,
		setCategory,
		sortOption,
		setSortOption,
		handleSubmit,
	} = useSearchPanel();

	return (
		<Box component={'form'} onSubmit={handleSubmit} sx={{ ...sx }}>
			<Grid
				container
				spacing={2}
				sx={{ maxWidth: 'sm', mx: { sm: 'auto' } }}
			>
				<Grid item xs={12}>
					<Input
						isDisabled={booksLoadingStatus === Statuses.LOADING}
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
		</Box>
	);
};

export default SearchPanel;
