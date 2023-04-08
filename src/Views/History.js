/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from "react-router-dom"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const History = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 1200 },
          items: 4,
        },
        desktop: {
          breakpoint: { max: 1200, min: 992 },
          items: 3,
        },
        tablet: {
          breakpoint: { max: 992, min: 576 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 576, min: 0 },
          items: 1,
        },
      };

    return (
        <div className='historyDiv'>
            <nav className="navbar navbar-expand-lg history-nav">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" >
          <img src="https://res.cloudinary.com/wonderwoman/image/upload/v1680901860/images/logo-2_b8ls8g.png" alt="logo" width="30" height="24" className="d-inline-block align-text-top" /> </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/history" className="nav-link" route-link>01. History</Link>
            </li>
            <li className="nav-item">
              <Link to="/team" className="nav-link" route-link>02. Team</Link>
            </li>
          </ul>
        </div>
      </div>
            </nav>
            <div class="historybody">
        <div className='historyText'>
            <img src='https://res.cloudinary.com/wonderwoman/image/upload/v1680951799/images/Text_brlzxw.png' alt='history symbol' />
       <p>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
       </p>
        </div>
        <div className='carouselContainer'>
        <Carousel responsive={responsive}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container ms-2 me-2 pt-2 pb-2"
            deviceType={responsive.deviceType}
            partialVisible
            swipeable
            removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}

            itemClass="carousel-item-padding-20-px ps-md-4 pe-md-2 rounded-5 room-card"
            slidesToSlide={1}

        >

        <div className='carouselImgDiv'>
            <img src='https://res.cloudinary.com/wonderwoman/image/upload/v1680901859/images/image1and3_n1asrn.png' alt='carousel' />
        </div>
        <div className='carouselImgDiv'>
            <img src='https://res.cloudinary.com/wonderwoman/image/upload/v1680901861/images/Image2and4_foqsmx.png' alt='carousel' />
        </div>
        <div className='carouselImgDiv'>
            <img src='https://res.cloudinary.com/wonderwoman/image/upload/v1680901859/images/image1and3_n1asrn.png' alt='carousel' />
        </div>
        <div className='carouselImgDiv'>
            <img src='https://res.cloudinary.com/wonderwoman/image/upload/v1680901861/images/Image2and4_foqsmx.png' alt='carousel' />
        </div>
        </Carousel>
        </div>
    </div>
    </div>
    );
}

export default History;