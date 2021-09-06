import Head from 'next/head'
import Header from '../components/Header';
import OurComponents from '../components/OurComponents';
import Personalization from '../components/Personalization';
import Footer from '../components/Footer';
export default function Home() {
  return (
    <div>
      <Head>
        <title> SENS </title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Gaming landing page" />
        <meta name="author" content="BRVO"/>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossOrigin="anonymous"/>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="space"></div>
      <OurComponents/>
      <Personalization/>
      <Footer/>
    </div>
  )
}
