import {
   ArrowRight,
   Clock3,
   Headphones,
   Mail,
   MapPin,
   MessageCircle,
   Phone,
   Send,
   ShieldCheck,
   Utensils,
} from 'lucide-react';

import './Contact.css';


function Contact() {

   return (

      <main className="contact-page">


         {/* =====================================================
             HERO
         ===================================================== */}

         <section className="contact-hero">

            <div className="contact-hero-content">

               <span className="contact-eyebrow">
                  GET IN TOUCH
               </span>

               <h1>
                  We’re here to
                  <br />
                  <span>help you.</span>
               </h1>

               <p>
                  Have a question about your order, restaurant,
                  account or anything else? Our team is here to
                  help make your TryFood experience better.
               </p>

               <div className="contact-hero-points">

                  <div className="contact-hero-point">

                     <div className="hero-point-icon">
                        <Clock3 size={17} />
                     </div>

                     <span>
                        Quick support
                     </span>

                  </div>


                  <div className="contact-hero-point">

                     <div className="hero-point-icon">
                        <ShieldCheck size={17} />
                     </div>

                     <span>
                        Reliable assistance
                     </span>

                  </div>

               </div>

            </div>


            {/* HERO VISUAL */}

            <div className="contact-hero-visual">

               <div className="contact-chat-card">

                  <div className="chat-header">

                     <div className="chat-profile">

                        <div className="chat-avatar">
                           TF
                        </div>

                        <div>

                           <strong>
                              TryFood Support
                           </strong>

                           <span>
                              Usually replies quickly
                           </span>

                        </div>

                     </div>

                     <span className="online-dot"></span>

                  </div>


                  <div className="chat-body">

                     <div className="chat-message support">
                        Hi! 👋
                        <br />
                        How can we help you today?
                     </div>


                     <div className="chat-message user">
                        I need help with my order.
                     </div>


                     <div className="chat-message support">
                        Sure! We're happy to help.
                     </div>

                  </div>


                  <div className="chat-input">

                     <span>
                        Type your message...
                     </span>

                     <div className="chat-send">
                        <Send size={15} />
                     </div>

                  </div>

               </div>


               <div className="floating-contact-card">

                  <div className="floating-contact-icon">
                     <Headphones size={20} />
                  </div>

                  <div>

                     <strong>
                        Need help?
                     </strong>

                     <span>
                        We're listening.
                     </span>

                  </div>

               </div>

            </div>

         </section>


         {/* =====================================================
             CONTACT OPTIONS
         ===================================================== */}

         <section className="contact-options">

            <div className="contact-section-heading">

               <span className="section-eyebrow">
                  CONTACT US
               </span>

               <h2>
                  Choose how you want
                  <span> to connect.</span>
               </h2>

               <p>
                  Pick the option that works best for you.
                  We'll help you get the information you need.
               </p>

            </div>


            <div className="contact-options-grid">


               {/* EMAIL */}

               <a
                  href="mailto:support@tryfood.com"
                  className="contact-option-card"
               >

                  <div className="contact-option-icon orange">
                     <Mail size={24} />
                  </div>

                  <div className="contact-option-content">

                     <h3>
                        Email Us
                     </h3>

                     <p>
                        Send us your question and our team
                        will get back to you.
                     </p>

                     <span className="contact-option-link">
                        support@tryfood.com
                        <ArrowRight size={15} />
                     </span>

                  </div>

               </a>


               {/* PHONE */}

               <a
                  href="tel:+919999999999"
                  className="contact-option-card"
               >

                  <div className="contact-option-icon green">
                     <Phone size={24} />
                  </div>

                  <div className="contact-option-content">

                     <h3>
                        Call Us
                     </h3>

                     <p>
                        Prefer talking to someone? Give our
                        support team a call.
                     </p>

                     <span className="contact-option-link">
                        +91 99999 99999
                        <ArrowRight size={15} />
                     </span>

                  </div>

               </a>


               {/* CHAT */}

               <a
                  href="#contact-form"
                  className="contact-option-card"
               >

                  <div className="contact-option-icon blue">
                     <MessageCircle size={24} />
                  </div>

                  <div className="contact-option-content">

                     <h3>
                        Message Us
                     </h3>

                     <p>
                        Send us a message directly through
                        our contact form.
                     </p>

                     <span className="contact-option-link">
                        Start a conversation
                        <ArrowRight size={15} />
                     </span>

                  </div>

               </a>

            </div>

         </section>


         {/* =====================================================
             CONTACT FORM SECTION
         ===================================================== */}

         <section
            className="contact-form-section"
            id="contact-form"
         >

            <div className="contact-form-wrapper">


               {/* LEFT */}

               <div className="contact-form-info">

                  <span className="section-eyebrow">
                     SEND A MESSAGE
                  </span>

                  <h2>
                     Tell us
                     <span> what's on your mind.</span>
                  </h2>

                  <p>
                     Whether you have feedback, a question or
                     need assistance with something, we'd love
                     to hear from you.
                  </p>


                  <div className="form-info-list">

                     <div className="form-info-item">

                        <div className="form-info-icon">
                           <Headphones size={19} />
                        </div>

                        <div>

                           <strong>
                              Customer Support
                           </strong>

                           <span>
                              We're here to help with your
                              TryFood experience.
                           </span>

                        </div>

                     </div>


                     <div className="form-info-item">

                        <div className="form-info-icon">
                           <Clock3 size={19} />
                        </div>

                        <div>

                           <strong>
                              Support Hours
                           </strong>

                           <span>
                              Monday – Sunday · 9 AM – 10 PM
                           </span>

                        </div>

                     </div>


                     <div className="form-info-item">

                        <div className="form-info-icon">
                           <MapPin size={19} />
                        </div>

                        <div>

                           <strong>
                              TryFood
                           </strong>

                           <span>
                              Serving food lovers across India.
                           </span>

                        </div>

                     </div>

                  </div>

               </div>


               {/* FORM */}

               <form className="contact-form">

                  <div className="form-row">

                     <div className="form-group">

                        <label htmlFor="contact-name">
                           Your Name
                        </label>

                        <input
                           id="contact-name"
                           type="text"
                           placeholder="Enter your name"
                        />

                     </div>


                     <div className="form-group">

                        <label htmlFor="contact-email">
                           Email Address
                        </label>

                        <input
                           id="contact-email"
                           type="email"
                           placeholder="Enter your email"
                        />

                     </div>

                  </div>


                  <div className="form-group">

                     <label htmlFor="contact-subject">
                        Subject
                     </label>

                     <select
                        id="contact-subject"
                        defaultValue=""
                     >

                        <option value="" disabled>
                           Select a subject
                        </option>

                        <option value="order">
                           Order related
                        </option>

                        <option value="restaurant">
                           Restaurant related
                        </option>

                        <option value="payment">
                           Payment issue
                        </option>

                        <option value="account">
                           Account related
                        </option>

                        <option value="feedback">
                           Feedback
                        </option>

                        <option value="other">
                           Other
                        </option>

                     </select>

                  </div>


                  <div className="form-group">

                     <label htmlFor="contact-message">
                        Message
                     </label>

                     <textarea
                        id="contact-message"
                        rows="6"
                        placeholder="Tell us how we can help..."
                     ></textarea>

                  </div>


                  <button
                     type="submit"
                     className="contact-submit-btn"
                  >

                     Send Message

                     <Send size={17} />

                  </button>

               </form>

            </div>

         </section>


         {/* =====================================================
             FAQ / HELP
         ===================================================== */}

         <section className="contact-help">

            <div className="contact-section-heading centered">

               <span className="section-eyebrow">
                  NEED QUICK HELP?
               </span>

               <h2>
                  We've got you
                  <span> covered.</span>
               </h2>

               <p>
                  Here are some common things our customers
                  usually need help with.
               </p>

            </div>


            <div className="help-grid">


               <div className="help-card">

                  <div className="help-icon">
                     <ShoppingBagIcon />
                  </div>

                  <div>

                     <h3>
                        Where is my order?
                     </h3>

                     <p>
                        Check your order status and delivery
                        information from your account.
                     </p>

                  </div>

               </div>


               <div className="help-card">

                  <div className="help-icon">
                     <Utensils size={21} />
                  </div>

                  <div>

                     <h3>
                        Restaurant information
                     </h3>

                     <p>
                        Explore restaurant menus, dishes,
                        ratings and other details.
                     </p>

                  </div>

               </div>


               <div className="help-card">

                  <div className="help-icon">
                     <ShieldCheck size={21} />
                  </div>

                  <div>

                     <h3>
                        Payment & security
                     </h3>

                     <p>
                        Get assistance with payments,
                        transactions and account security.
                     </p>

                  </div>

               </div>

            </div>

         </section>


         {/* =====================================================
             CTA
         ===================================================== */}

         <section className="contact-cta">

            <div className="contact-cta-content">

               <div className="cta-icon">
                  <MessageCircle size={27} />
               </div>

               <div>

                  <h2>
                     Still have questions?
                  </h2>

                  <p>
                     Drop us a message and we'll be happy
                     to help.
                  </p>

               </div>

               <a
                  href="#contact-form"
                  className="contact-cta-button"
               >
                  Contact Us
                  <ArrowRight size={16} />
               </a>

            </div>

         </section>


         {/* =====================================================
             FOOTER
         ===================================================== */}

         <section className="contact-footer-message">

            <p>
               Made with <span>♥</span> for food lovers.
            </p>

            <span>
               © {new Date().getFullYear()} TryFood
            </span>

         </section>


      </main>

   );

}


/* =========================================================
   SMALL ICON HELPER
   ========================================================= */

function ShoppingBagIcon() {

   return (
      <div className="shopping-bag-icon">
         <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
         >
            <path d="M6 8h12l1 13H5L6 8Z" />
            <path d="M9 8a3 3 0 0 1 6 0" />
         </svg>
      </div>
   );

}


export default Contact;
