import ErrorMessage from '../../features/ErrorMessage/ErrorMessage';
import MainContainer from '../../features/Containers/MainContainer';

const Page404 = () => {
	return (
		<MainContainer>
			<ErrorMessage message="There is no page with such URL" />
		</MainContainer>
	);
};

export default Page404;
