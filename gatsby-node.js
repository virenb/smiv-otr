const path = require('path');

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	const groundTemplate = path.resolve(`src/templates/ground-template.js`);
	return graphql(
		`
      query loadOtrQuery {
        allOtrJson {
          edges {
            node {
              slug
              id
            }
          }
        }
      }
    `,
		{ limit: 1000 }
	).then((result) => {
		if (result.errors) {
			throw result.errors;
		}
		result.data.allOtrJson.edges.forEach((edge) => {
			createPage({
				path: `${edge.node.slug}`,
				component: groundTemplate,
				context: {
					slug: edge.node.slug
				}
			});
		});
	});
};
