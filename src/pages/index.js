import SideMenu from '@/Components/SideMenu'
import Head from 'next/head'


export default function Home() {
  return (
    <SideMenu>
      <Head>
        <title>SIMARKIR</title>
        <meta name="description" content="Simarkir: Sistem Manajemen Parkir UGM" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">Halo Gadjah Mada!</h1>
      </main>
    </SideMenu>
  )
}
