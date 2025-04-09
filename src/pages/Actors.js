import React from 'react'
import '../style/actors.css'
import newport from '../images/newportraitcrop-quietpower1-jpg-1.png'
import dzb from '../images/1000-f-239181919-dchzkoso56oki5mwydzbmddexe9fd1jh-1.png'
import im2 from '../images/4a5ec223c95fad5d93a4b8d8d8f71059-1.png'
import rajdeep from '../images/rajdeeps-image-jpg-1.png'



const Actors = () => {
  return (
<div class="the-actors">
    <div class="div">
      <div class="actors">
        <div class="group">
          <div class="overlap-group">
            <img class="newportraitcrop" src={newport} alt="" />
            <div class="text-wrapper">the Curator</div>
          </div>
        </div>
      </div>
      <div class="group-wrapper">
        <div class="overlap-group-wrapper">
          <div class="overlap-group-2">
            <img class="element-f" src={dzb} alt="" />
            <img class="img-2" src={im2} alt="" />
            <div class="text-wrapper-2">the Stylist</div>
            <div class="text-wrapper-3">the Photographer</div>
          </div>
        </div>
      </div>
      <div class="div-wrapper">
        <div class="group-2">
          <div class="group-3">
            <div class="overlap-wrapper">
              <div class="overlap">
                <p class="p">
                  At the Gilded Leash, we believe every project deserves a team of experts who bring their unique
                  skills and vision to the table. Our trio of specialists is here to ensure your experience is
                  seamless, inspiring, and tailored to your needs.
                </p>
                <div class="group-4">
                  <div class="overlap-group-3">
                    <div class="text-wrapper-7">the</div>
                    <div class="text-wrapper-8">Actors</div>
                  </div>
                </div>
                <div class="overlap-2">
                  <img class="rajdeeps-image-jpg" src={rajdeep} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Actors