import {
   User,
   Mail,
   Phone,
   MapPin,
   Package,
   Heart,
   CreditCard,
   Settings,
   HelpCircle,
   LogOut,
   ChevronRight,
   Edit3,
} from 'lucide-react';

import './Profile.css';

function Profile() {
   return (
      <main className="profile-page">

         {/* =====================================================
             PROFILE HERO
             ===================================================== */}

         <section className="profile-hero">
            <div className="profile-container">

               <div className="profile-header">

                  <div className="profile-avatar">
                     <User size={42} />
                  </div>

                  <div className="profile-info">
                     <div className="profile-name-row">
                        <h1>Welcome to TryFood</h1>

                        <button
                           className="edit-profile-btn"
                           aria-label="Edit profile"
                        >
                           <Edit3 size={15} />
                           <span>Edit</span>
                        </button>
                     </div>

                     <p className="profile-subtitle">
                        Manage your account and preferences
                     </p>
                  </div>

               </div>

            </div>
         </section>


         {/* =====================================================
             PROFILE CONTENT
             ===================================================== */}

         <section className="profile-content">
            <div className="profile-container profile-grid">

               {/* =================================================
                   LEFT COLUMN
                   ================================================= */}

               <div className="profile-main">

                  {/* PERSONAL INFORMATION */}

                  <div className="profile-card">

                     <div className="card-header">
                        <div>
                           <h2>Personal Information</h2>
                           <p>Your account details</p>
                        </div>

                        <User size={20} />
                     </div>

                     <div className="personal-details">

                        <div className="detail-item">
                           <div className="detail-icon">
                              <User size={18} />
                           </div>

                           <div className="detail-content">
                              <span className="detail-label">
                                 FULL NAME
                              </span>

                              <span className="detail-value">
                                 Your Name
                              </span>
                           </div>
                        </div>


                        <div className="detail-item">
                           <div className="detail-icon">
                              <Mail size={18} />
                           </div>

                           <div className="detail-content">
                              <span className="detail-label">
                                 EMAIL ADDRESS
                              </span>

                              <span className="detail-value">
                                 your@email.com
                              </span>
                           </div>
                        </div>


                        <div className="detail-item">
                           <div className="detail-icon">
                              <Phone size={18} />
                           </div>

                           <div className="detail-content">
                              <span className="detail-label">
                                 PHONE NUMBER
                              </span>

                              <span className="detail-value">
                                 +91 99999 99999
                              </span>
                           </div>
                        </div>


                        <div className="detail-item">
                           <div className="detail-icon">
                              <MapPin size={18} />
                           </div>

                           <div className="detail-content">
                              <span className="detail-label">
                                 DEFAULT ADDRESS
                              </span>

                              <span className="detail-value">
                                 Add your delivery address
                              </span>
                           </div>
                        </div>

                     </div>

                  </div>


                  {/* ORDERS */}

                  <div className="profile-card">

                     <div className="card-header">
                        <div>
                           <h2>Your Orders</h2>
                           <p>Track and manage your orders</p>
                        </div>

                        <Package size={20} />
                     </div>

                     <div className="profile-menu-list">

                        <button className="profile-menu-item">
                           <div className="menu-icon orange">
                              <Package size={19} />
                           </div>

                           <div className="menu-content">
                              <strong>Order History</strong>
                              <span>View your previous orders</span>
                           </div>

                           <ChevronRight size={18} />
                        </button>


                        <button className="profile-menu-item">
                           <div className="menu-icon red">
                              <Heart size={19} />
                           </div>

                           <div className="menu-content">
                              <strong>Favourites</strong>
                              <span>Your favourite restaurants and dishes</span>
                           </div>

                           <ChevronRight size={18} />
                        </button>

                     </div>

                  </div>

               </div>


               {/* =================================================
                   RIGHT COLUMN
                   ================================================= */}

               <aside className="profile-sidebar">

                  {/* QUICK ACTIONS */}

                  <div className="profile-card">

                     <div className="card-header">
                        <div>
                           <h2>Quick Actions</h2>
                           <p>Manage your TryFood account</p>
                        </div>
                     </div>

                     <div className="quick-actions">

                        <button className="quick-action">
                           <div className="quick-action-icon">
                              <MapPin size={19} />
                           </div>

                           <span>Manage Addresses</span>

                           <ChevronRight size={17} />
                        </button>


                        <button className="quick-action">
                           <div className="quick-action-icon">
                              <CreditCard size={19} />
                           </div>

                           <span>Payment Methods</span>

                           <ChevronRight size={17} />
                        </button>


                        <button className="quick-action">
                           <div className="quick-action-icon">
                              <Settings size={19} />
                           </div>

                           <span>Account Settings</span>

                           <ChevronRight size={17} />
                        </button>


                        <button className="quick-action">
                           <div className="quick-action-icon">
                              <HelpCircle size={19} />
                           </div>

                           <span>Help & Support</span>

                           <ChevronRight size={17} />
                        </button>

                     </div>

                  </div>


                  {/* LOGOUT */}

                  <button className="logout-btn">
                     <LogOut size={18} />
                     <span>Log Out</span>
                  </button>


                  {/* TRYFOOD CARD */}

                  <div className="tryfood-profile-card">

                     <div className="tryfood-mini-logo">
                        TF
                     </div>

                     <div>
                        <h3>Enjoying TryFood?</h3>
                        <p>
                           Discover delicious food from
                           restaurants around you.
                        </p>
                     </div>

                  </div>

               </aside>

            </div>
         </section>

      </main>
   );
}

export default Profile;
