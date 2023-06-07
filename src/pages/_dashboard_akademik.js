import SideMenu from '@/Components/SideMenu';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Dashboard() {
	const [totalMotor, setTotalMotor] = useState(0);
	const [totalMobil, setTotalMobil] = useState(0);
	const [kategoriStats, setKategoriStats] = useState([]);

	useEffect(() => {
		fetch('/api/summary-kendaraan')
			.then((response) => response.json())
			.then((data) => {
				setTotalMotor(data[0].count_motor);
				setTotalMobil(data[0].count_mobil);
				setKategoriStats(data.slice(1));
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	const date = new Date();

	const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
	const dateString = date.toLocaleDateString('id-ID', options);

	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const timeString = `${hours}:${minutes}`;

	return (
		<SideMenu>
			<Head>
				<title>SIMARKIR</title>
				<meta name="description" content="Simarkir: Sistem Manajemen Parkir" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<section className="h-screen overflow-auto bg-white">
				<div className="mb-6 mt-6 md:flex md:items-center md:justify-between">
					<div>
						<h1>Dashboard</h1>
					</div>

					<div className="divide-x divide-white/5 rounded-lg bg-gray-200/50 text-black md:flex md:items-center md:justify-between">
						<p className="px-4 py-2 text-xs">{dateString}</p>
						<p className="px-4 py-2 text-xs">{timeString}</p>
					</div>
				</div>

				<div
					className="mb-6 mt-6 inline-flex min-w-full overflow-hidden
                rounded-lg shadow-lg backdrop-blur-lg md:flex md:items-baseline md:justify-between"
				>
					<div className="min-w-full p-5 md:flex-col md:items-baseline">
						<div className="mb-2 md:flex md:items-baseline">
							<div className="border-gray/50 mr-1 w-1/2 rounded-lg border bg-white">
								<h3 className="m-2 p-2 text-sm font-black text-black">
									Total Motor Milik Civitas DTETI
								</h3>
								<p className="mb-4 ml-4 mr-4 text-xl font-black text-black">{totalMotor ?? 0} </p>
							</div>

							<div className="border-gray/50 ml-1 w-1/2 rounded-lg border bg-white">
								<h3 className="m-2 p-2 text-sm font-black text-black">
									Total Mobil Milik Civitas DTETI
								</h3>
								<p className="mb-4 ml-4 mr-4 text-xl font-black text-black">{totalMobil ?? 0} </p>
							</div>
						</div>

						<div className="md:flex md:items-baseline">
							<div className="border-gray/50 mr-1 w-1/3 rounded-lg border bg-white">
								<h3
									className="m-2 gap-x-2 rounded-lg bg-emerald-200/50 p-2
                                text-sm font-black text-black text-emerald-500"
								>
									Kendaraan Dosen
								</h3>
								<div className="m-2 p-2 md:flex md:flex-grow md:items-baseline">
									<div className="w-1/2">
										<p className="text-xs font-bold text-black"> Mobil </p>
										<p className="text-xs font-black text-black">
											{kategoriStats[1]?.count_mobil ?? 0}
										</p>
									</div>

									<div className="w-1/2">
										<p className="text-xs font-bold text-black"> Motor </p>
										<p className="text-xs font-black text-black">
											{kategoriStats[1]?.count_motor ?? 0}
										</p>
									</div>
								</div>
							</div>

							<div className="border-gray/50 mr-1 w-1/3 rounded-lg border bg-white">
								<h3
									className="m-2 gap-x-2 rounded-lg bg-pink-200/50 p-2
                                text-sm font-black text-black text-pink-500"
								>
									Kendaraan Tendik
								</h3>
								<div className="m-2 p-2 md:flex md:flex-grow md:items-baseline">
									<div className="w-1/2">
										<p className="text-xs font-bold text-black"> Mobil </p>
										<p className="text-xs font-black text-black">
											{kategoriStats[2]?.count_mobil ?? 0}
										</p>
									</div>

									<div className="w-1/2">
										<p className="text-xs font-bold text-black"> Motor </p>
										<p className="text-xs font-black text-black">
											{kategoriStats[2]?.count_motor ?? 0}
										</p>
									</div>
								</div>
							</div>

							<div className="border-gray/50 mr-1 w-1/3 rounded-lg border bg-white">
								<h3
									className="m-2 gap-x-2 rounded-lg bg-indigo-200/50 p-2
                                text-sm font-black text-black text-indigo-500"
								>
									Kendaraan Mahasiswa
								</h3>
								<div className="m-2 p-2 md:flex md:flex-grow md:items-baseline">
									<div className="w-1/2">
										<p className="text-xs font-bold text-black"> Mobil </p>
										<p className="text-xs font-black text-black">
											{kategoriStats[0]?.count_mobil ?? 0}
										</p>
									</div>

									<div className="w-1/2">
										<p className="text-xs font-bold text-black"> Motor </p>
										<p className="text-xs font-black text-black">
											{kategoriStats[0]?.count_motor ?? 0}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="min-w-full p-5 md:flex md:items-baseline"></div>
				</div>
			</section>
		</SideMenu>
	);
}
