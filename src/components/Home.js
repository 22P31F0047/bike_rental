import React from 'react'
import image from '../images/rideon.png'
export default function Home() {
  return (
    <>
    <div className="container-fluid nav">
        <img src={image} alt="emledhu le"/>
        <input type="text" placeholder='search...'/><button>SEARCH</button>

    </div>
    
    
    </>
  )
}
