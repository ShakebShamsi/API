import { createRoot } from 'react-dom/client';
import './index.css';

import App from './App.jsx';

import {
   createBrowserRouter,
   RouterProvider,
} from 'react-router-dom';

import About from './components/about/About';
import Contact from './components/contact/Contact';
import Cart from './components/cart/Cart.jsx';
import Error from './components/error/Error.jsx';
import Body from './components/body/Body.jsx';
import RestaurantMenu from './components/restaurantMenu/RestaurantMenu.jsx';

const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <App />,

      children: [
         {
            index: true,
            element: <Body />,
         },

         {
            path: 'about',
            element: <About />,
         },

         {
            path: 'contact',
            element: <Contact />,
         },

         {
            path: 'cart',
            element: <Cart />,
         },

         {
            path: 'restaurants/:resId',
            element: <RestaurantMenu />,
         },
      ],

      errorElement: <Error />,
   },
]);

createRoot(document.getElementById('root')).render(
   <RouterProvider router={appRouter} />
);
