require('@babel/register')({
	...require('./babel.config.js')
})

require.extensions['.css'] = function () {
  return null;
};

require.extensions['.png'] = function () {
  return null;
};

require.extensions['.svg'] = function () {
  return null;
};

require.extensions['.jpg'] = function () {
  return null;
};

const Sitemap = require('react-router-sitemap').default;
const router = require('./src/routes/MasterRoute').default;

(
	new Sitemap(router)
		.build('https://art-bid.ru', { limitCountPaths: 5000 })
		.save('./sitemap.xml', '/static/')
);