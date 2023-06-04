import db from '@/utils/db';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req, res) {
	if (req.method !== 'GET') {
		return res.status(405).json({ error: 'Method Not Allowed' });
	}

	// Get the token from the query parameters
	const { token } = req.query;

	if (!token) {
		return res.status(401).json({ error: 'Unauthorized' });
	}

	try {
		const decodedToken = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);

		const { userId } = decodedToken;

		const query = `select a.username, r.name as role_name  from account a, role r where a.role_id = r.id and a.id = ${userId}`;
		const result = await db.any(query);

		res.status(200).json(result);
	} catch (error) {
		return res.status(401).json({ error: 'Invalid token' });
	}
}
