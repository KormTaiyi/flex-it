import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Loading from '../components/loading/Loading';

// Lazy load pages for code-splitting
const Home = lazy(() => import('../page/Home'));
const About = lazy(() => import('../page/About'));
const Service = lazy(() => import('../page/Service'));
const Portfolio = lazy(() => import('../page/Portfolio'));
const Blog = lazy(() => import('../page/Blog'));
const Pages = lazy(() => import('../page/Pages'));
const Contact = lazy(() => import('../page/Contact'));

const RouterComponent = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default RouterComponent;
