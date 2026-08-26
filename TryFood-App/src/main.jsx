import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Cart from './components/cart/Cart.jsx';
import Error from './components/error/Error.jsx';
import Body from './components/body/Body.jsx';


const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      children: [
         {
            path: "/",
            element: <Body />

         },
         {
            path: "/about",
            element: <About />

         },
         {
            path: "/contact",
            element: <Contact />
         },
         {
            path: "/cart",
            element: <Cart />
         }

      ],
      errorElement:<Error/>,
   }
])

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <RouterProvider router={appRouter} />
   </StrictMode>,
)
