import db from '@/utils/db';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const query = `
			select
				COUNT(lk.id),
				k.jenis_kendaraan,
				p.nama,
				p.kapasitas
			from
				log_kendaraan lk
			join kendaraan k on
				lk.kendaraan_id = k.id
			join parkir p on
				lk.parkiran_id = p.id
			where 
				DATE_TRUNC('day', lk.waktu_masuk) = CURRENT_DATE
				and lk.waktu_keluar is null
			group by
				k.jenis_kendaraan,
				p.nama,
				p.kapasitas
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
