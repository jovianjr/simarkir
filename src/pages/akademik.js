import Modal from '@/Components/Modal';
import SideMenu from '@/Components/SideMenu';
import DataAdd from '@/Components/dataadd';
import DataEdit from '@/Components/dataedit';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Akademik() {
	const [kendaraanData, setKendaraanData] = useState([]);
	const [jenisFilter, setJenisFilter] = useState('');
	const [kategoriFilter, setKategoriFilter] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		const fetchKendaraanData = async () => {
			try {
				const response = await fetch('/api/kendaraan');
				const data = await response.json();

				setKendaraanData(data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchKendaraanData();
	}, []);

	const handleJenisFilter = (jenis) => {
		if (jenis === jenisFilter) setJenisFilter();
		else setJenisFilter(jenis);
	};

	const handleKategoriFilter = (kategori) => {
		if (kategori === kategoriFilter) setKategoriFilter();
		else setKategoriFilter(kategori);
	};

	const handleSearch = (event) => {
		setSearchQuery(event.target.value);
	};

	const filteredKendaraan = kendaraanData.filter((kendaraan) => {
		if (jenisFilter && kendaraan.jenis_kendaraan.toLowerCase() !== jenisFilter) {
			return false;
		}
		if (kategoriFilter && kendaraan.kategori_civitas !== kategoriFilter) {
			return false;
		}
		if (
			searchQuery &&
			!kendaraan.nama.toLowerCase().includes(searchQuery.toLowerCase()) &&
			!kendaraan.nomor_kendaraan.toLowerCase().includes(searchQuery.toLowerCase()) &&
			!kendaraan.nomor_identitas.toLowerCase().includes(searchQuery.toLowerCase())
		) {
			return false;
		}
		return true;
	});

	const [showAddModal, setShowAddModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);

	return (
		<SideMenu>
			<Head>
				<title>SIMARKIR</title>
				<meta name="description" content="Simarkir: Sistem Manajemen Parkir" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="h-screen overflow-auto bg-white">
				<Modal isShow={showAddModal} closeModal={() => setShowAddModal(false)}>
					<DataAdd closeModal={() => setShowAddModal(false)} />
				</Modal>
				<Modal isShow={showEditModal} closeModal={() => setShowEditModal(false)}>
					<DataEdit closeModal={() => setShowEditModal(false)} />
				</Modal>
				<div className="mb-6 mt-6 md:flex md:items-baseline md:justify-between">
					<div>
						<h1>Daftar Kendaraan</h1>
						<p className="subt"> Daftar kendaraan terdaftar sebagai milik civitas DTETI </p>
					</div>

					<div className="relative mt-4 flex items-center md:mt-0">
						<span className="absolute">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="gray"
								className="mx-3 h-5 w-5 text-black"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</span>
						<input
							type="text"
							placeholder="Cari"
							className="placeholder-gray placeholder-font-bold block w-full rounded-full border border-gray-200 py-1.5
                        pl-11 pr-5 text-black focus:border-gray-200 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-40
                        rtl:pl-5 rtl:pr-11 md:w-80"
							onChange={handleSearch}
						/>
						<br />
					</div>
				</div>

				<div className=" inline-flex overflow-hidden md:flex md:items-baseline md:justify-between">
					<div className="divide inline-flex divide-x divide-gray-800 overflow-hidden rounded-lg border-[1px] border-gray-800">
						<button
							className={`transition-200 bg-white px-5 py-2 text-xs font-medium text-black transition
									${
										jenisFilter === 'mobil'
											? '!bg-gray-800 !text-white'
											: 'hover:bg-gray-500 hover:text-white active:bg-gray-800 active:text-white'
									}`}
							onClick={() => handleJenisFilter('mobil')}
						>
							Mobil
						</button>

						<button
							className={`transition-200 bg-white px-5 py-2 text-xs font-medium text-black transition
									${
										jenisFilter === 'motor'
											? '!bg-gray-800 !text-white'
											: 'hover:bg-gray-500 hover:text-white active:bg-gray-800 active:text-white'
									}`}
							onClick={() => handleJenisFilter('motor')}
						>
							Motor
						</button>
					</div>

					<div className="divide inline-flex divide-x divide-gray-800 overflow-hidden rounded-lg border-[1px] border-gray-800">
						<button
							className={`transition-200 bg-white px-5 py-2 text-xs font-medium text-black transition
									${
										kategoriFilter === 'Dosen'
											? '!bg-gray-800 !text-white'
											: 'hover:bg-gray-500 hover:text-white active:bg-gray-800 active:text-white'
									}`}
							onClick={() => handleKategoriFilter('Dosen')}
						>
							Dosen
						</button>

						<button
							className={`transition-200 bg-white px-5 py-2 text-xs font-medium text-black transition
									${
										kategoriFilter === 'Mahasiswa'
											? '!bg-gray-800 !text-white'
											: 'hover:bg-gray-500 hover:text-white active:bg-gray-800 active:text-white'
									}`}
							onClick={() => handleKategoriFilter('Mahasiswa')}
						>
							Mahasiswa
						</button>

						<button
							className={`transition-200 bg-white px-5 py-2 text-xs font-medium text-black transition
									${
										kategoriFilter === 'Tendik'
											? '!bg-gray-800 !text-white'
											: 'hover:bg-gray-500 hover:text-white active:bg-gray-800 active:text-white'
									}`}
							onClick={() => handleKategoriFilter('Tendik')}
						>
							Tendik
						</button>
					</div>

					<div>
						<button
							className="divide ml-1 inline-flex divide-x divide-white/20 overflow-hidden rounded-lg"
							onClick={() => setShowAddModal(true)}
						>
							<div className="bg-gray-800 px-5 py-2 text-xs font-medium text-white"> Tambah </div>
							<div alt="tambah" className="bg-gray-800 px-3 py-2 text-xs font-medium text-white">
								{' '}
								+{' '}
							</div>
						</button>
					</div>
				</div>

				<div className="mt-4 flex flex-col">
					<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-x-auto border border-gray-200 dark:border-gray-200 md:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-200">
									<thead className="bg-gray-200/50 dark:bg-gray-200/50">
										<tr className="text-left text-sm text-black rtl:text-right">
											<th scope="col" className="text-right">
												{' '}
												No{' '}
											</th>
											<th scope="col"> Nama </th>

											<th scope="col">
												<button className="flex items-center gap-x-3 focus:outline-none">
													<span>Kendaraan</span>
												</button>
											</th>

											<th scope="col"> Kelompok Civitas </th>
											<th scope="col"> NIP/NIU </th>
											<th scope="col"> Act </th>
										</tr>
									</thead>

									<tbody className="divide-y divide-gray-200 dark:divide-gray-200">
										{filteredKendaraan.map((kendaraan) => (
											<tr
												className="even:bg-slate-50 text-left text-sm font-normal text-black odd:bg-white rtl:text-right"
												key={kendaraan.number}
											>
												<td className="px-4 py-3.5 text-right text-sm"> {kendaraan.number} </td>
												<td className="max-w-fit px-4 py-3.5 text-sm"> {kendaraan.nama} </td>

												<td className="flex items-center gap-x-3 px-4 py-2.5 focus:outline-none">
													<div>
														<p className="text-sm font-bold"> {kendaraan.nomor_kendaraan} </p>
														<p className="text-xs text-gray-600"> {kendaraan.jenis_kendaraan} </p>
													</div>
												</td>

												<td className="whitespace-nowrap px-4 py-3.5 text-sm">
													<div className={kendaraan?.kategori_civitas?.toLowerCase()}>
														{kendaraan.kategori_civitas}{' '}
													</div>
												</td>

												<td className="whitespace-nowrap px-4 py-3.5 text-sm">
													{kendaraan.nomor_identitas}{' '}
												</td>
												<td className="px-4 py-3.5 text-sm">
													<div className="divide inline-flex divide-x divide-white/20 overflow-hidden rounded-lg">
														<button
															className="transition-200 bg-white px-2.5 py-1.5 text-xs font-medium text-black transition
                                                    hover:bg-gray-800 hover:text-white active:bg-gray-800 active:text-white"
															onClick={() => setShowEditModal(true)}
														>
															Edit
														</button>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>
		</SideMenu>
	);
}
