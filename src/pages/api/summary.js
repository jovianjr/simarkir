import db from '@/utils/db';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const query = `
			SELECT COUNT(lk.id), k.jenis_kendaraan, p.nama, p.kapasitas
			FROM log_kendaraan lk
			JOIN kendaraan k ON lk.kendaraan_id = k.id
			JOIN parkir p ON lk.parkiran_id = p.id
			WHERE 
			DATE_TRUNC('day', lk.waktu_masuk) = CURRENT_DATE
			and DATE_TRUNC('day', lk.waktu_keluar) = CURRENT_DATE  
			GROUP BY k.jenis_kendaraan, p.nama, p.kapasitas
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
