import Layout from "@/components/layout"
import Head from "next/head"


export default function Home() {
  return (

    <>
    <Layout
      title={'Inicio'}
      description={'Tienda de guitarras, cursos, blog'}
    >
      <Head>
        <title>Guitar-LA Inicio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;700;900&display=swap" rel="stylesheet"/>
      </Head>

      <h1>Desde home</h1>
    </Layout>
    </>
  )
}
