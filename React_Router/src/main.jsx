import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './Components/Home/Home.jsx';
import About from './Components/About/About.jsx';
import Footer from './Components/Footer/Fotter.jsx';  // Corrected Footer import
import Contact from './Components/Contact/Contact.jsx';
import User from './Components/User/User.jsx'; // Dynamic route component
import Github, { githubInfoLoader } from './Components/Github/Github.jsx';
import Hitesh from './Components/hitesh/Hitesh.jsx';

// Creating the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        {/* Default Route */}
        <Route index element={<Home />} />

        {/* About Route with Nested Route for Hitesh */}
        <Route path="about" element={<About />}>
          <Route path="hitesh" element={<Hitesh />} />
        </Route>

        {/* Other Static Routes */}
        <Route path="contact" element={<Contact />} />
        <Route path="footer" element={<Footer />} />

        {/* Dynamic Route with parameter (:userid) */}
        <Route path="user/:userid" element={<User />} />

        {/* GitHub Component Route with Data Loader */}
        <Route path="github" element={<Github />} loader={githubInfoLoader} />
      </Route>
    </>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
