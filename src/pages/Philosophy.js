import React from 'react'
import '../style/philosophy.css'
import raj from '../images/article-2306456-1932DA8E000005DC-972_634x956.jpg'


const Philosophy = () => {
  return (
<div class="the-gallery">
    <div class="div">
      <div class="group-wrapper">
        <div class="group">
          <div class="overlap">
          <p class="at-the-gilded-leash ">
                            At The Gilded Leash, we believe in the transformative power of photography as an art form that bridges the worlds of cinematic elegance and the untamed beauty of nature. Our philosophy is rooted in crafting evocative narratives where high fashion seamlessly intertwines with the organic grace of the natural world.We celebrate the profound connection between humanity, style, and the environment, creating imagery that not only inspires but also captivates the imagination. Each photograph tells a unique story, blending sophistication with the raw, untamed spirit of the wild. Through our work, we aim to showcase the harmony between luxury and nature, inviting our audience to experience the beauty of this union.At the heart of The Gilded Leash lies a commitment to redefining artistic expression, where every image becomes a testament to the elegance of fashion and the enduring allure of the natural world.
                        </p>
            <div class="overlap-group">
              <img class="img" src={raj} alt="" />
            </div>
            <div class="group-2">
              <div class="text-wrapper-2">the</div>
              <div class="text-wrapper">Philosophy</div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  )
}

export default Philosophy