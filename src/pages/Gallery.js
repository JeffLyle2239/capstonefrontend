import React from 'react'
import '../style/gallery.css'
import img from '../images/6849c5370fe9220a50959fbf72a2ed34-1.png'

const Gallery = () => {
  return (
    <div class="the-gallery">
    <div class="div">
      <div class="group-wrapper">
        <div class="group">
          <div class="overlap">
            <div class="overlap-group">
              <img class="img" src={img} alt="" />
            </div>
            <div class="group-2">
              <div class="text-wrapper1">Gallery</div>
              <div class="text-wrapper2">the</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Gallery