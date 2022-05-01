import React from "react";
import logo from '../imgs/logo.svg'

export default function Nav() {
  return(
    <div className="nav">
      <img className="nav--logo" src={logo} alt="logo"/>
      <p className="nav--title">my travel journal.</p>
    </div>
  )
}