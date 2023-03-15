import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { AboutUs } from './components/AboutUs/AboutUs';
import { NotFound } from './components/NotFound/NotFound';
import { Footer } from './components/Footer/Footer';
import { PageWrapper } from './components/PageWrapper/PageWrapper';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<PageWrapper title="Home" content={<Home />} />} />
        <Route path="/" element={<PageWrapper title="Home" content={<Home />} />} />
        <Route path="about-us" element={<PageWrapper title="AboutUs" content={<AboutUs />} />} />
        <Route path="*" element={<PageWrapper title="NotFound" content={<NotFound />} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
