import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
	return (
		<Helmet>
			<title>{title}</title>
			<meta name='description' content={description} />
			<meta name='keyword' content={keywords} />
		</Helmet>
	);
};

Meta.defaultProps = {
	title: 'Brodrick Alexander Art',
	description: 'Life Through Art - Original and Commissioned Oil/Digital Art',
	keywords:
		'art, commissioned art, oil, digital art, palette knife creations',
};

export default Meta;
