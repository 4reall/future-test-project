import ErrorMessage from '../../features/ErrorMessage/ErrorMessage';
import MainContainer from '../../features/Containers/MainContainer';
import { useNavigate } from 'react-router-dom';
import { paths } from '../paths';
import { ArrowBack } from '@mui/icons-material';
import CircledButton from '../../features/UI/CircledButton';

const Page404 = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate(paths.mainPage);
	};
	return (
		<MainContainer>
			<ErrorMessage message="There is no page with such URL">
				<CircledButton handleClick={handleClick}>
					<ArrowBack />
				</CircledButton>
			</ErrorMessage>
		</MainContainer>
	);
};

export default Page404;
