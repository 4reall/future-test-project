import { Box, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

const ErrorMessage = () => {
	return (
		<Box sx={{ textAlign: 'center' }}>
			<ErrorOutline
				sx={{ width: { md: 100, xs: 50 }, height: { md: 100, xs: 50 } }}
			/>
			<Typography variant="h4">Oops!</Typography>
			<Typography variant="h5">Something went wrong.</Typography>
		</Box>
	);
};

export default ErrorMessage;
