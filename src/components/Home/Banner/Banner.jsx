import "./Banner.scss";


// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import SliderImg1 from "../../../assets/slider1.jpg"
import SliderImg2 from "../../../assets/slider2.jpg"
import SliderImg3 from "../../../assets/slider3.jpg"
import SliderImg4 from "../../../assets/slider4.jpg"
import SalesImg1 from "../../../assets/sales1.jpg"
import SalesImg2 from "../../../assets/sales2.jpg"
import SalesImg3 from "../../../assets/sales3.jpg"
import SalesImg4 from "../../../assets/sales4.jpg"


import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'









const Banner = () => {


  return (
    <>
      <div className="slide-container">
        <Slide>
          <div className="carousel-div">
            <img
             
            className="carousel-img" src={SliderImg1} alt="Image 1" />
          </div>
          <div className="carousel-div">
            <img
             
            className="carousel-img" src={SliderImg2} alt="Image 2" />
          </div>
          <div className="carousel-div">
            <img 
        
            className="carousel-img" src={SliderImg4} alt="Image 3" /> </div>
          <div className="carousel-div">
            <img 
         
            className="carousel-img" src={SliderImg3} alt="Image 3" />
          </div>
        </Slide>
      </div>

      <div className="sales">

        <div className="sales-img-main">

          <div className="sales-div">
            <img className="sales-img" src={SalesImg1} alt="Image 1" />
          </div>
          <div className="sales-div">
            <img className="sales-img" src={SalesImg2} alt="Image 1" />
          </div>


          <div className="sales-div">
            <img className="sales-img" src={SalesImg3} alt="Image 1" />
          </div>
          <div className="sales-div">
            <img className="sales-img" src={SalesImg4} alt="Image 1" />
          </div>
        </div>


      </div>

    </>
  )
};

export default Banner;







