import React from 'react';
import slid_1 from '../../assets/How to Throw a Modern-Day Barn Raising - Hobby Farms.jpg'
import slid_2 from '../../assets/The Power of Giving Back_ How Community Involvement Can Boost Your Bottom Line _ Entrepreneur.jpg'
import slid_3 from '../../assets/Volunteerism Can Impact Employee Health and Well-being in a Positive Manner _ BBVA.jpg'
import slid_4 from '../../assets/🌊 The heroes at @cleanbeachmiami!.jpg'
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src={slid_1}
      className="w-full h-[550px] rounded-xl" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-info text-white">❮</a>
      <a href="#slide2" className="btn btn-info text-white">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={slid_2}
      className="w-full h-[550px] rounded-xl" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-info text-white">❮</a>
      <a href="#slide3" className="btn btn-info text-white">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={slid_3}
      className="w-full h-[550px] rounded-xl" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-info text-white">❮</a>
      <a href="#slide4" className="btn btn-info text-white">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={slid_4}
      className="w-full h-[550px] rounded-xl" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-info text-white">❮</a>
      <a href="#slide1" className="btn btn-info text-white">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;