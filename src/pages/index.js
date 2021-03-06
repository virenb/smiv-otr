import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query ListQuery {
			allOtrJson {
				edges {
					node {
						slug
						team
						ground
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<SEO />
			<div>
				<ul>
					{data.allOtrJson.edges.map((x) => {
						return (
							<li key={x.node.slug}>
								<Link to={x.node.slug}>
									{x.node.team} - {x.node.ground}
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</Layout>
	);
};

export default IndexPage;
