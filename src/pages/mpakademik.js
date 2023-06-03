import SideMenu from '@/Components/SideMenu'
import Head from 'next/head'


export default function MpAkademik() {
    return (
        <SideMenu>
            <Head>
                <title>SIMARKIR</title>
                <meta name="description" content="Simarkir: Sistem Manajemen Parkir" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <section class="h-screen bg-white">
                
                <div class="mr-10 ml-10 mt-6 mb-6 md:flex md:items-baseline md:justify-between">
                    <div>
                        <h1>Daftar Kendaraan</h1>
                        <p class="subt"> Daftar kendaraan terdaftar sebagai milik civitas DTETI </p>
                    </div>

                    <div class="relative flex items-center mt-4 md:mt-0">
                        <span class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"
                            class="w-5 h-5 mx-3 text-black">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>

                        <input type="text" placeholder="Cari"
                        class="block w-full py-1.5 pr-5 text-black border border-gray-200 rounded-full
                        md:w-80 placeholder-gray placeholder-font-bold pl-11 rtl:pr-11 rtl:pl-5 focus:border-gray-200 focus:ring-gray-200
                        focus:outline-none focus:ring focus:ring-opacity-40"/> <br/>
                    </div>
                </div>

                <div class="mr-10 ml-10 md:flex md:items-baseline md:justify-between inline-flex overflow-hidden">
                    <div class="border-[1px] border-gray-800 inline-flex overflow-hidden rounded-lg divide divide-x divide-gray-800">
                        <button
                        class="px-5 py-2 text-xs font-medium text-black bg-white transition transition-200
                        hover:text-white hover:bg-gray-800 active:text-white active:bg-gray-800">
                            Mobil
                        </button>

                        <button
                        class="px-5 py-2 text-xs font-medium text-black bg-white transition transition-200
                        hover:text-white hover:bg-gray-800 active:text-white active:bg-gray-800">
                            Motor
                        </button>
                    </div>

                    <div class="border-[1px] border-gray-800 inline-flex overflow-hidden rounded-lg divide divide-x divide-gray-800">                  
                            <button
                            class="px-5 py-2 text-xs font-medium text-black bg-white transition transition-200
                            hover:text-white hover:bg-gray-800 active:text-white active:bg-gray-800">
                                Dosen
                            </button>

                            <button
                            class="px-5 py-2 text-xs font-medium text-black bg-white transition transition-200
                            hover:text-white hover:bg-gray-800 active:text-white active:bg-gray-800">
                                Mahasiswa
                            </button>

                            <button
                            class="px-5 py-2 text-xs font-medium text-black bg-white transition transition-200
                            hover:text-white hover:bg-gray-800 active:text-white active:bg-gray-800">
                                Tendik
                            </button>
                    </div>

                    <div>
                        <button class="ml-1 inline-flex overflow-hidden rounded-lg divide divide-x divide-white/20">
                            <div class="px-5 py-2 text-xs font-medium text-white bg-gray-800"> Tambah </div>
                            <div alt="tambah" class="px-3 py-2 text-xs font-medium text-white bg-gray-800"> + </div>
                        </button>
                    </div>
                </div>

                <div class="flex flex-col mr-10 ml-10 mt-4">
                    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div class="overflow-x-auto border border-gray-200 dark:border-gray-200 md:rounded-lg">
                                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-200">

                                    <thead class="bg-gray-200/50 dark:bg-gray-200/50">
                                        <tr class="text-black text-sm text-left rtl:text-right">
                                            <th scope="col" class="text-right"> No </th>
                                            <th scope="col"> Nama </th>

                                            <th scope="col">
                                                <button class="flex items-center gap-x-3 focus:outline-none">
                                                    <span>Kendaraan</span>

                                                    <svg class="h-3" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                        <path d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z" fill="currentColor" stroke="currentColor" stroke-width="0.1" />
                                                        <path d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z" fill="currentColor" stroke="currentColor" stroke-width="0.3" />
                                                    </svg>
                                                </button>
                                            </th>

                                            <th scope="col"> Kelompok Civitas </th>
                                            <th scope="col"> NIP/NIU </th>
                                            <th scope="col"> Act </th>
                                        </tr>
                                    </thead>

                                    <tbody class="divide-y divide-gray-200 dark:divide-gray-200">
                                        <tr class="odd:bg-white even:bg-slate-50 text-black text-sm font-normal text-left rtl:text-right">
                                            <td class="text-sm px-4 py-3.5 text-right"> 1 </td>
                                            <td class="text-sm px-4 py-3.5 max-w-fit"> Michael Sitorus </td>

                                            <td class="px-4 py-2.5 flex items-center gap-x-3 focus:outline-none">
                                                <div>
                                                    <p class="font-bold text-sm"> AB 1982 LL </p>
                                                    <p class="text-gray-600 text-xs"> Motor </p>
                                                </div>
                                            </td>

                                            <td class="px-4 py-3.5 text-sm whitespace-nowrap">
                                                <div class="tendik"> Tendik </div>
                                            </td>

                                            <td class="px-4 py-3.5 text-sm whitespace-nowrap"> 123456 </td>
                                            <td class="px-4 py-3.5 text-sm">
                                                <div class="inline-flex overflow-hidden rounded-lg divide divide-x divide-white/20">
                                                    <button class="px-2.5 py-1.5 text-xs font-medium text-black bg-white transition transition-200
                                                    hover:text-white hover:bg-gray-800 active:text-white active:bg-gray-800">
                                                        Edit
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        
                                        <tr class="odd:bg-white even:bg-slate-50  text-black text-sm font-normal text-left rtl:text-right">
                                            <td class="text-sm px-4 py-3.5 text-right"> 2 </td>
                                            <td class="text-sm px-4 py-3.5 max-w-fit"> Michael Sitorus </td>

                                            <td class="px-4 py-2.5 flex items-center gap-x-3 focus:outline-none">
                                                <div>
                                                    <p class="font-bold text-sm"> BA 1342 LN </p>
                                                    <p class="text-gray-600 text-xs"> Mobil </p>
                                                </div>
                                            </td>

                                            <td class="px-4 py-3.5 text-sm whitespace-nowrap">
                                                <div class="dosen"> Dosen </div>
                                            </td>

                                            <td class="px-4 py-3.5 text-sm whitespace-nowrap"> 789123 </td>
                                            <td class="px-4 py-3.5 text-sm">
                                                <div class="inline-flex overflow-hidden rounded-lg divide divide-x divide-white/20">
                                                    <button class="px-2.5 py-1.5
                                                    text-xs font-medium text-black bg-white transition transition-200
                                                    hover:text-white hover:bg-gray-800 active:text-white active:bg-gray-800">
                                                        Edit
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="odd:bg-white even:bg-slate-50 text-black text-sm font-normal text-left rtl:text-right">
                                            <td class="text-sm px-4 py-3.5 text-right"> 3 </td>
                                            <td class="text-sm px-4 py-3.5 max-w-fit"> Michael Sitorus </td>

                                            <td class="px-4 py-2.5 flex items-center gap-x-3 focus:outline-none">
                                                <div>
                                                    <p class="font-bold text-sm"> AB 3412 LL </p>
                                                    <p class="text-gray-600 text-xs"> Mobil </p>
                                                </div>
                                            </td>

                                            <td class="px-4 py-3.5 text-sm whitespace-nowrap">
                                                <div class="dosen"> Dosen </div>
                                            </td>

                                            <td class="px-4 py-3.5 text-sm whitespace-nowrap"> 456789 </td>
                                            <td class="px-4 py-3.5 text-sm">
                                                <div class="inline-flex overflow-hidden rounded-lg divide divide-x divide-white/20">
                                                    <button class="px-2.5 py-1.5 text-xs font-medium text-black bg-white transition transition-200
                                                    hover:text-white hover:bg-gray-800 active:text-white active:bg-gray-800">
                                                        Edit
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr class="odd:bg-white even:bg-slate-200 text-black text-sm font-normal text-left rtl:text-right">
                                            <td class="text-sm px-4 py-3.5 text-right"> 4 </td>
                                            <td class="text-sm px-4 py-3.5 max-w-fit"> Michael Sitorus </td>

                                            <td class="px-4 py-2.5 flex items-center gap-x-3 focus:outline-none">
                                                <div>
                                                    <p class="font-bold text-sm"> AB 1982 LL </p>
                                                    <p class="text-gray-600 text-xs"> Motor </p>
                                                </div>
                                            </td>

                                            <td class="px-4 py-3.5 text-sm whitespace-nowrap">
                                                <div class="mahasiswa"> Mahasiswa </div>
                                            </td>

                                            <td class="px-4 py-3.5 text-sm whitespace-nowrap"> 135791 </td>
                                            <td class="px-4 py-3.5 text-sm">
                                                <div class="inline-flex overflow-hidden rounded-lg divide divide-x divide-white/20">
                                                    <button class="px-2.5 py-1.5 text-xs font-medium text-black bg-white transition transition-200
                                                    hover:text-white hover:bg-gray-800 active:text-white active:bg-gray-800">
                                                        Edit
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                    
                                </table>
                            </div>
                        </div>
                    </div>
                </div>            
            </section>

        </SideMenu>
    )
}