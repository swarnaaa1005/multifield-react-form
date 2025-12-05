import React from 'react'
import SunImage from '../assets/sun.png'
import SeaImage from '../assets/sea.jpg'
import '../styles/Welcome.css'


const Welcome = () => {
  return (
    <div className='main'>
      <h2>Welcome to my gallery images</h2>
    <img src={SunImage} alt="imaage of sum" />
    <img src={SeaImage} alt="sea image" />
    </div>
  )
}

export default Welcome