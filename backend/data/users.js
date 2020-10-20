import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Admin',
        email: 'admin@test.com',
        password: bcrypt.hashSync('123'),
        isAdmin: true,
    },
    {
        name: 'John Doe',
        email: 'john@test.com',
        password: bcrypt.hashSync('123'),
    },
    {
        name: 'Jane Doe',
        email: 'jane@test.com',
        password: bcrypt.hashSync('123'),
    },
];

export default users;
