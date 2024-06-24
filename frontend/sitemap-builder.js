require("babel-register")({
  presets: ["es2015", "react"]
});

const Sitemap = require('react-router-sitemap').default;
const router = require('./sitemap-routes').default;

(
	new Sitemap(router)
		.build('https://art-bid.ru')
		.save('./public/sitemap.xml')
);