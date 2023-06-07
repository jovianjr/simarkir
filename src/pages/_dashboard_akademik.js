import SideMenu from '@/Components/SideMenu';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Dashboard() {
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
				<div className="mb-6 mt-6 md:flex md:items-center md:justify-between">
					<div>
						<h1>Dashboard</h1>
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

					<div className="divide-x divide-white/5 rounded-lg bg-gray-200/50 text-black md:flex md:items-center md:justify-between">
						<p className="px-4 py-2 text-xs">{dateString}</p>
						<p className="px-4 py-2 text-xs">{timeString}</p>
					</div>
				</div>

				<div className="mb-6 mt-6 inline-flex min-w-full overflow-hidden
                rounded-lg shadow-lg backdrop-blur-lg md:flex md:items-baseline md:justify-between">
					
                    <div className="min-w-full p-5 md:flex-col md:items-baseline">
                        <div className="md:flex md:items-baseline mb-2">
                            <div className="border-gray/50 mr-1 w-1/2 rounded-lg border bg-white">
                                <h3 className="m-2 p-2 text-sm font-black text-black">Total Motor Milik Civitas DTETI</h3>
                                <p className="mb-4 ml-4 mr-4 text-xl font-black text-black">
                                    {motor?.count ?? 0} {' '}
                                </p>
                            </div>

                            <div className="border-gray/50 ml-1 w-1/2 rounded-lg border bg-white">
                                <h3 className="m-2 p-2 text-sm font-black text-black">Total Mobil Milik Civitas DTETI</h3>
                                <p className="mb-4 ml-4 mr-4 text-xl font-black text-black">
                                    {mobil?.count ?? 0} {' '}
                                </p>
                            </div>
                        </div>

                        <div className="md:flex md:items-baseline">
                            <div className="border-gray/50 mr-1 w-1/3 rounded-lg border bg-white">
                                <h3 className="m-2 p-2 text-sm font-black text-black
                                text-emerald-500 gap-x-2 bg-emerald-200/50 rounded-lg">Kendaraan Dosen</h3>
                                <div className='m-2 p-2 md:flex md:items-baseline md:flex-grow'>
                                    <div className='w-1/2'>
                                        <p className="text-xs font-bold text-black"> Mobil </p>
                                        <p className="text-xs font-black text-black">
                                            {mobil?.count ?? 0} {' '}
                                        </p>
                                    </div>

                                    <div className='w-1/2'>
                                        <p className="text-xs font-bold text-black"> Motor </p>
                                        <p className="text-xs font-black text-black">
                                            {motor?.count ?? 0} {' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-gray/50 mr-1 w-1/3 rounded-lg border bg-white">
                                <h3 className="m-2 p-2 text-sm font-black text-black
                                text-pink-500 gap-x-2 bg-pink-200/50 rounded-lg">Kendaraan Tendik</h3>
                                <div className='m-2 p-2 md:flex md:items-baseline md:flex-grow'>
                                    <div className='w-1/2'>
                                        <p className="text-xs font-bold text-black"> Mobil </p>
                                        <p className="text-xs font-black text-black">
                                            {mobil?.count ?? 0} {' '}
                                        </p>
                                    </div>

                                    <div className='w-1/2'>
                                        <p className="text-xs font-bold text-black"> Motor </p>
                                        <p className="text-xs font-black text-black">
                                            {motor?.count ?? 0} {' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="border-gray/50 mr-1 w-1/3 rounded-lg border bg-white">
                                <h3 className="m-2 p-2 text-sm font-black text-black
                                text-indigo-500 gap-x-2 bg-indigo-200/50 rounded-lg">Kendaraan Mahasiswa</h3>
                                <div className='m-2 p-2 md:flex md:items-baseline md:flex-grow'>
                                    <div className='w-1/2'>
                                        <p className="text-xs font-bold text-black"> Mobil </p>
                                        <p className="text-xs font-black text-black">
                                            {mobil?.count ?? 0} {' '}
                                        </p>
                                    </div>

                                    <div className='w-1/2'>
                                        <p className="text-xs font-bold text-black"> Motor </p>
                                        <p className="text-xs font-black text-black">
                                            {motor?.count ?? 0} {' '}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
					</div>

                    <div className="min-w-full p-5 md:flex md:items-baseline">
                        
                    </div>
				</div>

			</section>
		</SideMenu>
	);
}
