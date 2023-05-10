import Head from 'next/head'


export default function Login() {
  return (
    <>
      <Head>
        <title>SIMARKIR</title>
        <meta name="description" content="Simarkir: Sistem Manajemen Parkir" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-[url('../assets/images/main-bg-simarkir.webp')] w-screen h-screen bg-cover flex flex-col justify-center items-center p-12">
        <h1 className="text-3xl font-bold text-white leading-3 mb-4">Selamat Datang!</h1>
        <h4 className='text-white'>Login untuk melanjutkan</h4>
        <form className='flex flex-col px-8 pt-6 pb-10 mt-8 bg-slate rounded-xl drop-shadow-lg w-full md:w-1/2 lg:w-1/3'>
            <label for="femail" className='text-blue font-bold'>Email</label>
            <input required type="email" id="femail" name="email" className='bg-white rounded-md py-2 px-4 text-base'/> <br/>
            <label for="password" className='text-blue font-bold'>Password</label>
            <input required type="password" id="fpassword" name="fpassword" className='bg-white rounded-md py-2 px-4 text-base'/> <br/>
            <input type="submit" value="Login" className='bg-blue text-white rounded-3xl text-bold py-2 px-4 text-base cursor-pointer'/>
        </form>
      </main>
    </>
  )
}
