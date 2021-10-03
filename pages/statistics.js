import Head from 'next/head'
import Image from 'next/image'

export default function Statistics() {
  return (
    <div className="statistic-container">
      <Head>
        <title>Track the plastic</title>
        <meta name="description" content="Leveraging AI/ML for plastic marine debris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="wrapper">
        <div className="left-column">
          <div className="card info-card">
            <div className="info-container">
              <h1>Welcome to Track the plastic!</h1>
              <p>Our mission is to share information about marine plastic debris pollution in our ocean, in order to take action and save our planet.</p>
            </div>
            <Image src="/images/fish_logo.png" alt="Fish Logo" width={143} height={137} />
          </div>
        </div>
        <div className="right-column"></div>
      </div>
    </div>
  )
}
