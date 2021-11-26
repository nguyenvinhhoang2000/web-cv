import house from "assets/img/house.png";
import me from "assets/img/me.png";
import sky from "assets/img/sky.png";
import React, { useEffect, useState } from "react";
import "./scrollparallax.scss";

ScrollParallax.propTypes = {};

function ScrollParallax(props) {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className='scroll-parallax'>
      <div
        className='sky'
        style={{
          backgroundImage: `url(/sky.png)`,
          transform: `translateY(${offsetY * -0.8}px)`,
        }}
      ></div>
      <div
        className='house'
        style={{
          backgroundImage: `url(/house.png)`,
          transform: `translateY(${offsetY * -0.1}px)`,
        }}
      ></div>

      <div
        className='me'
        style={{
          backgroundImage: `url(/me.png)`,
          transform: `translateY(${offsetY * -0.3}px)`,
        }}
      ></div>
      <div className='filter'></div>

      {/* Info */}
      <div className='text'>
        <div className='info'>
          <h1 className='info-typing'>Halo, I'm a</h1>
        </div>
      </div>
    </div>
  );
}

export default ScrollParallax;
