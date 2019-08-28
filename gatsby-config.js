module.exports = {
	siteMetadata: {
		title: `SMIV'S ON THE ROAD`,
		description: `A website for the On The Road series, created by Smiv`,
		author: `@virengb`
	},
	plugins: [
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `./src/data/`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Poppins`,
						subsets: [ `latin` ],
						variants: [ `400`, `700i`, `800i` ]
					}
				]
			}
		}
	]
};
