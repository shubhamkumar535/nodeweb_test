var express = require('express');
var router = express.Router();
const Product = require('../Models/product');
const mongoose = require('mongoose');

module.exports = function (router) {

	// For Add Product
	router.post('/add-product', function (req, res, next) {
		let name = req.body.name;
		let description = req.body.description;
		let repeat = req.body.repeat;
		if (name === null || name === undefined) {
			res.send(400, 'Please send name');
		} else if (description === null || description === undefined) {
			res.send(400, 'Please send description');
		} else if (repeat === null || repeat === undefined) {
			res.send(400, 'Please send valid params');
		}
		Product.create({ name: name, description: description, repeat: repeat }).then(response => {
			res.send(200, response = {'status': 200, 'return': 'Product Add Successfully', 'Data': response});
			return next();
		}).catch(error => {
			return error;
		});
	});
	// For get product
	router.get('/get-products', function (req, res, next) {
		Product.find({}).then(response => {
			res.send(200, response = {'status': 200, 'return': 'Product List', 'Data': response});
			return next();
		}).catch(error => {
			return error;
		});
	});

	// for update product (checked product)
	router.put('/check-product/:id', function (req, res, next) {
		let query = { _id: req.params.id };
		Product.findOneAndUpdate(query, { $set: {isDeleted: req.body.isDeleted} }, {new: true}).then(response => {
			res.send(200, 'Product update Successfully');
			return next();
		}).catch(error => {
			return error;
		});
	});

	// For get checked product
	router.get('/get-checked-product', function (req, res, next) {
		Product.find({isDeleted: true}).then(response => {
			res.send(200, response = {'status': 200, 'return': 'Product List', 'Data': response});
			return next();
		}).catch(error => {
			return error;
		});
	});
};

