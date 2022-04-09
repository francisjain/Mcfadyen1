import React from 'react'
import "./Main.css"
import First from './First'
import SecondGrid from './SecondGrid'
import ThirdSlider from './ThirdSlider'

function Main() {
  return (
    <div className="margin">
        <First/>
        <SecondGrid/>
        <ThirdSlider/>
    </div>
  )
}

export default Main