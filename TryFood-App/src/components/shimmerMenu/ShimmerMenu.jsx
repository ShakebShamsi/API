import './ShimmerMenu.css';

const ShimmerMenu = () => {
   const shimmerItems = Array.from({ length: 7 });

   return (
      <div className="swiggy-shimmer">

         {/* =================================================
             MAIN CENTERED CONTAINER
         ================================================= */}

         <main className="swiggy-shimmer-container">

            {/* =================================================
                BREADCRUMB
            ================================================= */}

            <div className="shimmer-breadcrumb">
               <span></span>
               <i></i>
               <span></span>
               <i></i>
               <span className="short"></span>
            </div>


            {/* =================================================
                RESTAURANT INFORMATION
            ================================================= */}

            <section className="shimmer-restaurant">

               <div className="shimmer-restaurant-title"></div>

               <div className="shimmer-cuisine"></div>

               <div className="shimmer-restaurant-meta">

                  <div className="shimmer-rating">
                     <span></span>
                     <span></span>
                  </div>

                  <div className="shimmer-meta-dot"></div>

                  <div className="shimmer-meta-text"></div>

                  <div className="shimmer-meta-dot"></div>

                  <div className="shimmer-meta-text small"></div>

               </div>

            </section>


            {/* =================================================
                RESTAURANT DETAILS
            ================================================= */}

            <section className="shimmer-details">

               <div className="shimmer-detail-row">
                  <div className="shimmer-detail-icon"></div>

                  <div className="shimmer-detail-content">
                     <div className="shimmer-detail-title"></div>
                     <div className="shimmer-detail-subtitle"></div>
                  </div>
               </div>

               <div className="shimmer-detail-row">
                  <div className="shimmer-detail-icon"></div>

                  <div className="shimmer-detail-content">
                     <div className="shimmer-detail-title medium"></div>
                     <div className="shimmer-detail-subtitle short"></div>
                  </div>
               </div>

            </section>


            {/* =================================================
                DEALS FOR YOU
            ================================================= */}

            <section className="shimmer-deals">

               <div className="shimmer-section-title">
                  <div></div>
               </div>

               <div className="shimmer-deals-row">

                  <div className="shimmer-deal-card">
                     <div className="shimmer-deal-icon"></div>

                     <div className="shimmer-deal-content">
                        <div className="shimmer-deal-title"></div>
                        <div className="shimmer-deal-subtitle"></div>
                     </div>
                  </div>

                  <div className="shimmer-deal-card">
                     <div className="shimmer-deal-icon"></div>

                     <div className="shimmer-deal-content">
                        <div className="shimmer-deal-title medium"></div>
                        <div className="shimmer-deal-subtitle"></div>
                     </div>
                  </div>

                  <div className="shimmer-deal-card third">
                     <div className="shimmer-deal-icon"></div>

                     <div className="shimmer-deal-content">
                        <div className="shimmer-deal-title"></div>
                        <div className="shimmer-deal-subtitle"></div>
                     </div>
                  </div>

               </div>

            </section>


            {/* =================================================
                SEARCH FOR DISHES
            ================================================= */}

            <div className="shimmer-search">
               <div className="shimmer-search-text"></div>
               <div className="shimmer-search-icon"></div>
            </div>


            {/* =================================================
                FILTER CHIPS
            ================================================= */}

            <div className="shimmer-filters">

               <div className="shimmer-filter-chip">
                  <span></span>
               </div>

               <div className="shimmer-filter-chip">
                  <span></span>
               </div>

               <div className="shimmer-filter-chip wide">
                  <span></span>
               </div>

            </div>


            {/* =================================================
                RECOMMENDED
            ================================================= */}

            <section className="shimmer-menu-section">

               <div className="shimmer-menu-section-header">

                  <div className="shimmer-recommended-title"></div>

                  <div className="shimmer-arrow"></div>

               </div>


               {/* =================================================
                   MENU ITEMS
               ================================================= */}

               <div className="shimmer-menu-items">

                  {shimmerItems.map((_, index) => (
                     <article
                        className="shimmer-menu-item"
                        key={index}
                     >

                        {/* LEFT CONTENT */}

                        <div className="shimmer-item-content">

                           <div className="shimmer-veg-icon"></div>

                           <div className="shimmer-item-name"></div>

                           <div className="shimmer-item-price"></div>

                           <div className="shimmer-item-rating"></div>

                           <div className="shimmer-item-description">
                              <span></span>
                              <span></span>
                              <span className="last"></span>
                           </div>

                        </div>


                        {/* RIGHT IMAGE */}

                        <div className="shimmer-item-image-area">

                           <div className="shimmer-item-image"></div>

                           <div className="shimmer-add-button"></div>

                        </div>

                     </article>
                  ))}

               </div>

            </section>

         </main>

      </div>
   );
};

export default ShimmerMenu;
