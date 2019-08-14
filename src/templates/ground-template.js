import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Ground = ({ data }) => {
	return (
		<Layout>
			<div>{data.otrJson.ground}</div>
		</Layout>
	);
};

export default Ground;

export const groundQuery = graphql`
	query groundQuery($slug: String!) {
		otrJson(slug: { eq: $slug }) {
			slug
			ground
			team
			url
			season
			league
			tier
			opponent
			ratings {
				Atmosphere
				Cost
				Facilities
				Food___Drink
				Total
			}
		}
	}
`;