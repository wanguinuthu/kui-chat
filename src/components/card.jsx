import '../styles/main.css'
import Source from '../assets/source.jpeg'

import React from 'react'

function Card() {
  return (
    <div className='container'>
<div className="profile-img">
   <img id='profile-pic' src={Source}/>
</div>
<div className="content">
    <div className="top-content">
<h5>Femi-Dev</h5>
<h5>9:20pm</h5>
    </div>
    <div className="bottom-content">
<p>Hey, how are you?</p>
<h6>12</h6>
    </div>
</div>
    </div>
  )
}

export default Card


