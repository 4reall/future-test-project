import { Button } from '@mui/material';
import { ReactNode } from 'react';

interface CircledButtonProps {
	children?: ReactNode;
	handleClick?: () => void;
}

const styles = {
	borderRadius: '50%',
	p: 1,
	minWidth: { sm: 50, xs: 30 },
	minHeight: { sm: 50, xs: 30 },
	position: 'absolute',
	right: 10,
	top: 10,
};

const CircledButton = ({ children, handleClick }: CircledButtonProps) => {
	return (
		<Button onClick={handleClick} variant="contained" sx={styles}>
			{children}
		</Button>
	);
};

export default CircledButton;
