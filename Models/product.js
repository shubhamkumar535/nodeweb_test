const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
	{
		id: {
			type: String,
			trim: true
		},
		name: {
			type: String,
			trim: true
		},
		description: {
			type: String,
			trim: true
		},
		repeat: {
			type: String,
			trim: true
		},
		isDeleted: {type: Boolean, default: false}
	},
	{ minimize: false },
);
const product = mongoose.model('Product', ProductSchema);
module.exports = product;
