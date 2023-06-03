import db from '@/utils/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
	if (req.method === 'POST') {
		const { username, password } = req.body;

		// Retrieve the user from the database based on the username
		const user = await db.oneOrNone('SELECT * FROM account WHERE username = $1', username);

		if (!user) {
			return res.status(401).json({ message: 'Invalid username or password' });
		}

		// Compare the provided password with the hashed password stored in the database
		const isPasswordValid = await bcrypt.compare(password, user.password);

		if (!isPasswordValid) {
			return res.status(401).json({ message: 'Invalid username or password' });
		}

		// Generate a JWT token
		const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
			expiresIn: '1h',
		});

		return res.status(200).json({ message: 'Login successful', token });
	}
}
