module.exports = {
	name: 'API',
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 3000,
	base_url: process.env.BASE_URL || 'https://localhost:3000',
	db: {
		uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/listingapp'
	}
};
