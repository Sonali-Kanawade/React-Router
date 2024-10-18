import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import About from './components/About/About';
import Home from './components/Home/Home';
import ContactUs from './components/ContactUs/ContactUs';
import User from './components/User/User';
import GitHub, { gitHubInfoLoader } from './components/GitHub/GitHub';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children:[
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: '/about',
//         element: <About />
//       },
//       {
//         path: '/contact-us',
//         element: <ContactUs />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='/about' element={<About />} />
    <Route path='/contact-us' element={<ContactUs />} />
    <Route path='user/:userid' element={<User />} />
    <Route path='/github' loader={gitHubInfoLoader} element={<GitHub />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
