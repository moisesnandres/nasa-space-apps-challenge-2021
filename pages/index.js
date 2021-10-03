import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { Pie } from 'react-chartjs-2';
import { plasticWaste, plasticByOcean } from '../utils/fakeData'

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
          <div className="card">
            <h2>Countries that are polluting the oceans the most</h2>
            <p>This is the annual metric of mismanaged plastic waste and the total ending up in global waters.</p>
            <div className="charts">
              <div className="plastic-waste">
                <h4><div className="plastic-waste-info"></div>Mismanaged plastic waste</h4>
                <ul>
                  { plasticWaste.map((row, index) => (
                    <li key={index}>
                      <p className="country">{row.country}</p>
                      <div className="bar">
                        <div style={{ width: `${row.percentage * 2}px`}}></div>
                        <p>{row.label} millions</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <h2>Plastic Debris Growth worldwide in the last 8 years</h2>
            <div className="plastic-growth">
              <Image src="/images/chart.png" alt="Chart" width={600} height={400} />
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="card plastic-worldwide">
            <h2>Did you knew that 80% of the trash that you find in the ocean is plastic?</h2>
            <Image src="/images/continents.png" alt="Continents" width={670} height={344} />
            <p>Do you want to see the real time tracking?</p>
            <Link href="/">
              <a className="cta">See tracking</a>
            </Link>
          </div>
          <div className="card">
            <h2>Plastic Debris by Ocean</h2>
            <div className="plastic-by-ocean">
              <Pie
                data={plasticByOcean}
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
