import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Footer from './Components/Footer/Fotter.jsx';
import Contact from "./Components/Contact/Contact.jsx"

// Correcting the syntax for createBrowserRouter
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />,
//       },
//       {
//         path: 'about',
//         element: <About />,
//       },
//       {
//         path: 'footer', // Use lowercase 'footer' for path
//         element: <Footer />,
//       },
//       {
//         path: 'contact', // Use lowercase 'footer' for path
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} /> {/* 'index' is used for default path '/' */}
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='footer' element={<Footer />} />
        {/* Ensure you have a GitHub component before adding this */}
        {/* <Route path='github' element={<GitHub />} /> */}
      </Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
