import React from 'react';
import './Home.css'
import Fashion from './Fashion.jpg';
import Laptop from './Laptopimg.jpg';
import Fashionshop from './Fashionshop.jpg';
import shoe from './shoe.jpg';
import houserent from './houserent.jpg'
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css'

const AutoplaySlider = withAutoplay(AwesomeSlider);
const Home = ()=>{

    return(
        <div style={{marginTop:'65px'}}>
            <AutoplaySlider
            play={true}
                cancelOnInteraction={false}
                interval={6000} style={{height:'50vh',maxWidth:'900px',margin:'0 auto',display:'relative'}} >
                <div data-src={shoe} />
                <div data-src={Laptop} />
                <div data-src={Fashionshop} />
                <div data-src={houserent} />
            </AutoplaySlider>
            <div class="grid-wrapper">
                <div class="box zone">
                    <img src={Fashion} alt='' />
                    <p className='description'>Shop Now</p>
                </div>
                <div class="box zone">
                    <img src={Laptop} alt='' />
                    <p className='description'>Shop Now</p>
                </div>
                <div class="box zone">
                    <img src={shoe} alt='' />
                    <p className='description'>Shop Now</p>
                </div>
                <div class="box zone">
                    <img src={houserent} alt='' />
                    <p className='description'>Buy Now</p>
                </div>
             </div>
            
        </div>
    )
}

export default Home;