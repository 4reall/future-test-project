const styles = {
	card: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'center',
		alignItems: { md: 'stretch', xs: 'center' },
		flexDirection: { md: 'row', xs: 'column' },
	},
	imgWrapper: {
		p: { md: 5, xs: 3 },
		width: { md: 1 / 3 },
		height: 'fit-content',
		background: '#D1CECD',
	},
	img: { boxShadow: 3, mx: 'auto', width: { md: 1 } },
	cardContent: {
		width: { md: 2 / 3, xs: 1 },
		textAlign: { md: 'left', xs: 'center' },
	},
	title: {
		my: 2,
		fontSize: { lg: '2rem', md: '1.5rem' },
	},
	descriptionWrapper: {
		boxShadow: 3,
		mb: 2,
		p: 2,
		mx: 'auto',
		textAlign: 'left',
	},
	description: {
		fontSize: { lg: '1.25rem', md: '1rem' },
	},
	authors: {
		fontSize: { lg: '1.25rem', md: '1rem' },
		textDecoration: 'underline',
		lineHeight: 1.5,
	},
	categories: {
		fontSize: { lg: '1.25rem', md: '1rem' },
		textDecoration: 'underline',
		lineHeight: 1.5,
	},
	button: {
		borderRadius: '50%',
		p: 1,
		minWidth: { sm: 50, xs: 30 },
		minHeight: { sm: 50, xs: 30 },
		position: 'absolute',
		right: 10,
		top: 10,
	},
};
export default styles;
