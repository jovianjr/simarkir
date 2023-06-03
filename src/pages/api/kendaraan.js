import db from '@/utils/db';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const query = `
				SELECT row_number() OVER () AS number, c.nama, c.kategori_civitas, c.nomor_identitas, k.jenis_kendaraan, k.nomor_kendaraan
				FROM kendaraan k
				JOIN civitas c ON k.civitas_id = c.id
			`;
			const result = await db.any(query);

			res.status(200).json(result);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal server error' });
		}
	} else {
		res.status(405).json({ message: 'Method not allowed' });
	}
}
