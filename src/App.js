import React from 'react';
// import logo from './logo.svg';

import './App.css'; 
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';  
import CardDetail from './components/CardDetail.jsx'; 
import Bhaskar from './assets/img/bhaskar.jpg' 
import Mohit from "./assets/img/Mohit1.jpeg"; 
import Gaurav from "./assets/img/Gaurav.png"; 
import Deepanse from "./assets/img/Deepanse.jpeg"; 
import Head from "./assets/img/videos.mp4"; 
import AquaVew from "./assets/img/AquaVew.jpeg";  
import Mobility from './components/Mobility.jsx';
//import Nature from "./assets/img/nature.jpeg"; 
import about1 from "./assets/img/about1.jpeg";
import about2 from "./assets/img/about2.png"; 
import about3 from "./assets/img/about3.jpeg"; 
import about4 from "./assets/img/about4.jpg";



function App() {
  
  return (
    <div className="App">
       <nav className="navbar navbar-expand-sm py-0 navbar-light bg-light fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand js-scroll-trigger" href="/home"> 
      <img src={AquaVew} alt="photo"/>
      </a>
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fa fa-bars"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav text-uppercase ml-auto">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger text-warning" href="#services">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger text-warning" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger text-warning" href="#team">Team</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger text-warning" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
  <header>
  <div className="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src={Head} type="video/mp4" />
  </video>
  <div className="container h-100">
    <div className="d-flex h-100 text-center align-items-center">
      <div className="w-100 text-white">
        <h1 className="display-2">AquaVew Technologies</h1>
        <p className="lead mb-0 text-warning font-weight-bold">Pushing Limits With Brilliance</p>
      </div>
    </div>
  </div>
</header>
  <section className="page-section fade-in-up" id="services">   
     <div className="container-fluid mb-5 p-3 mb-5 rounded"> 
    
      <div className="row">
        <div className="col-lg-12 text-center">
          <h1 className="section-heading text-uppercase font-weight-bold text-warning display-4">Services</h1>
          <h3 className="section-subheading text-muted display-3 text-white">Harness the power of digital transformation & increase your business footprints with AquaVew Technologies</h3>
        </div>
      </div>
      <CardDetail></CardDetail>
    </div>
    </section>   
  <section className="page-section bg-light" id="about">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">About</h2>
          <h3 className="section-subheading text-muted">No matter which industry you belong to, every business must become digital.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <ul className="timeline">
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={about1} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4></h4>
                  <h4 className="subheading">About Us</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">AquaVew Technologies is more than a career or a stepping stone: it’s the adopted family of those who’ve called it home. We are a team of creative designers and highly skilled developers who are well-experienced in making apps for mobile and web.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={about2} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">About AquaVew Technologies</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">AquaVew Technologies is one of the leading Web and App Development Company located in Noida, India. We are focused and have expertise in apps development and have successfully developed over 400 apps for mobile and web.
At Innotical, the apps development team members are highly experienced and well-versed in several programming languages as well as the latest technologies and strategies in app development services. With our expertise and knowledge we are able to cater to all the needs of our clients and come up with high quality applications development services that include all the features a client can expect.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={about3} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Our Vision</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">We clearly understand that all customer landscapes are not of same kind. That’s why AquaVew sourcing methodology encompasses a clear solution especially crafted to address the clients' issues. We offer a phased approach towards your business drivers and help IT organizations to align their goals towards the overall vision of the business</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={about4} alt=""/>
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4 className="subheading">Our Mission</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value and reliable competitive advantage to customers around the globe.</p>
                </div>
              </div>
            </li>
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>Be Part
                  <br/>Of Our
                  <br/>Story!</h4>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section className="bg-light page-section" id="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 className="section-subheading text-muted"></h3>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Deepanse} alt="photo"/>
            <h4>Deepansh Paliwal</h4>
            <p className="text-muted">Chief Executive Officer</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Gaurav} alt=""/>
            <h4>Gaurav Kumar</h4>
            <p className="text-muted">Director- Operations</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Mohit} alt=""/>
            <h4>Mohit Sharma</h4>
            <p className="text-muted">Director- Operations</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div> 
        <div className="col-sm-3">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={Bhaskar} alt="photo"/>
            <h4>Bhaskar Dwivedi</h4>
            <p className="text-muted">Director-Technology</p>
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#something">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
        </div>
      </div>
    </div>
  </section>
  
  <section className="page-section" id="contact">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Contact Us</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <form id="contactForm" name="sentMessage" novalidate="novalidate">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required="required" data-validation-required-message="Please enter your name."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" data-validation-required-message="Please enter your email address."/>
                  <p className="help-block text-danger"></p>
                </div>
                <div className="form-group">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required" data-validation-required-message="Please enter your phone number."/>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                  <p className="help-block text-danger"></p>
                </div>
              </div>
              <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div> 

            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
    <footer className="footer">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <span className="text-warning bg-dark">AquaVew Technologies Pvt Ltd</span>
        </div>
        <div className="col-md-4">
          <ul className="list-inline social-buttons">
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a href="#something">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <ul className="list-inline quicklinks">
            <li className="list-inline-item"> 
            <h4 className="text-warning bg-dark">Office Address</h4>
              <h5 className="bg-dark text-warning">D-13, Office No.3, Ground floor, Sector-3 Noida Pin-201301</h5>
            </li>
            <li className="list-inline-item">
              <h6><a href="#something">info@aquavew.com</a></h6>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
      </div>
  );
}

export default App;
