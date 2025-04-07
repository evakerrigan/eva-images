import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Form } from './components/Form/Form';
import { NotFound } from './components/NotFound/NotFound';
import { Footer } from './components/Footer/Footer';
import { PageWrapper } from './components/PageWrapper/PageWrapper';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<PageWrapper title="Home" content={<Home />} />} />
        <Route path="/" element={<PageWrapper title="Home" content={<Home />} />} />
        <Route path="/about-me" element={<PageWrapper title="AboutMe" content={<AboutMe />} />} />
        <Route path="/notfound" element={<PageWrapper title="NotFound" content={<NotFound />} />} />
        {/* <Route path="/form" element={<PageWrapper title="Form" content={<Form />} />} /> */}
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
