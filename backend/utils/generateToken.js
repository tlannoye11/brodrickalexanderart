import jwt from 'jsonwebtoken';

const generateTokenById = (id) => {
	return jwt.sign({ id }, process.env.JWT_SECRET, {
		expiresIn: '30d',
	});
};

const generateTokenByName = (name, email, password) => {
	return jwt.sign({ name, email, password }, process.env.JWT_SECRET, {
		expiresIn: '30m',
	});
};

export { generateTokenById, generateTokenByName };
