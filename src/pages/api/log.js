import db from '@/utils/db';

export default async function handler(req, res) {
	try {
		// Menjalankan query ke database
		const query = `
    select
      row_number() over () as number,
      tabel.*
    from
      (
        select
          k.jenis_kendaraan,
          k.nomor_kendaraan,
          c.kategori_civitas,
          TO_CHAR(lk.waktu_masuk, 'HH:MI') as waktu_masuk,
          TO_CHAR(lk.waktu_keluar, 'HH:MI') as waktu_keluar
        from
          log_kendaraan lk,
          kendaraan k,
          civitas c
        where
          lk.kendaraan_id = k.id
          and k.civitas_id = c.id
          and DATE_TRUNC('day', lk.waktu_masuk) = CURRENT_DATE
        order by
          lk.waktu_keluar is null desc,
          lk.waktu_masuk 
      ) as tabel;
    `;

		const data = await db.any(query);

		// Mengirimkan response dengan data yang diperoleh dari query
		res.status(200).json(data);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Server Error' });
	}
}
