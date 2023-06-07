import axios from 'axios';

export default function DataEdit({ data = {}, closeModal = () => {}, refresh = () => {} }) {
	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			await axios.put('/api/kendaraan', {
				id: data?.id,
				nomor_kendaraan: event.target[3].value,
				jenis_kendaraan: event.target[4].value,
			});

			closeModal();
			refresh();
		} catch (error) {
			console.error(error);
			alert('Terjadi kesalahan saat menyimpan data kendaraan.');
		}
	};
	return (
		<section>
			<div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-16 drop-shadow-lg">
				<form onSubmit={handleFormSubmit}>
					<div className="mb-5">
						<h1>Edit Kendaraan</h1>
						<p className="subt">Ubah detail kendaraan milik civitas DTETI.</p>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="label">
							Nama
						</label>
						<input
							id="id"
							name="nama"
							type="text"
							className="transition-200 w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg focus:outline-none"
							placeholder="Nama"
							value={data?.nama}
							readOnly
						/>
					</div>

					<div className="mb-6 grid gap-6 lg:grid-cols-2">
						<div>
							<label htmlFor="id" className="label">
								NIP/NIU
							</label>
							<input
								id="id"
								name="nomor_identitas"
								type="text"
								className="transition-200 w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg focus:outline-none"
								placeholder="XX/123456/YY/00000"
								value={data?.nomor_identitas}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor="civitas" className="label">
								Kelompok Civitas
							</label>
							<input
								id="civitas"
								name="civitas"
								type="text"
								className="transition-200 w-full rounded-lg border border-gray-300 bg-gray-200 p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg focus:outline-none"
								placeholder="Civitas"
								value={data?.kategori_civitas}
								readOnly
							/>
						</div>

						<div>
							<label htmlFor="nokendaraan" className="label">
								Nomor Kendaraan
							</label>
							<input
								name="no_kendaraan"
								id="nokendaraan"
								type="text"
								className="transition-200 w-full rounded-lg border border-gray-300 !bg-white p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg focus:outline-none"
								placeholder="AA 1234 BB"
								defaultValue={data?.nomor_kendaraan}
								required
							/>
						</div>

						<div>
							<label htmlFor="kendaraan" className="label">
								Jenis Kendaraan
							</label>
							<select
								name="jenis_kendaraan"
								id="kendaraan"
								className="transition-200 w-full rounded-lg border border-gray-300 !bg-white p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg focus:outline-none"
								required
							>
								<option value="mobil" selected={data?.jenis_kendaraan === 'mobil'}>
									Mobil
								</option>
								<option value="motor" selected={data?.jenis_kendaraan === 'motor'}>
									Motor
								</option>
								{/* <option value="mobil" {data?.jenis_kendaraan === 'mobil' ? 'selected' : ''}>Mobil</option>
								<option value="motor" {data?.jenis_kendaraan === 'motor' ? 'selected' : ''}>Motor</option> */}
							</select>
						</div>
					</div>

					<div className="inline-flex min-w-full overflow-hidden md:flex md:items-baseline md:justify-end">
						<button
							type="submit"
							className="transition-200 mt-5 w-min rounded-lg border border-gray-800 bg-white px-5 py-2 text-sm font-bold text-gray-800 drop-shadow-lg transition hover:bg-gray-800 hover:text-white hover:drop-shadow-lg"
						>
							Submit
						</button>

						<button
							type="cancel"
							className="ml-2 mt-5 min-w-0 px-5 py-2 text-sm font-bold text-gray-800"
							onClick={closeModal}
						>
							Batal
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
