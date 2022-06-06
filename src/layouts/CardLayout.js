import React from 'react'
import Box from '../components/Box'
import Card from '../components/Card'
import FilterCard from '../components/FilterCard'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const CardLayout = ({user}) => {
  return (
    <div>
        <Navbar user={user} />
        <Box />
        <FilterCard />
        <Card />
        <Footer />
    </div>
  )
}

export default CardLayout