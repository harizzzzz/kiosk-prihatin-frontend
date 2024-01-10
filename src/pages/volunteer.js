import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Volunteer() {

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
                    <li>Phone: +60 0109089373</li>
                    <li>Email: kioskprihatin@gmail.com</li>
                  </ul>
                  <div className="header-social">
                    <ul>
                      <li>
                        <Link to="#">
                          <i className="fab fa-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.facebook.com/sai4ull">
                          <i className="fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <i className="fab fa-linkedin-in" />
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link tof="#">
                          <i className="fab fa-google-plus-g" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="header-info-right d-flex align-items-center">
                  <div className="select-this">
                    
                  </div>
                  <ul className="contact-now">
                    <li>
                      <Link to="#">Subscribe Now</Link>
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
                   <a href="donate" className="btn header-btn">
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
   
            
<>
  <meta charSet="UTF-8" />
  <title>Volunteer With Us</title>
  <link rel="stylesheet" href="styles.css" />
  <div className="volunteer-form-container">
    <h2>Volunteer With Us</h2>
    <form id="volunteer-form">
      <label htmlFor="full-name">Full Name:</label>
      <input type="text" id="full-name" name="full-name" required="" />
      <br />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required="" />
      <br />
      <label htmlFor="phone">Phone:</label>
      <input type="tel" id="phone" name="phone" required="" />
      <br />
      <label htmlFor="expertise">Type of Expertise:</label>
      <select id="expertise" name="expertise" required="">
        <option value="" disabled="" selected="">
          Select expertise
        </option>
        <option value="Event Planning">Event Planning</option>
        <option value="Fundraising">Fundraising</option>
        <option value="Marketing">Marketing</option>
        <option value="Technical Skills">Technical Skills</option>
        {/* Add more expertise options as needed */}
      </select>
      <br />
       <label htmlFor="availability">Availability:</label>
      <select id="availability" name="availability" required="">
        <option value="" disabled="" selected="">
          Availability
        </option>
        <option value="Monday">Monday</option>
        <option value="Sunday">Sunday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Friday">Friday</option>
        {/* Add more expertise options as needed */}
      </select>
      <br />
      <label htmlFor="message">Message (Optional):</label>
      <textarea id="message" name="message" rows={4} defaultValue={""} />
      <br />
     <Link to="/tq">
  <button type="button">Submit</button>
</Link>
    </form>
  </div>
</>



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
                      <p>Address :UiTM KEDAH.</p>
                    </li>
                    <li>
                      <Link to="#">Phone : 60 109089373</Link>
                    </li>
                    <li>
                      <Link to="#">Email : kioskprihatin@gmail.com</Link>
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
                      <Link to="#"> View Project</Link>
                    </li>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">Testimonial</Link>
                    </li>
                    <li>
                      <Link to="#">Proparties</Link>
                    </li>
                    <li>
                      <Link to="#">Support</Link>
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
                    <Link to="https://colorlib.com" target="_blank">
                      Colorlib
                    </Link>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3">
                <div className="footer-social f-right">
                  <Link to="#">
                    <i className="fab fa-twitter" />
                  </Link>
                  <Link to="https://www.facebook.com/sai4ull">
                    <i className="fab fa-facebook-f" />
                  </Link>
                  <Link to="#">
                    <i className="fas fa-globe" />
                  </Link>
                  <Link to="#">
                    <i className="fab fa-behance" />
                  </Link>
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
export default Volunteer;