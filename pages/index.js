import Head from 'next/head'
import Calendar from '../components/Calendar'
import Search from '../components/Search'

export default function Home() {
  return (
    <>
      <Head>
        <title>Track the plastic</title>
        <meta name="description" content="Leveraging AI/ML for plastic marine debris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="map-container">
        <div className="filters wrapper">
          <div className="country-search">
            <Search />
          </div>
          <div className="date-search">
            <Calendar />
          </div>
        </div>
      </div>
    </>
  )
}
