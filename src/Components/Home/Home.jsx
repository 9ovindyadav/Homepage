import React from 'react'
import CliAudio from "../../assets/client-audiophile.svg" 
import DataBiz from "../../assets/client-databiz.svg"
import Meet from "../../assets/client-meet.svg"
import Maker from "../../assets/client-maker.svg" 
import "./home.scss"
import MobileImg from "../../assets/image-hero-mobile.png"

export const Home = () => {
  return (
    <div className='home-page'>
        <div className="left">
            <div className="mobile-img">
                <img src={MobileImg} alt="" />
            </div>
            <div className="heading">
            <h1>Make</h1>
            <h1>Remote work</h1>
            </div>
            <p>Get your team in sync.no matter your location. Streamline process. 
                Create team rituals, and watch productivity soar.
            </p>
            <button>Learn more</button>
            <div className="logo">
                <img src={DataBiz} alt="data-biz" />
                <img src={CliAudio} alt="client-audiophil" />
                <img src={Meet} alt="meet" />
                <img src={Maker} alt="maker" />
            </div>
           
        </div>
        <div className='desktop-img'>
        </div>
    </div>
  )
}
