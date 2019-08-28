import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({ siteTitle }) => (
	<header
		style={{
			marginBottom: `1.45rem`
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `1.45rem 1.0875rem`
			}}
		>
			<h1
				style={{
					margin: 0
				}}
			>
				<Link
					to="/"
					style={{
						textDecoration: `none`,
						backgroundColor: 'lightgray',
						color: 'black',
						padding: '0 0.5rem',
						fontFamily: 'Poppins',
						fontStyle: 'italic'
					}}
				>
					{siteTitle}
				</Link>
			</h1>
		</div>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: ``
};

export default Header;
