import React from 'react'
import {Link} from 'react-router-dom'
import '../style/home.css'
import grazia from '../images/https---graziamagazine-com-fashion-shoot-the-high-road-thereinve.png'
import sheepskin from '../images/overland-sheepskin-1.png'
import danegirl from '../images/dane-girl-portrait-pictures-1.png'
import istockphoto from '../images/istockphoto-532333465-612x612-1.png'
import img2 from '../images/3a27b048842ab4fc1f5a3d741498f68e-2@2x.png'

const Home = () => {
  return (
<div class="home-page">
    <div class="div">
      <div class="home">
        <div class="group">
          <div class="overlap-group-wrapper">
            <div class="overlap-group">
            <Link to="/Gallery">
              <img class="https-graziamagazine" src={grazia} alt=""/></Link>
              
              <div class="the-gallery">&nbsp;&nbsp;&nbsp;&nbsp; the Gallery</div>
              <p class="text-wrapper">
                the Gilded Leash redefines modern high-end photography by blending cinematic artistry with nature and
                the creatures that inhabit it. We create a unique, evocative experience in a space where style meets
                storytelling, showcasing unparalleled elegance in a captivating fusion of fashion and nature.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="group-wrapper">
        <div class="group-2">
          <div class="overlap-group-2">
            <Link to="/Service"><img class="overland-sheepskin" src={sheepskin} alt=""/></Link>
            <div class="the-service">&nbsp;&nbsp;&nbsp;&nbsp; the Service</div>
            <p class="we-offer-high-end">
              We offer high-end videography, photography, and styling, blending cinematic artistry with elegance to
              create captivating visuals where fashion, storytelling, and nature come together seamlessly.&#34;
            </p>
          </div>
        </div>
      </div>
      <div class="home-2">
        <div class="overlap-wrapper">
          <div class="overlap">
            <div class="overlap-group-3">
              <Link to="/Actors"><img class="dane-girl-portrait" src={danegirl} alt=""/></Link>
              </div>
            <div class="the-actors1">&nbsp;&nbsp;&nbsp;&nbsp; the Actors</div>
            <div class="overlap-2">
              <p class="p">
                Our team of passionate creatives bring unmatched dedication and devotion to the arts, crafting
                breathtaking visuals that tell a story
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="div-wrapper">
        <div class="overlap-3">
          <div class="group-3">
            <p class="text-wrapper-2">
              the Gilded Leash redefines modern high-end photography by blending cinematic artistry with nature and
              the creatures that inhabit it. We create a unique, evocative experience in a space where style meets
              storytelling, showcasing unparalleled elegance in a captivating fusion of fashion and nature.
            </p>
            <div class="the-vision">&nbsp;&nbsp;&nbsp;&nbsp; the Vision</div>
          </div>
          <Link to="/Vision"><img class="istockphoto" src={istockphoto} alt="" /></Link>
          <div class="group-4">
            <div class="overlap-4">
              <div class="overlap-group-4">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="home-3">
        <div class="group-5">
          <div class="overlap-group-5">
            <img class="img-2" src={img2} alt="" />
            <div class="group-6">
              <div class="text-wrapper-3">Gilded Leash</div>
              <div class="text-wrapper-4">the</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home