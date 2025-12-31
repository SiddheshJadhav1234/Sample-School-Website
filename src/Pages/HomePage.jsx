import React from 'react'
import GetStartedToday from '../components/Home/GetStartedToday'
import SchoolImages from '../components/Home/SchoolImages'
import Slogan from '../components/Home/Slogan'
import WhatOurclientSays from '../components/Home/WhatOurClientSays'
import WhyChooseUs from '../components/Home/WhyChooseUs'
import Graph from '../components/Home/graph'
import Header from '../components/Layouts/Header'
import Footer from '../components/Layouts/Footer'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Slogan />
      <SchoolImages />
      <Graph />
      <WhyChooseUs />
      <WhatOurclientSays />
      <GetStartedToday />
      <Footer />
    </div>
  )
}

export default HomePage