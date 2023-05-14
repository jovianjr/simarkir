export default function DataEdit() {
    return(
        <section>
            <div class="border border-gray-200 drop-shadow-lg max-w-2xl mx-auto bg-white rounded-lg p-16">
                <form>

                    <div class="mb-5">
                        <h1>Edit Kendaraan</h1>
                        <p class="subt">
                            Ubah detail kendaraan milik civitas DTETI.
                        </p>
                    </div>

                    <div class="mb-6">
                            <label for="name" class="label">Nama</label>
                            <input id="name" type="text"
                            class="bg-white border border-gray-300 text-black text-sm rounded-lg
                            w-full p-2.5 focus:outline-none hover:outline-none hover:drop-shadow-lg
                            transition transition-200"
                            placeholder="Nama Lengkap"
                            required/>
                    </div>

                    <div class="grid gap-6 mb-6 lg:grid-cols-2">
                         
                        <div>
                            <label for="id" class="label">NIP/NIU</label>
                            <input id="id" type="number" maxLength="6"
                            class="bg-white border border-gray-300 text-black text-sm rounded-lg
                            w-full p-2.5 focus:outline-none hover:outline-none hover:drop-shadow-lg
                            transition transition-200"
                            placeholder="123456"
                            required/>
                        </div>
                        
                        <div>
                            <label for="klmpkcivitas" class="label">Kelompok Civitas</label>
                            <select id="klmpkcivitas"
                            class="bg-white border border-gray-300 text-black text-sm rounded-lg
                            w-full p-2.5 focus:outline-none hover:outline-none hover:drop-shadow-lg
                            transition transition-200" required>
                                <option value="dosen">Dosen</option>
                                <option value="tendik">Tendik</option>
                                <option value="mahasiswa">Mahasiswa</option>
                            </select>
                        </div>

                        <div>
                            <label for="nokendaraan" class="label">Nomor Kendaraan</label>
                            <input id="nokendaraan" type="text"
                            class="bg-white border border-gray-300 text-black text-sm rounded-lg
                            w-full p-2.5 focus:outline-none hover:outline-none hover:drop-shadow-lg
                            transition transition-200"
                            placeholder="AA 1234 BB"
                            required/>
                        </div>
                        
                        <div>
                            <label for="kendaraan" class="label">Jenis Kendaraan</label>
                            <select id="kendaraan"
                            class="bg-white border border-gray-300 text-black text-sm rounded-lg
                            w-full p-2.5 focus:outline-none hover:outline-none hover:drop-shadow-lg
                            transition transition-200" required>
                                <option value="mobil">Mobil</option>
                                <option value="motor">Motor</option>
                            </select>
                        </div>

                    </div>
                    
                    <div class="mb-6">
                        <label for="email" class="label">Email</label>
                        <input type="email" id="email"
                        class="bg-white border border-gray-300 text-black text-sm rounded-lg
                        w-full p-2.5 focus:outline-none  hover:outline-none hover:drop-shadow-lg
                        transition transition-200"
                        placeholder="email@mail.ugm.ac.id" required/>
                    </div>
                    
                    <div class="min-w-full md:flex md:items-baseline md:justify-end inline-flex overflow-hidden">
                        <button type="submit"
                            class="w-min px-5 py-2 mt-5 mr-2 text-sm font-bold text-gray-800
                            bg-white border border-gray-800 drop-shadow-lg transition transition-200
                            hover:text-white hover:bg-gray-800 hover:drop-shadow-lg rounded-lg">
                            Submit
                        </button>

                        <button type="delete"
                            class="w-min px-5 py-2 mt-5 mr-2 text-sm font-bold text-gray-800
                            bg-white transition transition-200
                            hover:text-white hover:bg-red hover:drop-shadow-lg rounded-lg">
                            Hapus
                        </button>

                        <button type="cancel" class="min-w-0 px-5 py-2 mt-5 text-sm font-bold text-gray-800">   
                            Batal
                        </button>
                    </div>
                    

                </form>
            </div>

        </section>
    )
}