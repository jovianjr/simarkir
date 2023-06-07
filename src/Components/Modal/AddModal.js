import { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';

export default function DataAdd({ closeModal = () => {}, refresh = () => {} }) {
	const [civitasData, setCivitasData] = useState([]);
	const [selectedId, setSelectedId] = useState();
	const [selectedNama, setSelectedNama] = useState('');
	const [selectedNomorIdentitas, setSelectedNomorIdentitas] = useState('');
	const [selectedKategoriCivitas, setSelectedKategoriCivitas] = useState('');

	useEffect(() => {
		fetchCivitasData();
	}, []);

	const fetchCivitasData = async () => {
		try {
			const response = await axios.get('/api/civitas');
			setCivitasData(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	const handleNamaChange = (selectedOption) => {
		setSelectedId(selectedOption.value);
		setSelectedNama(selectedOption.label);

		const selectedCivitas = civitasData.find((civitas) => civitas.id === selectedOption.value);

		if (selectedCivitas) {
			setSelectedNomorIdentitas(selectedCivitas.nomor_identitas);
			setSelectedKategoriCivitas(selectedCivitas.kategori_civitas);
		} else {
			setSelectedNomorIdentitas('');
			setSelectedKategoriCivitas('');
		}
	};

	const options = civitasData.map((civitas) => ({
		value: civitas.id,
		label: civitas.nama,
	}));

	const handleFormSubmit = async (event) => {
		event.preventDefault();

		try {
			await axios.post('/api/kendaraan', {
				civitas_id: selectedId,
				nomor_kendaraan: event.target[3].value,
				jenis_kendaraan: event.target[4].value,
			});

			// Reset form or show success message
			setSelectedId();
			setSelectedNama('');
			setSelectedNomorIdentitas('');
			setSelectedKategoriCivitas('');
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
						<h1>Tambah Kendaraan</h1>
						<p className="subt">Menambahkan daftar kendaraan milik civitas DTETI.</p>
					</div>

					<div className="mb-6">
						<label htmlFor="name" className="label">
							Nama
						</label>
						<Select
							options={options}
							value={{ value: selectedId, label: selectedNama }}
							onChange={handleNamaChange}
							isSearchable
							placeholder="Pilih Nama"
							className="transition-200 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg focus:outline-none"
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
								className="transition-200 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg focus:outline-none"
								placeholder="XX/123456/YY/00000"
								value={selectedNomorIdentitas}
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
								className="transition-200 w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-black transition hover:outline-none hover:drop-shadow-lg focus:outline-none"
								placeholder="Civitas"
								value={selectedKategoriCivitas}
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
								<option value="mobil">Mobil</option>
								<option value="motor">Motor</option>
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
