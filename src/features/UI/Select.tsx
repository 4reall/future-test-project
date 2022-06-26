import { Dispatch, memo, SetStateAction } from 'react';
import {
	Box,
	MenuItem,
	Select as SelectMUI,
	SelectChangeEvent,
	SxProps,
	Typography,
} from '@mui/material';
import { Options } from '../SearchPanel/options';

interface SelectProps {
	label: string;
	name: string;
	options: Options[];
	value: Options;
	setValue: Dispatch<SetStateAction<any>>;
	sx?: SxProps;
}

const Select = memo(
	({ label, name, options, value, setValue, sx }: SelectProps) => {
		const handleChange = (event: SelectChangeEvent) => {
			setValue(event.target.value as Options);
		};
		const items = options.map((option, i) => (
			<MenuItem key={i} value={option}>
				{option}
			</MenuItem>
		));
		return (
			<Box>
				<SelectMUI
					name={name}
					sx={{
						width: 1,
						...sx,
					}}
					value={value}
					onChange={handleChange}
				>
					{items}
				</SelectMUI>
				<Typography variant={'overline'}>{label}</Typography>
			</Box>
		);
	}
);

export default Select;
