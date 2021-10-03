import { useState } from 'react'
import Head from 'next/head'
import Calendar from '../components/Calendar'
import Search from '../components/Search'
import Zoom from '../components/Zoom'
import RangeInput from '../components/RangeInput'
import DefrisCard from '../components/DefrisCard'

export default function Tracking() {
  const [showModal, setShowModal] = useState(false)
  const openModal = (ev) => {
    ev.preventDefault()
    if(ev.target === ev.currentTarget) {
      setShowModal(true)
   }
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <Head>
        <title>Track the plastic</title>
        <meta name="description" content="Leveraging AI/ML for plastic marine debris" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="map-container" onClick={openModal}>
        <div className="dropdowns wrapper">
          <div className="country-search">
            <Search />
          </div>
          <div className="date-search">
            <Calendar />
          </div>
        </div>
        <RangeInput />
        <Zoom />
        {
          showModal && <DefrisCard closeModal={closeModal} />
        }
      </div>
    </>
  )
}
