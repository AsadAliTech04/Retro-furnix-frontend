import React from 'react'
import "./About.scss"
import Service from "../../assets/my Image/service.jpg";



function About() {
  return (
    <div className="about">
      <div className="content">
        <div className="com-logo">
          <div className="left">
            <div className="img">
              <img src={Service} alt="" />

            </div>
          </div>
          <div className="right">
            <div className="title">
              <span>About Us</span>
            </div>
            <div className="headline">
              <span>Sample Headline</span>
            </div>
            <div className="desc">
              <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nemo iste laborum vero odio enim qui perspiciatis debitis! Eius
                , quibusdam fugit magnam ullam quasi, consectetur numquam
                repudiandae ad nam pariatur in Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Placeat, atque sunt.
              </span>
            </div>
          </div>
        </div>
        <div className="detail">
          <div className="desc">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit debitis animi soluta, est corporis consectetur excepturi quo doloribus dolorem fugit alias vero asperiores nesciunt non culpa autem quidem.
              Perspiciatis, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi molestiae iusto commodi, voluptates et nostrum quidem laborum non facere ab dolores, eaque temporibus fuga. Nam ullam sapiente
              adipisci quasi alias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, atque laboriosam, aliquid id eaque consequatur corporis sit eligendi sequi odit deserunt, totam tempore
              magnam et quisquam neque repellat voluptatem veritatis.
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
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Culpa voluptatem deserunt maxime voluptate voluptas iure facilis
                  beatae officia .</span>
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