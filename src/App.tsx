import React from 'react';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { AboutMe } from './components/AboutMe/AboutMe';
// import { Form } from './components/Form/Form';
import { NotFound } from './components/NotFound/NotFound';
import { Footer } from './components/Footer/Footer';
import { PageWrapper } from './components/PageWrapper/PageWrapper';

const router = createHashRouter([
  {
    path: '/',
    element: <PageWrapper title="Home" content={<Home />} />,
  },
  {
    path: '/about-me',
    element: <PageWrapper title="AboutMe" content={<AboutMe />} />,
  },
  {
    path: '/notfound',
    element: <PageWrapper title="NotFound" content={<NotFound />} />,
  },
  {
    path: '*',
    element: <Navigate to="/notfound" replace />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;
