import React from 'react';
import '../style/gallery.css';
import img from '../images/6849c5370fe9220a50959fbf72a2ed34-1.png';


const Gallery = () => {
  return (
    <div className="the-gallery">
      <div className="div">
        <div className="group-wrapper">
          <div className="group">
          
            <div className="overlap">
              <div className="overlap-group">
                <img className="img" src={img} alt="" />
              </div>
              <div className="group-2">
                <div className="text-wrapper1">Gallery</div>
                <div className="text-wrapper2">the</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;