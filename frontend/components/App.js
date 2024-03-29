import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const api_key = 'DEMO_KEY'
const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`






function App() {
  const [apod,setApod] = useState()
  useEffect(() => {
    function fetchPhoto() {
      axios.get(url)
      .then(res => {
        console.log( res.data)
        setApod(res.data)
      })
      .catch(err => {
        console.log(err.message)
      })
      
    }
   
    fetchPhoto()
   setApod({
        "date": "2024-03-29",
        "explanation": "Looping through the Jovian system in the late 1990s, the Galileo spacecraft recorded stunning views of Europa and uncovered evidence that the moon's icy surface likely hides a deep, global ocean. Galileo's Europa image data has been remastered here, with improved calibrations to produce a color image approximating what the human eye might see. Europa's long curving fractures hint at the subsurface liquid water.  The tidal flexing the large moon experiences in its elliptical orbit around Jupiter ...",
        "hdurl": "https://apod.nasa.gov/apod/image/2403/PIA19048europa.jpg",
        "media_type": "image",
        "service_version": "v1",
        "title": "Galileo's Europa",
        "url": "https://apod.nasa.gov/apod/image/2403/PIA19048europa1024.jpg"
   })
  }, [])
  if (!apod) return "Fetching Photo of the Day..."
  return (
    <section>
      <Card>
        title={apod.title}
        text={apod.explanation}
        imageURL={apod.url}
        date={apod.date}
      </Card>
    </section>
  )
  }

export default App
