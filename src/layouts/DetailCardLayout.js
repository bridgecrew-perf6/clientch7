import React from 'react'
import Box from '../components/Box'
import DetailCard from '../components/DetailCar'
import FilterCard from '../components/FilterCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const DetailCardLayout = () => {
  return (
    <div>
        <Navbar />
        <Box />
        <FilterCard />
        <DetailCard />
        <Footer />
    </div>
  )
}

export default DetailCardLayout