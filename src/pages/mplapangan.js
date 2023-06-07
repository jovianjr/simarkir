import SideMenu from '@/Components/SideMenu';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function MpLapangan() {
	const [data, setData] = useState([]);
	const [motor, setMotor] = useState([]);
	const [mobil, setMobil] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	useEffect(() => {
		fetchData();
		fetchLogCount();
	}, []);

	const fetchData = async () => {
		try {
			const response = await fetch('/api/log');
			const data = await response.json();
			setData(data);
		} catch (error) {
			console.error(error);
		}
	};

	const fetchLogCount = async () => {
		try {
			const response = await fetch('/api/summary');
			const data = await response.json();

			const formatedData = data.reduce((obj, item) => {
				const { count, jenis_kendaraan, nama, kapasitas } = item;

				if (!obj[jenis_kendaraan]) {
					obj[jenis_kendaraan] = {
						parkir: nama,
						kapasitas: kapasitas,
						count: parseInt(count),
					};
				} else {
					obj[jenis_kendaraan].count += parseInt(count);
				}

				return obj;
			}, {});

			setMotor(formatedData.motor);
			setMobil(formatedData.mobil);
		} catch (error) {
			console.error(error);
		}
	};

	const date = new Date();

	const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
	const dateString = date.toLocaleDateString('id-ID', options);

	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const timeString = `${hours}:${minutes}`;

	const handleSearch = (event) => {
		setSearchQuery(event.target.value);
	};

	const filteredData = data.filter((item) => {
		if (
			searchQuery &&
			!item.nomor_kendaraan.toLowerCase().includes(searchQuery.toLowerCase()) &&
			!item.jenis_kendaraan.toLowerCase().includes(searchQuery.toLowerCase()) &&
			!item.kategori_civitas.toLowerCase().includes(searchQuery.toLowerCase())
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
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="h-screen overflow-auto bg-white">
				<div className="mb-6 mt-6 md:flex md:items-baseline md:justify-between">
					<div>
						<h1>Log Parkir</h1>
						<p className="subt">Daftar kendaraan masuk dan keluar DTETI hari ini</p>
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
							onInput={handleSearch}
						/>{' '}
						<br />
					</div>
				</div>

				<div className="md:flex md:items-center md:justify-between">
					<div className="md:flex md:items-center">
						<div className="mr-3 divide-x divide-white/5 rounded-lg bg-red text-white md:flex md:items-center md:justify-between">
							<p className="px-4 py-2 text-xs">Motor</p>
							<p className="px-4 py-2 text-xs">
								{motor?.count} / {motor?.kapasitas}{' '}
							</p>
						</div>

						<div className="divide-x divide-white/5 rounded-lg bg-gray-800 text-white md:flex md:items-center md:justify-between">
							<p className="px-4 py-2 text-xs">Mobil</p>
							<p className="px-4 py-2 text-xs">
								{mobil?.count} / {mobil?.kapasitas}{' '}
							</p>
						</div>
					</div>

					<div>
						<div className="divide-x divide-white/5 rounded-lg bg-gray-200/50 text-black md:flex md:items-center md:justify-between">
							<p className="px-4 py-2 text-xs">{dateString}</p>
							<p className="px-4 py-2 text-xs">{timeString}</p>
						</div>
					</div>
				</div>

				<div className="mt-4 flex flex-col">
					<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
							<div className="overflow-hidden border border-gray-200 dark:border-gray-200 md:rounded-lg">
								<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-200">
									<thead className="bg-gray-200/50 dark:bg-gray-200/50">
										<tr className="text-left text-sm text-black rtl:text-right">
											<th scope="col" className="text-right">
												{' '}
												No{' '}
											</th>

											<th scope="col">
												<button className="flex items-center gap-x-3 focus:outline-none">
													<span className="font-normal"> Kendaraan</span>

													<svg
														className="h-3"
														viewBox="0 0 10 11"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
															fill="currentColor"
															stroke="currentColor"
															strokeWidth="0.1"
														/>
														<path
															d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
															fill="currentColor"
															stroke="currentColor"
															strokeWidth="0.1"
														/>
														<path
															d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
															fill="currentColor"
															stroke="currentColor"
															strokeWidth="0.3"
														/>
													</svg>
												</button>
											</th>

											<th scope="col"> Kelompok Civitas </th>
											<th scope="col"> Masuk </th>
											<th scope="col"> Keluar </th>
										</tr>
									</thead>

									<tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-200 dark:bg-white">
										{filteredData?.map((item) => (
											<tr
												className="text-left text-sm font-normal text-black rtl:text-right"
												key={item.number}
											>
												<td className="px-4 py-3.5 text-right text-sm"> {item?.number} </td>

												<td className="flex items-center gap-x-3 px-4 py-2.5 focus:outline-none">
													<div>
														<p className="text-sm font-bold text-gray-800">
															{' '}
															{item?.nomor_kendaraan}{' '}
														</p>
														<p className="text-xs capitalize text-gray-600">
															{' '}
															{item?.jenis_kendaraan}{' '}
														</p>
													</div>
												</td>

												<td className="whitespace-nowrap px-4 py-3.5 text-sm">
													<div className={item?.kategori_civitas?.toLowerCase()}>
														{item?.kategori_civitas}{' '}
													</div>
												</td>

												<td className="whitespace-nowrap px-4 py-3.5 text-sm">
													{' '}
													{item?.waktu_masuk}{' '}
												</td>
												<td className="whitespace-nowrap px-4 py-3.5 text-sm">
													{' '}
													{item?.waktu_keluar ?? '-- : --'}{' '}
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

			<script>feather.replace()</script>
		</SideMenu>
	);
}
