import db from '@/utils/db';

export default async function handler(req, res) {
	if (req.method === 'GET') {
		try {
			const query = `
                SELECT 
                    'all' as keterangan,
                    SUM(CASE WHEN jenis_kendaraan = 'motor' THEN 1 ELSE 0 END) AS count_motor,
                    SUM(CASE WHEN jenis_kendaraan = 'mobil' THEN 1 ELSE 0 END) AS count_mobil
                FROM kendaraan
                union all
                SELECT 
                    civitas.kategori_civitas,
                    SUM(CASE WHEN kendaraan.jenis_kendaraan = 'motor' THEN 1 ELSE 0 END) AS count_motor,
                    SUM(CASE WHEN kendaraan.jenis_kendaraan = 'mobil' THEN 1 ELSE 0 END) AS count_mobil
                FROM kendaraan
                JOIN civitas ON kendaraan.civitas_id = civitas.id
                where civitas.kategori_civitas = 'mahasiswa'
                group by civitas.kategori_civitas 
                union all 
                SELECT 
                    civitas.kategori_civitas,
                    SUM(CASE WHEN kendaraan.jenis_kendaraan = 'motor' THEN 1 ELSE 0 END) AS count_motor,
                    SUM(CASE WHEN kendaraan.jenis_kendaraan = 'mobil' THEN 1 ELSE 0 END) AS count_mobil
                FROM kendaraan
                JOIN civitas ON kendaraan.civitas_id = civitas.id
                where civitas.kategori_civitas = 'dosen'
                group by civitas.kategori_civitas 
                union all 
                SELECT 
                    civitas.kategori_civitas,
                    SUM(CASE WHEN kendaraan.jenis_kendaraan = 'motor' THEN 1 ELSE 0 END) AS count_motor,
                    SUM(CASE WHEN kendaraan.jenis_kendaraan = 'mobil' THEN 1 ELSE 0 END) AS count_mobil
                FROM kendaraan
                JOIN civitas ON kendaraan.civitas_id = civitas.id
                where civitas.kategori_civitas = 'tendik'
                group by civitas.kategori_civitas 
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
