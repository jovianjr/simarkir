import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function SideMenu(props) {
    return(
        <section className='w-[100%] min-h-full bg-white overview-x-hidden p-0 m-0'>
            <div className="absolute text-white h-screen w-[27%] bg-[url('../assets/images/main-bg-simarkir.webp')] rounded-r-3xl py-14 flex flex-col justify-between">
                <section className='flex flex-col w-full text-center justify-center px-8 py-0'>
                    <div className='mb-6 w-full flex flex-col items-center'>
                        <Image src="/icon-park.png" alt='Simbol Parkir' className='mb-2' height={48} width={48}/>
                        <h1 className='text-[24px] font-bold leading-3 mb-3'>Simarkir</h1>
                        <p className='text-[12px] font-thin mb-4'>Sistem Manajemen Parkir DTETI</p>
                        <p className='text-[16px]'>Senin, 12 Maret 2023<br/>15:00</p>
                    </div>
                    <div className="flex flex-col gap-2 text-left w-full">
                        <Link href='/dashboard' className='w-full bg-neutral-50/20 rounded-sm drop-shadow-md px-2 py-0.5 flex items-center gap-2'>
                            <Image src="/home.svg" alt='Simbol Parkir' className='mb-2' height={30} width={30}/>
                            <p className='text-[14px]'>Dashboard</p>
                        </Link>
                        <Link href='/mplapangan' className='w-full bg-neutral-50/20 rounded-sm drop-shadow-md px-2 py-0.5 flex items-center gap-2'>
                            <Image src="/car.svg" alt='Simbol Parkir' className='mb-2' height={30} width={30}/>
                            <p className='text-[14px]'>Manajemen Kendaraan</p>
                        </Link>
                        <Link href='/mpakademik' className='w-full bg-neutral-50/20 rounded-sm drop-shadow-md px-2 py-0.5 flex items-center gap-2'>
                            <Image src="/search.svg" alt='Simbol Parkir' className='mb-2' height={30} width={30}/>
                            <p className='text-[14px]'>Register</p>
                        </Link>
                    </div>
                </section>
                <section className='w-full px-8 py-0'>
                    <p className='mb-3 mt-3'>Kapasitas Kendaraan</p>
                    <div className="flex flex-col gap-2 text-left w-full text-sm">
                        <div className='w-full bg-neutral-50/20 rounded-sm drop-shadow-md px-2 py-0.5 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Image src="/car.svg" alt='Simbol Parkir' className='mb-2' height={30} width={30}/>
                                <p className='text-[14px]'>Mobil</p>
                            </div>
                            <p>12/20</p>
                        </div>
                        <div className='w-full bg-[#DE2C13] rounded-sm drop-shadow-md px-2 py-0.5 flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <Image src="/motorbike.svg" alt='Simbol Parkir' className='mb-2' height={30} width={30}/>
                                <p className='text-[14px]'>Sepeda Motor</p>
                            </div>
                            <p>22/20</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className='absolute w-[73%] top-0 right-0 box-border'>
                {props.children}
            </div>
        </section>
    )
}