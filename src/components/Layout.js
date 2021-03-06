import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "popper.js/dist/popper.min"
import "bootstrap/dist/js/bootstrap.min.js"
import "../assets/css/owl.carousel.min.css"
import "../assets/css/style.css"
import 'aos/dist/aos.css';

import Helmet from "react-helmet"
import AOS from 'aos'
import { withPrefix } from "gatsby"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

AOS.init();

const Layout = ({ children }) => {
  return (
     <>
      <Helmet>
          <script src={withPrefix('jquery.min.js')} type="text/javascript" />
          <script src={withPrefix('owl.carousel.min.js')} type="text/javascript" />
          <script src={withPrefix('sticky-menu.js')} type="text/javascript" />
          <script src={withPrefix('script.js')} type="text/javascript" />
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDf64CyWpOBCEocXjocJL_wZiW82hNtbTA&callback=initMap" />
      </Helmet>
     <Navbar />
     { children }
     <Footer />
     </>
  )
  
}

export default Layout
