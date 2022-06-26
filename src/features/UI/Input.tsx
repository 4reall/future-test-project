import { Input as InputMUI } from '@mui/material';
import { SetStateAction, Dispatch, ChangeEvent, memo } from 'react';

interface InputProps {
	name: string;
	value: string;
	setValue: Dispatch<SetStateAction<string>>;
	isValid: boolean;
}

const Input = memo(({ name, value, setValue, isValid }: InputProps) => {
	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};
	return (
		<InputMUI
			error={!isValid}
			name={name}
			fullWidth
			placeholder="Enter book name"
			value={value}
			onChange={handleChange}
		/>
	);
});

export default Input;
