import React from "react";
import Figure from './Figure'
export default function Card (title, text, imageURL, date) {
    return (
      <div className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <figure>
      imageURL={imageURL}
      caption={date}
     </figure>
    </div>
    )
  }
  
  
  