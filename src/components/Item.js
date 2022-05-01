import React from "react";
import map from '../imgs/map.svg'

export default function Item(props) {
  return (
    <div>
      <div className="item">
        <img src={props.imageUrl} alt="something"/>
        <div className="item--info--div">
          <div className="item--info--map">
            <img src={map} alt='map'/>
            <p className="item--info--country">{props.location}</p>
            <a className="item--info--viewonmap" href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className="item--place">{props.title}</h1>
          <h3 className="item--date">{props.startDate} - {props.endDate}</h3>
          <p className="item--subtext">{props.description}</p>
        </div>
      </div>
      <p className="line" />
    </div>
    
  )
}