import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import SearchPanel from './SearchPanel';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';

describe('Search Panel Test', () => {
	const user = userEvent.setup();

	test('validation works', async () => {
		render(
			<Provider store={store}>
				<SearchPanel />
			</Provider>
		);
		const input = screen.getByPlaceholderText('Enter book name');
		const button = screen.getByTestId('SearchIcon');
		await user.click(button);
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('aria-invalid', 'true');
	});
});
