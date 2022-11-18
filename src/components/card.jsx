import '../styles/main.css'
import Source from '../assets/source.jpeg'

import React from 'react'

function Card(props) {
  return (
    <div className='container'>
<div className="profile-img">
   <img id='profile-pic' src={props.profile_img}/>
</div>
<div className="content">
    <div className="top-content">
<h5 id='chat-name'>{props.chat_name}</h5>
<h5 id='last-seen'>{props.chat_time}</h5>
    </div>
    <div className="bottom-content">
<p id='chat-content'>{props.chat_content}</p>
<h6 id='chat-number'>{props.chat_number}</h6>
    </div>
</div>
    </div>
  )
}

export default Card


