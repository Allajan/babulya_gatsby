const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://babulya-gatsby.netlify.com/",
		"gaTrackingId": null,
		"trailingSlash": false
	},
	"header": {
		"logo": "https://www.babulya.com.ua/wp-content/uploads/2019/11/favicon_result.jpg",
		"logoLink": "",
		"title": "Babulya",
		"githubUrl": "",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": false,
			"indexName": "",
			"algoliaAppId": process.env.GATSBY_ALGOLIA_APP_ID,
			"algoliaSearchKey": process.env.GATSBY_ALGOLIA_SEARCH_KEY,
			"algoliaAdminKey": process.env.ALGOLIA_ADMIN_KEY
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction", // add trailing slash if enabled above
    		"/codeblock",
			"/2-codeblock" 
		],
    	"collapsedNav": [
      		"/codeblock", // add trailing slash if enabled above
			"/2-codeblock" // add trailing slash if enabled above
    	],
		"links": [
			{ "text": "Babulya", "link": ""},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Babulya",
		"description": "Documentation Babulya ",
		"ogImage": null,
		"docsLocation": "",
		"favicon": "https://www.babulya.com.ua/wp-content/uploads/2019/11/favicon_result.jpg"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Babulya",
			"short_name": "Babulya",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
