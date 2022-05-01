import React from "react";
import './style.css'
import Nav from './components/Nav'
import Item from './components/Item'
import items from './items'

export default function App(){
  const resultOfLoad = items.map(item => {
    return <Item 
      key={item.id}
      title={item.title}
      location={item.location}
      googleMapsUrl={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
    />
  })

  return(
    <div className="app">
      <div className="container">
        <Nav />
        <div className="items--div">
          {resultOfLoad}
        </div>
      </div>
    </div>
  )
}