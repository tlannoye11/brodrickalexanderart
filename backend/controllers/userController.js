import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

const authUser = asyncHandler(async (request, response) => {
	const { email, password } = request.body;
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

const getUserProfile = asyncHandler(async (request, response) => {
	const user = await User.findById(request.user._id);

	if (user) {
		response.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
		});
	} else {
		response.status(404);
		throw new Error('User not found');
	}
});

export { authUser, getUserProfile };
