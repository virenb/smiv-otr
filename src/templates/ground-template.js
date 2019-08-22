import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

const Ground = ({ data }) => {
	return (
		<Layout>
			<header>
				<h1>
					{data.otrJson.team} - {data.otrJson.ground}
				</h1>
			</header>
			<section>
				<p>
					Match: {data.otrJson.team} vs. {data.otrJson.opponent}
				</p>
				<p>
					League: {data.otrJson.league} (Tier: {data.otrJson.tier})
				</p>
			</section>
			<section>
				<p>
					YouTube Link:{' '}
					<a href={data.otrJson.url} target="_blank">
						{data.otrJson.url}
					</a>
				</p>
			</section>
			<section>
				<h4>Smiv's Ratings</h4>
				<ul>
					<li>
						<span role="img" aria-label="loudspeaker">
							📢
						</span>
						<span role="img" aria-label="stadium">
							🏟️
						</span>
						Atmosphere: {data.otrJson.ratings.Atmosphere}
					</li>
					<li>
						<span role="img" aria-label="soccer">
							⚽
						</span>
						<span role="img" aria-label="tickets">
							🎟️
						</span>
						Facilities: {data.otrJson.ratings.Facilities}
					</li>
					<li>
						<span role="img" aria-label="fries">
							🍟
						</span>
						<span role="img" aria-label="hamburger">
							🍔
						</span>
						Food & Drink: {data.otrJson.ratings.Food___Drink}
					</li>
					<li>
						<span role="img" aria-label="pound">
							💷
						</span>
						<span role="img" aria-label="moneybag">
							💰
						</span>
						Cost: {data.otrJson.ratings.Cost}
					</li>
					<li>
						<span role="img" aria-label="trophy">
							🏆
						</span>
						<span role="img" aria-label="bar-chart">
							📊
						</span>
						Total: {data.otrJson.ratings.Total}
					</li>
				</ul>
			</section>
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
