import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Track the plastic</title>
        <meta name="description" content="Leveraging AI/ML for plastic marine debris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="map-container">
        <div className="filters"></div>
      </div>
    </>
  )
}
