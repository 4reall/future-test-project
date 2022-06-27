import { Box, Typography } from '@mui/material';
import { ErrorOutline } from '@mui/icons-material';

import { ReactNode } from 'react';

interface ErrorMessageProps {
	children?: ReactNode;
	message: string;
}

const ErrorMessage = ({ message, children }: ErrorMessageProps) => {
	return (
		<Box sx={{ textAlign: 'center', position: 'relative' }}>
			<ErrorOutline
				sx={{ width: { md: 100, xs: 50 }, height: { md: 100, xs: 50 } }}
			/>
			<Typography variant="h4">Oops!</Typography>
			<Typography variant="h5">{message}</Typography>
			{children}
		</Box>
	);
};

export default ErrorMessage;
