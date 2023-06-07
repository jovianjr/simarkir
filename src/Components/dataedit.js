export default function DataEdit({
	modalTrigger,
    triggerModal = () => {},
}) {
	return (
		<section>
			<div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-16 drop-shadow-lg">
				<form>
					<div className="mb-5">
						<h1>Edit Kendaraan</h1>
						<p className="subt">Ubah detail kendaraan milik civitas DTETI.</p>
					</div>

					<div className="mb-6">
						<label for="name" className="label">
							Nama
						</label>
						<input
							id="name"
							type="text"
							className="transition-200 w-full rounded-lg border border-gray-300 bg-white
                            p-2.5 text-sm text-black transition hover:outline-none
                            hover:drop-shadow-lg focus:outline-none"
							placeholder="Nama Lengkap"
							required
						/>
					</div>

					<div className="mb-6 grid gap-6 lg:grid-cols-2">
						<div>
							<label for="id" className="label">
								NIP/NIU
							</label>
							<input
								id="id"
								type="number"
								maxLength="6"
								className="transition-200 w-full rounded-lg border border-gray-300 bg-white
                            p-2.5 text-sm text-black transition hover:outline-none
                            hover:drop-shadow-lg focus:outline-none"
								placeholder="123456"
								required
							/>
						</div>

						<div>
							<label for="klmpkcivitas" className="label">
								Kelompok Civitas
							</label>
							<select
								id="klmpkcivitas"
								className="transition-200 w-full rounded-lg border border-gray-300 bg-white
                            p-2.5 text-sm text-black transition hover:outline-none
                            hover:drop-shadow-lg focus:outline-none"
								required
							>
								<option value="dosen">Dosen</option>
								<option value="tendik">Tendik</option>
								<option value="mahasiswa">Mahasiswa</option>
							</select>
						</div>

						<div>
							<label for="nokendaraan" className="label">
								Nomor Kendaraan
							</label>
							<input
								id="nokendaraan"
								type="text"
								className="transition-200 w-full rounded-lg border border-gray-300 bg-white
                            p-2.5 text-sm text-black transition hover:outline-none
                            hover:drop-shadow-lg focus:outline-none"
								placeholder="AA 1234 BB"
								required
							/>
						</div>

						<div>
							<label for="kendaraan" className="label">
								Jenis Kendaraan
							</label>
							<select
								id="kendaraan"
								className="transition-200 w-full rounded-lg border border-gray-300 bg-white
                            p-2.5 text-sm text-black transition hover:outline-none
                            hover:drop-shadow-lg focus:outline-none"
								required
							>
								<option value="mobil">Mobil</option>
								<option value="motor">Motor</option>
							</select>
						</div>
					</div>

					<div className="mb-6">
						<label for="email" className="label">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="transition-200 w-full rounded-lg border border-gray-300 bg-white
                        p-2.5 text-sm text-black  transition hover:outline-none
                        hover:drop-shadow-lg focus:outline-none"
							placeholder="email@mail.ugm.ac.id"
							required
						/>
					</div>

					<div className="inline-flex min-w-full overflow-hidden md:flex md:items-baseline md:justify-end">
						<button
							type="submit"
							className="transition-200 mr-2 mt-5 w-min rounded-lg border border-gray-800 bg-white
                            px-5 py-2 text-sm font-bold text-gray-800 drop-shadow-lg
                            transition hover:bg-gray-800 hover:text-white hover:drop-shadow-lg"
						>
							Submit
						</button>

						<button
							type="delete"
							className="transition-200 mr-2 mt-5 w-min rounded-lg bg-white px-5 py-2
                            text-sm font-bold text-gray-800
                            transition hover:bg-red hover:text-white hover:drop-shadow-lg"
						>
							Hapus
						</button>

						<button
							type="cancel"
							className="mt-5 min-w-0 px-5 py-2 text-sm font-bold text-gray-800"
							onClick={() => triggerModal(!modalTrigger)}
						>
							Batal
						</button>
					</div>
				</form>
			</div>
		</section>
	);
}
