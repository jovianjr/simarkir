import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function SideMenu(props) {
	const [motor, setMotor] = useState([]);
	const [mobil, setMobil] = useState([]);

	useEffect(() => {
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

		fetchLogCount();
	}, []);

	return (
		<section className="overview-x-hidden m-0 w-[100%] bg-white p-0">
			<div className="absolute flex min-h-full w-[27%] flex-col justify-between rounded-r-3xl bg-[url('../assets/images/main-bg-simarkir.webp')] py-14 text-white">
				<section className="flex w-full flex-col justify-center px-8 py-0 text-center">
					<div className="mb-6 flex w-full flex-col items-center">
						<Image
							src="/icon-park.png"
							alt="Simbol Parkir"
							className="mb-2"
							height={48}
							width={48}
						/>
						<h1 className="mb-3 text-[24px] font-bold leading-3">Simarkir</h1>
						<p className="mb-4 text-[12px] font-thin">Sistem Manajemen Parkir DTETI</p>
						<p className="text-[16px]">
							Senin, 12 Maret 2023
							<br />
							15:00
						</p>
					</div>
					<div className="flex w-full flex-col gap-2 text-left">
						<Link
							href="/dashboard"
							className="flex w-full items-center gap-2 rounded-sm bg-neutral-50/20 px-2 py-0.5 drop-shadow-md"
						>
							<Image src="/home.svg" alt="Simbol Parkir" className="mb-2" height={30} width={30} />
							<p className="text-[14px]">Dashboard</p>
						</Link>
						<Link
							href="/mplapangan"
							className="flex w-full items-center gap-2 rounded-sm bg-neutral-50/20 px-2 py-0.5 drop-shadow-md"
						>
							<Image src="/car.svg" alt="Simbol Parkir" className="mb-2" height={30} width={30} />
							<p className="text-[14px]">Manajemen Kendaraan</p>
						</Link>
						<Link
							href="/mpakademik"
							className="flex w-full items-center gap-2 rounded-sm bg-neutral-50/20 px-2 py-0.5 drop-shadow-md"
						>
							<Image
								src="/search.svg"
								alt="Simbol Parkir"
								className="mb-2"
								height={30}
								width={30}
							/>
							<p className="text-[14px]">Register</p>
						</Link>
					</div>
				</section>
				<section className="w-full px-8 py-0">
					<p className="mb-3 mt-3">Kapasitas Kendaraan</p>
					<div className="flex w-full flex-col gap-2 text-left text-sm">
						<div className="flex w-full items-center justify-between rounded-sm bg-neutral-50/20 px-2 py-0.5 drop-shadow-md">
							<div className="flex items-center gap-2">
								<Image src="/car.svg" alt="Simbol Parkir" className="mb-2" height={30} width={30} />
								<p className="text-[14px]">Mobil</p>
							</div>
							<p>
								{mobil?.count ?? 0}/{mobil?.kapasitas ?? '10'}
							</p>
						</div>
						<div className="flex w-full items-center justify-between rounded-sm bg-[#DE2C13] px-2 py-0.5 drop-shadow-md">
							<div className="flex items-center gap-2">
								<Image
									src="/motorbike.svg"
									alt="Simbol Parkir"
									className="mb-2"
									height={30}
									width={30}
								/>
								<p className="text-[14px]">Sepeda Motor</p>
							</div>
							<p>
								{motor?.count ?? 0}/{motor?.kapasitas ?? '10'}
							</p>
						</div>
					</div>
				</section>
			</div>
			<div className="absolute right-0 top-0 box-border w-[73%]">{props.children}</div>
		</section>
	);
}
