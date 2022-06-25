import { Box, Typography } from '@mui/material';
import { ArrowBack, ErrorOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

import CircledButton from '../UI/CircledButton';
import { paths } from '../../pages/paths';

interface ErrorMessageProps {
	message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(paths.mainPage);
	};
	return (
		<Box sx={{ textAlign: 'center', position: 'relative' }}>
			<ErrorOutline
				sx={{ width: { md: 100, xs: 50 }, height: { md: 100, xs: 50 } }}
			/>
			<Typography variant="h4">Oops!</Typography>
			<Typography variant="h5">{message}</Typography>
			<CircledButton handleClick={handleClick}>
				<ArrowBack />
			</CircledButton>
		</Box>
	);
};

export default ErrorMessage;
