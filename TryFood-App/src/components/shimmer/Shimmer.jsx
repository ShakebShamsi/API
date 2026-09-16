import './Shimmer.css';

const Shimmer = () => {
   const foodCategories = Array.from({ length: 8 });
   const restaurants = Array.from({ length: 8 });

   return (
      <div className="home-shimmer">

         {/* =================================================
             HEADER
         ================================================= */}

         <header className="shimmer-header">

            <div className="shimmer-header-left">

               {/* Logo */}
               <div className="shimmer-logo"></div>

               {/* Location */}
               <div className="shimmer-location">
                  <div className="shimmer-location-line"></div>
                  <div className="shimmer-location-subline"></div>
               </div>

            </div>


            <div className="shimmer-header-right">

               <div className="shimmer-nav-item"></div>

               <div className="shimmer-nav-item"></div>

               <div className="shimmer-nav-item"></div>

               <div className="shimmer-nav-item"></div>

               <div className="shimmer-nav-item small"></div>

               <div className="shimmer-profile"></div>

            </div>

         </header>


         {/* =================================================
             MAIN CONTENT
         ================================================= */}

         <main className="shimmer-home-container">


            {/* =================================================
                SEARCH
            ================================================= */}

            <div className="shimmer-search">
               <div className="shimmer-search-placeholder"></div>
               <div className="shimmer-search-icon"></div>
            </div>


            {/* =================================================
                WHAT'S ON YOUR MIND
            ================================================= */}

            <section className="shimmer-category-section">

               <div className="shimmer-section-heading">
                  <div className="shimmer-heading-line"></div>
               </div>


               <div className="shimmer-category-row">

                  {foodCategories.map((_, index) => (
                     <div
                        className="shimmer-category"
                        key={index}
                     >
                        <div className="shimmer-category-image"></div>
                        <div className="shimmer-category-name"></div>
                     </div>
                  ))}

               </div>

            </section>


            {/* =================================================
                RESTAURANT SECTION
            ================================================= */}

            <section className="shimmer-restaurant-section">

               <div className="shimmer-section-heading">
                  <div className="shimmer-heading-line restaurant-heading"></div>
               </div>


               <div className="shimmer-restaurant-grid">

                  {restaurants.map((_, index) => (
                     <div
                        className="shimmer-restaurant-card"
                        key={index}
                     >

                        {/* Restaurant image */}

                        <div className="shimmer-restaurant-image">

                           <div className="shimmer-image-overlay"></div>

                        </div>


                        {/* Restaurant content */}

                        <div className="shimmer-restaurant-content">

                           <div className="shimmer-restaurant-name"></div>

                           <div className="shimmer-restaurant-rating"></div>

                           <div className="shimmer-restaurant-cuisine"></div>

                           <div className="shimmer-restaurant-location"></div>

                        </div>

                     </div>
                  ))}

               </div>

            </section>


            {/* =================================================
                SECOND SECTION
            ================================================= */}

            <section className="shimmer-restaurant-section second-section">

               <div className="shimmer-section-heading">
                  <div className="shimmer-heading-line restaurant-heading"></div>
               </div>


               <div className="shimmer-restaurant-grid">

                  {restaurants.slice(0, 4).map((_, index) => (
                     <div
                        className="shimmer-restaurant-card"
                        key={index}
                     >

                        <div className="shimmer-restaurant-image">

                           <div className="shimmer-image-overlay"></div>

                        </div>


                        <div className="shimmer-restaurant-content">

                           <div className="shimmer-restaurant-name"></div>

                           <div className="shimmer-restaurant-rating"></div>

                           <div className="shimmer-restaurant-cuisine"></div>

                           <div className="shimmer-restaurant-location"></div>

                        </div>

                     </div>
                  ))}

               </div>

            </section>


         </main>

      </div>
   );
};

export default Shimmer;
