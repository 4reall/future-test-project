import { Container, Paper } from '@mui/material';
import { ReactNode } from 'react';

interface MainContainerProps {
	children?: ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
	return (
		<Container
			sx={{
				py: { lg: '2rem', md: '1.5rem', xs: '1rem' },
			}}
			maxWidth={'lg'}
		>
			<Paper sx={{ p: { lg: 3, xs: 2 } }}>{children}</Paper>
		</Container>
	);
};

export default MainContainer;
