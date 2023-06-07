import db from '@/utils/db';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const parkir_id = 100;
			const query = `
				select 
					(select count(lk.id) from log_kendaraan lk, kendaraan k where 
						lk.kendaraan_id = k.id
						and DATE_TRUNC('day', lk.waktu_masuk) = CURRENT_DATE
						and lk.waktu_keluar is null
						and k.jenis_kendaraan = 'motor'
					) as count,
					'motor' as jenis_kendaraan,
					p.nama,
					p.kapasitas
				from parkir p
				where p.id = ${parkir_id}
				union all 
				select 
					(select count(lk.id) from log_kendaraan lk, kendaraan k where 
						lk.kendaraan_id = k.id
						and DATE_TRUNC('day', lk.waktu_masuk) = CURRENT_DATE
						and lk.waktu_keluar is null
						and k.jenis_kendaraan = 'mobil'
					) as count,
					'mobil' as jenis_kendaraan,
					p.nama,
					p.kapasitas
				from parkir p
				where p.id = ${parkir_id}
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
