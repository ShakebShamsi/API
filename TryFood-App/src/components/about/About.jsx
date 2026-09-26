import {
   Bike,
   Clock3,
   MapPin,
   ShieldCheck,
   ShoppingBag,
   Smartphone,
   Star,
   Utensils,
} from 'lucide-react';

import './About.css';


function About() {

   return (

      <main className="about-page">


         {/* =====================================================
             HERO SECTION
         ===================================================== */}

         <section className="about-hero">

            <div className="about-hero-content">

               <span className="about-eyebrow">
                  ABOUT TRYFOOD
               </span>

               <h1>
                  Good food.
                  <br />
                  <span>Delivered with love.</span>
               </h1>

               <p>
                  TryFood brings your favourite restaurants,
                  delicious meals and everyday cravings together
                  in one simple food delivery experience.
               </p>

               <div className="about-hero-actions">

                  <a
                     href="/"
                     className="about-primary-btn"
                  >
                     Explore Restaurants
                  </a>

                  <a
                     href="#how-it-works"
                     className="about-secondary-btn"
                  >
                     How it works
                  </a>

               </div>

            </div>


            <div className="about-hero-visual">

               <div className="hero-food-card hero-card-main">

                  <div className="hero-food-icon">
                     🍕
                  </div>

                  <div>
                     <span>
                        Your favourite food
                     </span>

                     <strong>
                        Just a few clicks away
                     </strong>
                  </div>

               </div>


               <div className="hero-floating-card hero-delivery-card">

                  <div className="floating-icon">
                     <Bike size={20} />
                  </div>

                  <div>
                     <strong>
                        Fast delivery
                     </strong>

                     <span>
                        At your doorstep
                     </span>
                  </div>

               </div>


               <div className="hero-floating-card hero-rating-card">

                  <div className="rating-stars">

                     <Star
                        size={15}
                        fill="currentColor"
                     />

                     <Star
                        size={15}
                        fill="currentColor"
                     />

                     <Star
                        size={15}
                        fill="currentColor"
                     />

                     <Star
                        size={15}
                        fill="currentColor"
                     />

                     <Star
                        size={15}
                        fill="currentColor"
                     />

                  </div>

                  <strong>
                     Loved by foodies
                  </strong>

               </div>

            </div>

         </section>


         {/* =====================================================
             STATS
         ===================================================== */}

         <section className="about-stats">

            <div className="about-stat">

               <span className="stat-number">
                  100+
               </span>

               <span className="stat-label">
                  Restaurants
               </span>

            </div>


            <div className="stat-divider"></div>


            <div className="about-stat">

               <span className="stat-number">
                  1K+
               </span>

               <span className="stat-label">
                  Food Items
               </span>

            </div>


            <div className="stat-divider"></div>


            <div className="about-stat">

               <span className="stat-number">
                  30+
               </span>

               <span className="stat-label">
                  Locations
               </span>

            </div>


            <div className="stat-divider"></div>


            <div className="about-stat">

               <span className="stat-number">
                  4.8★
               </span>

               <span className="stat-label">
                  User Rating
               </span>

            </div>

         </section>


         {/* =====================================================
             INTRODUCTION
         ===================================================== */}

         <section className="about-intro">

            <div className="about-section-heading">

               <span className="section-eyebrow">
                  WHY TRYFOOD
               </span>

               <h2>
                  More than just
                  <span> food delivery.</span>
               </h2>

            </div>


            <div className="about-intro-grid">

               <div className="about-intro-text">

                  <p>
                     TryFood is built to make discovering and
                     ordering food simple, convenient and enjoyable.
                     Whether you are looking for a quick lunch,
                     a weekend treat or your favourite comfort food,
                     we bring it closer to you.
                  </p>

                  <p>
                     Browse restaurants, explore their menus,
                     choose your favourite dishes and add them
                     to your cart — all from one easy-to-use
                     platform.
                  </p>

               </div>


               <div className="about-intro-highlight">

                  <div className="highlight-icon">
                     <Utensils size={26} />
                  </div>

                  <h3>
                     Made for food lovers
                  </h3>

                  <p>
                     Discover new flavours while keeping your
                     favourite meals just a few clicks away.
                  </p>

               </div>

            </div>

         </section>


         {/* =====================================================
             FEATURES
         ===================================================== */}

         <section className="about-features">

            <div className="about-section-heading centered">

               <span className="section-eyebrow">
                  OUR PROMISE
               </span>

               <h2>
                  Everything you need,
                  <span> in one place.</span>
               </h2>

               <p>
                  A simple experience designed around the way
                  people actually order food.
               </p>

            </div>


            <div className="features-grid">


               {/* FEATURE 1 */}

               <article className="feature-card">

                  <div className="feature-icon orange">
                     <ShoppingBag size={24} />
                  </div>

                  <h3>
                     Easy Ordering
                  </h3>

                  <p>
                     Find your favourite restaurant, explore
                     the menu and order your meal without the
                     unnecessary complexity.
                  </p>

               </article>


               {/* FEATURE 2 */}

               <article className="feature-card">

                  <div className="feature-icon green">
                     <Bike size={24} />
                  </div>

                  <h3>
                     Fast Delivery
                  </h3>

                  <p>
                     Get your food delivered conveniently to
                     your doorstep while you sit back and relax.
                  </p>

               </article>


               {/* FEATURE 3 */}

               <article className="feature-card">

                  <div className="feature-icon blue">
                     <MapPin size={24} />
                  </div>

                  <h3>
                     Discover Nearby
                  </h3>

                  <p>
                     Explore restaurants around you and discover
                     new dishes and flavours worth trying.
                  </p>

               </article>


               {/* FEATURE 4 */}

               <article className="feature-card">

                  <div className="feature-icon purple">
                     <ShieldCheck size={24} />
                  </div>

                  <h3>
                     Reliable Experience
                  </h3>

                  <p>
                     From browsing the menu to managing your
                     cart, every part of TryFood is designed
                     to feel simple and dependable.
                  </p>

               </article>

            </div>

         </section>


         {/* =====================================================
             HOW IT WORKS
         ===================================================== */}

         <section
            className="how-it-works"
            id="how-it-works"
         >

            <div className="about-section-heading centered">

               <span className="section-eyebrow">
                  HOW IT WORKS
               </span>

               <h2>
                  Your food journey,
                  <span> made simple.</span>
               </h2>

            </div>


            <div className="steps-container">


               {/* STEP 1 */}

               <div className="step-card">

                  <div className="step-number">
                     01
                  </div>

                  <div className="step-icon">
                     <MapPin size={25} />
                  </div>

                  <h3>
                     Choose your location
                  </h3>

                  <p>
                     Tell us where you want your food delivered
                     and discover restaurants around you.
                  </p>

               </div>


               <div className="step-line"></div>


               {/* STEP 2 */}

               <div className="step-card">

                  <div className="step-number">
                     02
                  </div>

                  <div className="step-icon">
                     <Utensils size={25} />
                  </div>

                  <h3>
                     Pick your food
                  </h3>

                  <p>
                     Browse menus, check dishes and choose
                     exactly what you are craving.
                  </p>

               </div>


               <div className="step-line"></div>


               {/* STEP 3 */}

               <div className="step-card">

                  <div className="step-number">
                     03
                  </div>

                  <div className="step-icon">
                     <ShoppingBag size={25} />
                  </div>

                  <h3>
                     Add to your cart
                  </h3>

                  <p>
                     Add your favourite dishes to the cart and
                     review your order before checkout.
                  </p>

               </div>


               <div className="step-line"></div>


               {/* STEP 4 */}

               <div className="step-card">

                  <div className="step-number">
                     04
                  </div>

                  <div className="step-icon">
                     <Bike size={25} />
                  </div>

                  <h3>
                     Enjoy your meal
                  </h3>

                  <p>
                     Sit back, relax and enjoy your favourite
                     food when it arrives at your doorstep.
                  </p>

               </div>

            </div>

         </section>


         {/* =====================================================
             APP EXPERIENCE
         ===================================================== */}

         <section className="about-experience">

            <div className="experience-content">

               <span className="section-eyebrow">
                  BUILT FOR YOU
               </span>

               <h2>
                  Simple on the outside.
                  <br />
                  <span>Powerful underneath.</span>
               </h2>

               <p>
                  TryFood combines a clean interface with a
                  smooth browsing and ordering experience so
                  finding your next meal feels effortless.
               </p>


               <div className="experience-points">

                  <div className="experience-point">

                     <div className="experience-point-icon">
                        <Clock3 size={19} />
                     </div>

                     <div>
                        <strong>
                           Save time
                        </strong>

                        <span>
                           Find what you want faster.
                        </span>
                     </div>

                  </div>


                  <div className="experience-point">

                     <div className="experience-point-icon">
                        <Smartphone size={19} />
                     </div>

                     <div>
                        <strong>
                           Responsive experience
                        </strong>

                        <span>
                           Designed for every screen.
                        </span>
                     </div>

                  </div>


                  <div className="experience-point">

                     <div className="experience-point-icon">
                        <Star size={19} />
                     </div>

                     <div>
                        <strong>
                           Discover something new
                        </strong>

                        <span>
                           Explore restaurants and dishes.
                        </span>
                     </div>

                  </div>

               </div>

            </div>


            <div className="experience-visual">

               <div className="phone-card">

                  <div className="phone-top">

                     <span>
                        TryFood
                     </span>

                     <span className="phone-dot"></span>

                  </div>


                  <div className="phone-search">
                     🔍
                     <span>
                        Search for dishes...
                     </span>
                  </div>


                  <div className="phone-food">

                     <div className="food-circle">
                        🍔
                     </div>

                     <div className="food-lines">

                        <span></span>
                        <span></span>
                        <span></span>

                     </div>

                  </div>


                  <div className="phone-food">

                     <div className="food-circle">
                        🍕
                     </div>

                     <div className="food-lines">

                        <span></span>
                        <span></span>
                        <span></span>

                     </div>

                  </div>


                  <div className="phone-food">

                     <div className="food-circle">
                        🍜
                     </div>

                     <div className="food-lines">

                        <span></span>
                        <span></span>
                        <span></span>

                     </div>

                  </div>

               </div>

            </div>

         </section>


         {/* =====================================================
             CTA
         ===================================================== */}

         <section className="about-cta">

            <div className="cta-content">

               <span className="section-eyebrow">
                  READY TO EAT?
               </span>

               <h2>
                  Your next favourite meal
                  <br />
                  is waiting for you.
               </h2>

               <p>
                  Explore restaurants and discover something
                  delicious today.
               </p>

               <a
                  href="/"
                  className="cta-button"
               >
                  Order Now
               </a>

            </div>

         </section>


         {/* =====================================================
             FOOTER MESSAGE
         ===================================================== */}

         <section className="about-footer-message">

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


export default About;
