import db from '@/utils/db';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const query = `
				SELECT row_number() OVER () AS number, k.id, c.nama, c.kategori_civitas, c.nomor_identitas, k.jenis_kendaraan, k.nomor_kendaraan
				FROM kendaraan k
				JOIN civitas c ON k.civitas_id = c.id
			`;
			const result = await db.any(query);

			res.status(200).json(result);
		} catch (error) {
			console.error(error);
			res.status(500).json({ message: 'Internal server error' });
		}
	} else if (req.method === 'POST') {
		const { jenis_kendaraan, nomor_kendaraan, civitas_id } = req.body;

		if (!jenis_kendaraan || !nomor_kendaraan || !civitas_id) {
			return res.status(400).json({ message: 'Mohon lengkapi semua field.' });
		}

		try {
			const result = await db.one(
				`INSERT INTO kendaraan (jenis_kendaraan, nomor_kendaraan, civitas_id) 
					VALUES ($/jenis_kendaraan/, $/nomor_kendaraan/, $/civitas_id/) 
					RETURNING *`,
				{
					jenis_kendaraan,
					nomor_kendaraan,
					civitas_id,
				}
			);

			return res
				.status(200)
				.json({ message: 'Data kendaraan berhasil ditambahkan.', data: result });
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: 'Terjadi kesalahan pada server.', data: null });
		}
	} else if (req.method === 'PUT') {
		const { jenis_kendaraan, nomor_kendaraan, id } = req.body;

		if (!jenis_kendaraan || !nomor_kendaraan || !id) {
			return res.status(400).json({ message: 'Mohon lengkapi semua field.' });
		}

		try {
			const result = await db.one(
				`UPDATE kendaraan set jenis_kendaraan=$/jenis_kendaraan/, nomor_kendaraan=$/nomor_kendaraan/ where id=$/id/  RETURNING *`,
				{
					id,
					jenis_kendaraan,
					nomor_kendaraan,
				}
			);
			return res.status(200).json({ message: 'Data kendaraan berhasil diperbarui.', data: result });
		} catch (error) {
			console.log(error);
			return res.status(500).json({ message: 'Terjadi kesalahan pada server.', data: null });
		}
	} else {
		res.status(405).json({ message: 'Method not allowed', data: null });
	}
}
