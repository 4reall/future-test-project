import { Button, Grid, Typography } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import { ReactNode } from 'react';

import { Statuses } from '../../types';

interface ContentProps {
	totalItems: number;
	items: ReactNode[];
	handleButtonClick: () => void;
	booksLoadingStatus: Statuses;
	isLastPage: boolean;
}

const Content = ({
	totalItems,
	items,
	handleButtonClick,
	booksLoadingStatus,
	isLastPage,
}: ContentProps) => {
	return (
		<>
			<Typography variant="h5" align={'center'} mb={2}>
				Total results: {totalItems} (without categories filters)
			</Typography>
			<Grid container spacing={2}>
				<TransitionGroup component={null}>{items}</TransitionGroup>
			</Grid>
			<Button
				variant={'outlined'}
				sx={{
					textTransform: 'uppercase',
					mx: 'auto',
					display: 'block',
					mt: 3,
				}}
				onClick={handleButtonClick}
				disabled={booksLoadingStatus === Statuses.LOADING || isLastPage}
			>
				Load more
			</Button>
		</>
	);
};

export default Content;
