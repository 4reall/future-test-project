import { Box, IconButton, Input as InputMUI, SxProps } from '@mui/material';
import { Search } from '@mui/icons-material';
import { SetStateAction, Dispatch, ChangeEvent } from 'react';

interface InputProps {
	name: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	isValid: boolean;
	sx?: SxProps;
}

const Input = ({ name, value, setValue, isValid, sx }: InputProps) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};
	return (
		<Box
			sx={{
				display: 'flex',
				...sx,
			}}
		>
			<InputMUI
				error={!isValid}
				name={name}
				fullWidth
				placeholder="Enter book name"
				value={value}
				onChange={handleChange}
			/>
			<IconButton type={'submit'}>
				<Search />
			</IconButton>
		</Box>
	);
};

export default Input;
