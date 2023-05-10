import Head from 'next/head'


export default function SideMenu() {
    return(
        <div className="absolute text-white h-screen w-1/4 bg-[url('../assets/images/main-bg-simarkir.webp')] rounded-r-3xl py-14 flex flex-col justify-between">
            <section className='flex flex-col w-full text-center justify-center px-8 py-0'>
                <div className='mb-8 w-full'>
                    <h1 className='text-2xl font-bold leading-3 mb-4'>Simarkir</h1>
                    <p className='text-xs font-thin mb-8'>Sistem Manajemen Parkir DTETI</p>
                    <p >Senin, 12 Maret 2023<br/>15:00</p>
                </div>
                <div className="flex flex-col gap-2 text-left w-full text-sm">
                    <div className='w-full bg-neutral-50/20 rounded-sm drop-shadow-md px-4 py-1.5'><p>Dashboard</p></div>
                    <div className='w-full bg-neutral-50/20 rounded-sm drop-shadow-md px-4 py-1.5'><p>Manajemen Kendaraan</p></div>
                    <div className='w-full bg-neutral-50/20 rounded-sm drop-shadow-md px-4 py-1.5'><p>Register</p></div>
                </div>
            </section>
            <section className='w-full px-8 py-0'>
                <p className='mb-3'>Kapasitas Kendaraan</p>
                <div className="flex flex-col gap-2 text-left w-full text-sm">
                    <div className='w-full bg-neutral-50/20 rounded-sm drop-shadow-md px-4 py-1.5'><p>Mobil</p></div>
                    <div className='w-full bg-neutral-50/20 rounded-sm drop-shadow-md px-4 py-1.5'><p>Sepeda Motor</p></div>
                </div>
            </section>

        </div>
    )
}