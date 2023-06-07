// pages/api/civitas.js

import db from '@/utils/db';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const results = await db.query(
				`
                    SELECT id, nama, nomor_identitas, kategori_civitas
                    FROM civitas
                `
			);

			return res.status(200).json(results);
		} catch (error) {
			return res.status(500).json({ message: 'Terjadi kesalahan pada server.' });
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
}
