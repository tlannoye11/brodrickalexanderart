import asyncHandler from 'express-async-handler';
import Product from '../models/productModel.js';

const getProducts = asyncHandler(async (request, response) => {
	const products = await Product.find({});

	response.json(products);
});

const getProductById = asyncHandler(async (request, response) => {
	const product = await Product.findById(request.params.id);

	if (product) {
		response.json(product);
	} else {
		response.status(404);
		throw new Error('Product not found');
	}
});

const deleteProduct = asyncHandler(async (request, response) => {
	const product = await Product.findById(request.params.id);

	if (product) {
		await product.remove();
		response.json({ message: 'Product remove' });
	} else {
		response.status(404);
		throw new Error('Product not found');
	}
});

export { getProducts, getProductById, deleteProduct };
