import SideMenu from '@/Components/SideMenu';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function MpAkademik() {
	const [kendaraanData, setKendaraanData] = useState([]);
	const [jenisFilter, setJenisFilter] = useState('');
	const [kategoriFilter, setKategoriFilter] = useState('');
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		const fetchKendaraanData = async () => {
			try {
				const response = await fetch('/api/kendaraan');
				const data = await response.json();

				console.log(data);

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

	return (
		<SideMenu>
            <Head>
                <title>SIMARKIR</title>
                <meta name="description" content="Simarkir: Sistem Manajemen Parkir" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <section class="h-screen bg-white overflow-auto">
                
                <div class="mt-6 mb-6 md:flex md:items-baseline md:justify-between">
                    <div>
                        <h1>Daftar Kendaraan</h1>
                        <p class="subt"> Daftar kendaraan terdaftar sebagai milik civitas DTETI </p>
                    </div>

					<div class="relative mt-4 flex items-center md:mt-0">
						<span class="absolute">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="gray"
								class="mx-3 h-5 w-5 text-black"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</span>
						<input
							type="text"
							placeholder="Cari"
							class="placeholder-gray placeholder-font-bold block w-full rounded-full border border-gray-200 py-1.5
                        pl-11 pr-5 text-black focus:border-gray-200 focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-40
                        rtl:pl-5 rtl:pr-11 md:w-80"
							onChange={handleSearch}
						/>
						<br />
					</div>
				</div>

				<div class="ml-10 mr-10 inline-flex overflow-hidden md:flex md:items-baseline md:justify-between">
					<div class="divide inline-flex divide-x divide-gray-800 overflow-hidden rounded-lg border-[1px] border-gray-800">
						<button
							class={`transition-200 bg-white px-5 py-2 text-xs font-medium text-black transition
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
							class={`transition-200 bg-white px-5 py-2 text-xs font-medium text-black transition
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

					<div class="divide inline-flex divide-x divide-gray-800 overflow-hidden rounded-lg border-[1px] border-gray-800">
						<button
							class={`transition-200 bg-white px-5 py-2 text-xs font-medium text-black transition
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
							class={`transition-200 bg-white px-5 py-2 text-xs font-medium text-black transition
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
							class={`transition-200 bg-white px-5 py-2 text-xs font-medium text-black transition
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
						<button class="divide ml-1 inline-flex divide-x divide-white/20 overflow-hidden rounded-lg">
							<div class="bg-gray-800 px-5 py-2 text-xs font-medium text-white"> Tambah </div>
							<div alt="tambah" class="bg-gray-800 px-3 py-2 text-xs font-medium text-white">
								{' '}
								+{' '}
							</div>
						</button>
					</div>
				</div>

				<div class="ml-10 mr-10 mt-4 flex flex-col">
					<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div class="overflow-x-auto border border-gray-200 dark:border-gray-200 md:rounded-lg">
								<table class="min-w-full divide-y divide-gray-200 dark:divide-gray-200">
									<thead class="bg-gray-200/50 dark:bg-gray-200/50">
										<tr class="text-left text-sm text-black rtl:text-right">
											<th scope="col" class="text-right">
												{' '}
												No{' '}
											</th>
											<th scope="col"> Nama </th>

											<th scope="col">
												<button class="flex items-center gap-x-3 focus:outline-none">
													<span>Kendaraan</span>

													<svg
														class="h-3"
														viewBox="0 0 10 11"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
															fill="currentColor"
															stroke="currentColor"
															stroke-width="0.1"
														/>
														<path
															d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
															fill="currentColor"
															stroke="currentColor"
															stroke-width="0.1"
														/>
														<path
															d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
															fill="currentColor"
															stroke="currentColor"
															stroke-width="0.3"
														/>
													</svg>
												</button>
											</th>

											<th scope="col"> Kelompok Civitas </th>
											<th scope="col"> NIP/NIU </th>
											<th scope="col"> Act </th>
										</tr>
									</thead>

									<tbody class="divide-y divide-gray-200 dark:divide-gray-200">
										{filteredKendaraan.map((kendaraan) => (
											<tr
												class="even:bg-slate-50 text-left text-sm font-normal text-black odd:bg-white rtl:text-right"
												key={kendaraan.number}
											>
												<td class="px-4 py-3.5 text-right text-sm"> {kendaraan.number} </td>
												<td class="max-w-fit px-4 py-3.5 text-sm"> {kendaraan.nama} </td>

												<td class="flex items-center gap-x-3 px-4 py-2.5 focus:outline-none">
													<div>
														<p class="text-sm font-bold"> {kendaraan.nomor_kendaraan} </p>
														<p class="text-xs text-gray-600"> {kendaraan.jenis_kendaraan} </p>
													</div>
												</td>

												<td class="whitespace-nowrap px-4 py-3.5 text-sm">
													<div class={kendaraan?.kategori_civitas?.toLowerCase()}>
														{kendaraan.kategori_civitas}{' '}
													</div>
												</td>

												<td class="whitespace-nowrap px-4 py-3.5 text-sm">
													{kendaraan.nomor_identitas}{' '}
												</td>
												<td class="px-4 py-3.5 text-sm">
													<div class="divide inline-flex divide-x divide-white/20 overflow-hidden rounded-lg">
														<button
															class="transition-200 bg-white px-2.5 py-1.5 text-xs font-medium text-black transition
                                                    hover:bg-gray-800 hover:text-white active:bg-gray-800 active:text-white"
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
