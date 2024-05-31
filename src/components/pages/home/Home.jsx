import React from 'react'
import Navbar from '../../navbar/Navbar'
import Homehero from '../../homehero/Homehero'
import Homeherocard from '../../homeherocard/Homeherocard'
import Homewallet from '../../homewallet/Homewallet'
import Mainfooter from '../../mainfooter/Mainfooter'
import Hometestimonial from '../../hometestimonial/Hometestimonial'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Homehero/>
        <Homeherocard/>
        <Homewallet/>
        <Hometestimonial/>
        <Mainfooter/>
    </div>
  )
}

export default Home