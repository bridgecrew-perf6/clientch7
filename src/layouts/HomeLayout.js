import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FilterCard from '../components/FilterCard'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <FilterCard />
      <Footer />
    </div>
  )
}

export default HomeLayout