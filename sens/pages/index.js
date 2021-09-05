import Head from 'next/head'
import Header from '../components/Header';
export default function Home() {
  return (
    <div>
      <Head>
        <title> SENS </title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Gaming landing page" />
        <meta name="author" content="BRVO"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
     
    </div>
  )
}
