import React from 'react'
import {Link} from 'react-router-dom'
import '../style/vision.css'
import become from '../images/how-to-become-a-professional-commercial-photographer-1.png'
import vp from '../images/vp006-800x1050-1@2x.png'
import image1 from '../images/--3-1@2x.png'
import image2 from '../images/--2-1.png'

const Vision = () => {
  return (
<div class="the-vision">
    <div class="div">
      <div class="vision">
        <div class="group">
          <div class="overlap">
            <div class="overlap-group">
              <img class="how-to-become-a" src={become} alt=""/>
              <div class="text-wrapper">behind the lens</div>
            </div>
            <div class="overlap-2">
            <Link to='/Vision/Philosophy'>  <img class="vp-x" src={vp} alt=""/></Link>
            {/* <Outlet/> */}
              <div class="text-wrapper-2">our philosophy</div>
            </div>
          </div>
        </div>
      </div>
      <div class="vision-2">
        <div class="overlap-wrapper">
          <div class="overlap-3">
            <div class="overlap-group-2">
              <img class="element" src={image1} alt="" />
              <img class="element-2" src={image2} alt=""/>
              <div class="group-2">
                <div class="text-wrapper-5">Vision</div>
                <div class="text-wrapper-6">the</div>
              </div>
            </div>
            <p class="at-the-gilded-leash">
              At The Gilded Leash, our vision is to transform photography into a fusion of cinematic artistry and the
              untamed beauty of nature. We aim to craft evocative stories where high fashion meets the organic
              elegance of the natural world, creating images that inspire and captivate.<br />Through our work, we
              celebrate the profound connection between humanity, style, and the environment. Each photograph becomes
              a narrative, blending sophistication with the raw spirit of nature, inviting viewers to experience the
              harmony between luxury and the wild.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Vision