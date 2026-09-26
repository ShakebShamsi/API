import {
   ArrowUpRight,
   Mail,
   MapPin,
   Phone,
} from 'lucide-react';

import './Footer.css';


function Footer() {

   const currentYear = new Date().getFullYear();


   return (

      <footer className="footer">


         {/* =====================================================
             MAIN FOOTER
         ===================================================== */}

         <div className="footer-main">


            <div className="footer-container">


               {/* =================================================
                   BRAND
               ================================================= */}

               <div className="footer-brand">

                  <a
                     href="/"
                     className="footer-logo"
                  >
                     Try<span>Food</span>
                  </a>


                  <p className="footer-tagline">
                     Discover delicious food,
                     <br />
                     delivered to your doorstep.
                  </p>


                  <div className="footer-brand-line"></div>


                  <p className="footer-description">
                     Your favourite restaurants and dishes,
                     all in one place.
                  </p>


                  {/* SOCIAL ICONS */}


                  <div className="footer-socials">

                     <a
                        href="#"
                        aria-label="Instagram"
                        className="social-link"
                     >
                        <span className="social-instagram">◎</span>
                     </a>


                     <a
                        href="#"
                        aria-label="Facebook"
                        className="social-link"
                     >
                        <span className="social-facebook">f</span>
                     </a>


                     <a
                        href="#"
                        aria-label="Twitter"
                        className="social-link"
                     >
                        <span className="social-twitter">𝕏</span>
                     </a>


                     <a
                        href="#"
                        aria-label="LinkedIn"
                        className="social-link"
                     >
                        <span className="social-linkedin">in</span>
                     </a>

                  </div>
               </div>


               {/* =================================================
                   COMPANY
               ================================================= */}

               <div className="footer-column">

                  <h3>
                     COMPANY
                  </h3>

                  <a href="/about">
                     About Us
                  </a>

                  <a href="/contact">
                     Contact Us
                  </a>

                  <a href="#">
                     Careers
                  </a>

                  <a href="#">
                     Team
                  </a>

                  <a href="#">
                     Blog
                  </a>

               </div>


               {/* =================================================
                   FOR FOODIES
               ================================================= */}

               <div className="footer-column">

                  <h3>
                     FOR FOODIES
                  </h3>

                  <a href="/">
                     Explore Restaurants
                  </a>

                  <a href="/">
                     Discover Food
                  </a>

                  <a href="/cart">
                     Your Cart
                  </a>

                  <a href="#">
                     Offers
                  </a>

                  <a href="#">
                     Gift Cards
                  </a>

               </div>


               {/* =================================================
                   SUPPORT
               ================================================= */}

               <div className="footer-column">

                  <h3>
                     SUPPORT
                  </h3>

                  <a href="/contact">
                     Help & Support
                  </a>

                  <a href="/contact">
                     FAQs
                  </a>

                  <a href="#">
                     Terms & Conditions
                  </a>

                  <a href="#">
                     Privacy Policy
                  </a>

                  <a href="#">
                     Cookie Policy
                  </a>

               </div>


               {/* =================================================
                   GET IN TOUCH
               ================================================= */}

               <div className="footer-column footer-contact">

                  <h3>
                     GET IN TOUCH
                  </h3>


                  <a
                     href="mailto:support@tryfood.com"
                     className="footer-contact-item"
                  >

                     <span className="footer-contact-icon">
                        <Mail size={14} />
                     </span>

                     <span>
                        support@tryfood.com
                     </span>

                  </a>


                  <a
                     href="tel:+919999999999"
                     className="footer-contact-item"
                  >

                     <span className="footer-contact-icon">
                        <Phone size={14} />
                     </span>

                     <span>
                        +91 99999 99999
                     </span>

                  </a>


                  <div className="footer-contact-item">

                     <span className="footer-contact-icon">
                        <MapPin size={14} />
                     </span>

                     <span>
                        India
                     </span>

                  </div>

               </div>

            </div>


            {/* =====================================================
                APP DOWNLOAD / CTA
            ===================================================== */}

            <div className="footer-app-section">

               <div className="footer-app-container">


                  <div className="footer-app-content">

                     <div className="footer-app-icon">
                        🍴
                     </div>

                     <div>

                        <span>
                           TAKE TRYFOOD WITH YOU
                        </span>

                        <h3>
                           Great food is just a tap away.
                        </h3>

                     </div>

                  </div>


                  <div className="footer-app-buttons">

                     <a
                        href="#"
                        className="app-download-btn"
                     >

                        <span className="app-button-icon">
                           
                        </span>

                        <span>

                           <small>
                              Download on the
                           </small>

                           <strong>
                              App Store
                           </strong>

                        </span>

                     </a>


                     <a
                        href="#"
                        className="app-download-btn"
                     >

                        <span className="app-button-icon google-icon">
                           ▶
                        </span>

                        <span>

                           <small>
                              GET IT ON
                           </small>

                           <strong>
                              Google Play
                           </strong>

                        </span>

                     </a>

                  </div>

               </div>

            </div>

         </div>


         {/* =====================================================
             BOTTOM FOOTER
         ===================================================== */}

         <div className="footer-bottom">

            <div className="footer-bottom-container">


               <div className="footer-copyright">

                  <span className="footer-mini-logo">
                     TF
                  </span>

                  <span>
                     © {currentYear} TryFood.
                     All rights reserved.
                  </span>

               </div>


               <div className="footer-bottom-links">

                  <a href="/about">
                     About
                  </a>

                  <a href="/contact">
                     Contact
                  </a>

                  <a href="#">
                     Privacy
                  </a>

                  <a href="#">
                     Terms
                  </a>

               </div>


               <a
                  href="#"
                  className="back-to-top"
                  aria-label="Back to top"
               >

                  <ArrowUpRight size={15} />

               </a>

            </div>

         </div>

      </footer>

   );

}


export default Footer;
