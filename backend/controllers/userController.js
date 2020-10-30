import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

const authUser = asyncHandler(async (request, response) => {
	const { email, password } = request.body;
	console.log(`Email: ${email}, pass: ${password}`);
	console.log('request body', request.body);
	console.log('Email:', request.body.email);

	const user = await User.findOne({ email });

	if (user && (await user.matchPassword(password))) {
		response.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
		});
	} else {
		response.status(401);
		throw new Error('Invalid email or password');
	}
});

export { authUser };
