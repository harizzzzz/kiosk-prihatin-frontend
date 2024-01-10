import React, { Fragment } from "react";
import { Link } from "react-router-dom";


function Events() {

    return (
        
        <Fragment>


            <>
  {/* ? Preloader Start */}
  <div id="preloader-active">
    <div className="preloader d-flex align-items-center justify-content-center">
      <div className="preloader-inner position-relative">
        <div className="preloader-circle" />
        <div className="preloader-img pere-text">
          <img src="assets/img/logo/k2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* Preloader Start */}
  <header>
    {/* Header Start */}
    <div className="header-area">
      <div className="main-header ">
        <div className="header-top d-none d-lg-block">
          <div className="container-fluid">
            <div className="col-xl-12">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="header-info-left d-flex">
                  <ul>
                    <li>Phone: 60 109089373</li>
                    <li>Email: kioskprihatin@gmail.com</li>
                  </ul>
                  <div className="header-social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/sai4ull">
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </li>
                      <li>
                        {" "}
                        <a href="#">
                          <i className="fab fa-google-plus-g" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-info-right d-flex align-items-center">
                  <div className="select-this">
                   
                  </div>
                  <ul className="contact-now">
                    <li>
                      <a href="#">Subscribe Now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom  header-sticky">
          <div className="container-fluid">
            <div className="row align-items-center">
              {/* Logo */}
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="index.html">
                  <img src="assets/img/logo/k2.png" alt="" />
                  </a>
                </div>
              </div>
                 <div className="col-xl-10 col-lg-10">
                <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                  {/* Main-menu */}
                  <div className="main-menu d-none d-lg-block">
                    <nav>
                      <ul id="navigation">
                        <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                        <li>
                          <Link to="/volunteer">volunteer</Link>
                        </li>
                        <li>
                          <Link to="/events">social events </Link>
                        </li>
                        <li>
                          <Link to="/stocks">stocks</Link>
                        </li>
                        <li>
                          <Link to="/contact">contact</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* Header-btn */}
                  <div className="header-right-btn d-none d-lg-block ml-20">
                   <a  href="donate" className="btn header-btn">
                      Donate
                    </a>
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Header End */}
  </header>
  {/* header end */}
  <main>
    {/*? Hero Start */}
    <div className="slider-area2">
      <div className="slider-height2 d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="hero-cap hero-cap2 pt-20 text-center">
                <h2>social events </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Hero End */}
    {/*? Count Down Start */}
    <div
      className="count-down-area pt-25 section-bg"
      data-background="assets/img/gallery/section_bg02.png"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 col-md-12">
            <div className="count-down-wrapper">
              <div className="row justify-content-between">
                <div className="col-lg-3 col-md-6 col-sm-6">
                  {/* Counter Up */}
                  <div className="single-counter text-center">
                    <span className="counter color-green">6,200</span>
                    <span className="plus">+</span>
                    <p className="color-green">Donation</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  {/* Counter Up */}
                  <div className="single-counter text-center">
                    <span className="counter color-green">80</span>
                    <span className="plus">+</span>
                    <p className="color-green">Fund Raised</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  {/* Counter Up */}
                  <div className="single-counter text-center">
                    <span className="counter color-green">256</span>
                    <span className="plus">+</span>
                    <p className="color-green">Donation</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                  {/* Counter Up */}
                  <div className="single-counter text-center">
                    <span className="counter color-green">256</span>
                    <span className="plus">+</span>
                    <p className="color-green">Donation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Count Down End */}
    {/* Featured_job_start */}
    <section
      className="featured-job-area section-padding30 section-bg2"
      data-background="assets/img/gallery/section_bg03.png"
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-10 col-sm-12">
            {/* Section Tittle */}
            <div className="section-tittle text-center mb-80">
              <span>What we are boing</span>
              <h2>We arrange many social events for charity donations</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-12">
            {/* single-job-content */}
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="#">
                    <img src="assets/img/gallery/socialEvents1.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="#">
                    <h4>Donation is Hope</h4>
                  </a>
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      8:30 - 9:30am
                    </li>
                    <li>
                      <i className="fas fa-sort-amount-down" />
                      18.01.2021
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Athens, Greece
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            {/* single-job-content */}
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="#">
                    <img src="assets/img/gallery/socialEvents2.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="#">
                    <h4>A hand for Children</h4>
                  </a>
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      8:30 - 9:30am
                    </li>
                    <li>
                      <i className="fas fa-sort-amount-down" />
                      18.01.2021
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Athens, Greece
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            {/* single-job-content */}
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="#">
                    <img src="assets/img/gallery/socialEvents3.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="#">
                    <h4>Help for Children</h4>
                  </a>
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      8:30 - 9:30am
                    </li>
                    <li>
                      <i className="fas fa-sort-amount-down" />
                      18.01.2021
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Athens, Greece
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            {/* single-job-content */}
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="#">
                    <img src="assets/img/gallery/socialEvents1.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="#">
                    <h4>Donation is Hope</h4>
                  </a>
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      8:30 - 9:30am
                    </li>
                    <li>
                      <i className="fas fa-sort-amount-down" />
                      18.01.2021
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Athens, Greece
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            {/* single-job-content */}
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="#">
                    <img src="assets/img/gallery/socialEvents2.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="#">
                    <h4>A hand for Children</h4>
                  </a>
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      8:30 - 9:30am
                    </li>
                    <li>
                      <i className="fas fa-sort-amount-down" />
                      18.01.2021
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Athens, Greece
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-12">
            {/* single-job-content */}
            <div className="single-job-items mb-30">
              <div className="job-items">
                <div className="company-img">
                  <a href="#">
                    <img src="assets/img/gallery/socialEvents3.png" alt="" />
                  </a>
                </div>
                <div className="job-tittle">
                  <a href="#">
                    <h4>Help for Children</h4>
                  </a>
                  <ul>
                    <li>
                      <i className="far fa-clock" />
                      8:30 - 9:30am
                    </li>
                    <li>
                      <i className="fas fa-sort-amount-down" />
                      18.01.2021
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt" />
                      Athens, Greece
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Featured_job_end */}
  </main>
  <footer>
    <div
      className="footer-wrapper section-bg2"
      data-background="assets/img/gallery/footer_bg.png"
    >
      {/* Footer Top*/}
      <div className="footer-area footer-padding">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
              <div className="single-footer-caption mb-50">
                <div className="single-footer-caption mb-30">
                  <div className="footer-tittle">
                    <div className="footer-logo mb-20">
                      <a href="index.html">
                        <img src="assets/img/logo/logo2_footer.png" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Contact Info</h4>
                  <ul>
                    <li>
                      <p>Address :Your address goes here, your demo address.</p>
                    </li>
                    <li>
                      <a href="#">Phone : +8880 44338899</a>
                    </li>
                    <li>
                      <a href="#">Email : info@colorlib.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Important Link</h4>
                  <ul>
                    <li>
                      <a href="#"> View Project</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Testimonial</a>
                    </li>
                    <li>
                      <a href="#">Proparties</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="single-footer-caption mb-50">
                <div className="footer-tittle">
                  <h4>Newsletter</h4>
                  <div className="footer-pera footer-pera2">
                    <p>
                      Heaven fruitful doesn't over lesser in days. Appear
                      creeping.
                    </p>
                  </div>
                  {/* Form */}
                  <div className="footer-form">
                    <div id="mc_embed_signup">
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* footer-bottom */}
      <div className="footer-bottom-area">
        <div className="container">
          <div className="footer-border">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-xl-10 col-lg-9 ">
                <div className="footer-copy-right">
                  <p>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3">
                <div className="footer-social f-right">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="https://www.facebook.com/sai4ull">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fas fa-globe" />
                  </a>
                  <a href="#">
                    <i className="fab fa-behance" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</>

            

        </Fragment>
    )
}

export default Events;