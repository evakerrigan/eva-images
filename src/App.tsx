import React, { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Form } from './components/Form/Form';
import { NotFound } from './components/NotFound/NotFound';
import { Footer } from './components/Footer/Footer';
import { PageWrapper } from './components/PageWrapper/PageWrapper';

function App() {
  const a = localStorage.getItem('inputValue');

  const [query, setQuery] = useState(a ? a : '');
  return (
    <div className="App">
      <Routes>
        <Route
          index
          element={
            <PageWrapper setQuery={setQuery} title="Home" content={<Home query={query} />} />
          }
        />
        <Route
          path="/"
          element={
            <PageWrapper setQuery={setQuery} title="Home" content={<Home query={query} />} />
          }
        />
        <Route
          path="/about-me"
          element={<PageWrapper setQuery={setQuery} title="AboutMe" content={<AboutMe />} />}
        />
        <Route
          path="/notfound"
          element={<PageWrapper setQuery={setQuery} title="NotFound" content={<NotFound />} />}
        />
        <Route
          path="/form"
          element={<PageWrapper setQuery={setQuery} title="Form" content={<Form />} />}
        />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
