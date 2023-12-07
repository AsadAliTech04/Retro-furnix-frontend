import React from 'react'
import "./About.scss"
import Service from "../../assets/my Image/service.jpg";
import Logo from "../../assets/reto-furnix-logo.jpg";
import { Helmet } from 'react-helmet';





function About() {
  return (
    <div className="about">

      {/* <Helmet>
        <meta charSet="utf-8" />
        <title>Retro Furnix| About</title>
        <link rel="canonical" href="https://retrofurnix.com/about" />
      </Helmet> */}
      <Helmet>
        <title>RetroFurnix - About</title>
        <meta name="description" content="Learn more about RetroFurnix - Your destination for quality vintage furniture" />
       
      </Helmet>
      <div className="content">
        <div className="com-logo">
          <div className="left">
            <div className="img">
              <img src={Logo} alt="" />

            </div>
          </div>
          <div className="right">
            <div className="title">
              <span>About Us</span>
            </div>
            <div className="headline">
              <span>Retro Furnix</span>
            </div>
            <div className="desc">
              <span>Discover the UK's finest furniture deals at RetroFurnix. We offer a stunning collection of retro and vintage furniture pieces that blend style and affordability. Elevate your home's charm with our unique selection, making your space a true reflection of your taste and personality. Shop now!
              </span>
            </div>
          </div>
        </div>
        <div className="detail">
          <div className="desc">
            <span>
              Welcome to RetroFurnix, your ultimate destination for discovering exquisite furniture that effortlessly blends affordability with style. At RetroFurnix, we take pride in offering an extensive range of retro and vintage furniture pieces, all curated to cater to your unique taste and preferences.

              Our commitment to providing high-quality furniture at competitive prices makes us a top choice for those seeking to enhance their living spaces across the UK. Whether you're looking to revamp your living room, bedroom, or any other area of your home, our collection offers something for every corner.

              Explore our website to find an array of carefully chosen items, from mid-century modern sofas to chic dining tables and distinctive decor elements. Each piece tells its own story, combining the nostalgia of yesteryears with the practicality of today's needs.

              We understand that your home is a canvas for self-expression, and our furniture complements your vision. By choosing RetroFurnix, you can transform your living space into a unique and charming sanctuary that truly reflects your personality and style.

              With easy navigation, secure transactions, and prompt delivery services, your shopping experience with us is seamless and enjoyable. It's time to transform your living spaces into something exceptional. Explore RetroFurnix today and make your home truly your own."
            </span>
          </div>
        </div>
        <div className="staff">
          <div className="row1">
            <div className="box1">
              <div className="title">
                <span>Our Staff</span>

              </div>
              <div className="desc">
                <span>
                  At RetroFurnix, our dedicated team of experts ensures top-quality furniture, offering a personalized touch to every piece. Meet our passionate staff today!
                </span>
              </div>

            </div>
            <div className="box2">
              <div className="title">
                <span>Asad Ali</span>

              </div>
              <div className="desc">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa voluptatem deserunt maxime voluptate voluptas iure facilis</span>
              </div>
              <div className="img">
                <img src={Service} alt="" width={100} />

              </div>
            </div>
          </div>
          <div className="row2">
            <div className="box3">
              <div className="title">
                <span>Asad Ali</span>

              </div>
              <div className="desc">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa voluptatem deserunt maxime voluptate voluptas iure facilis</span>
              </div>
              <div className="img">
                <img src={Service} alt="" width={100} />

              </div>
            </div>
            <div className="box4">
              <div className="title">
                <span>Asad Ali</span>

              </div>
              <div className="desc">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa voluptatem deserunt maxime voluptate voluptas iure facilis</span>
              </div>
              <div className="img">
                <img src={Service} alt="" width={100} />

              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  )
}

export default About