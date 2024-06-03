import React from 'react'
import Builds from '../components/builds/Builds'
// Components
import Hero from '../components/hero/Hero'
import Inter from '../components/inter/Inter'
import Simple from '../components/simple/Simple'
import Simple1 from '../components/simple1/Simple1'
import Sleek from '../components/sleek/Sleek'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Inter/>
      <Sleek/>
      <Simple1/>
      <Simple/>
      <Builds/>
    </div>
  )
}

export default Home