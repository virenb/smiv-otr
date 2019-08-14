import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const Info = () => (
	<StaticQuery
		query={graphql`
			query MyQuery {
				allOtrJson {
					edges {
						node {
							league
							opponent
							ratings {
								Atmosphere
								Cost
								Facilities
								Food___Drink
								Total
							}
							season
							team
							tier
							url
							ground
							id
						}
					}
				}
			}
		`}
		render={(data) => (
			<div>
				<ul>
					{data.allOtrJson.edges.map((x) => {
						console.log(x.node);
						return <li key={x.node.id}>{x.node.ground}</li>;
					})}
				</ul>
			</div>
		)}
	/>
);

export default Info;
