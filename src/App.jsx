import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Detect from './pages/Detect';
import Report from './pages/Report';
import Helpdesk from './pages/HelpDesk';
import About from './pages/About';
import Roadmap from './pages/Roadmap';
import ComingSoon from './pages/ComingSoon';
import SocialMedia from './pages/SocialMedia';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detect" element={<Detect />} />
            <Route path="/report" element={<Report />} />
            <Route path="/helpdesk" element={<Helpdesk />} />
            <Route path="/about" element={<About />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/blog" element={<div className="py-20 text-center text-gray-600">Blog page coming soon...</div>} />
            <Route path="/privacy" element={<div className="py-20 text-center text-gray-600">Privacy policy coming soon...</div>} />
            <Route path="/terms" element={<div className="py-20 text-center text-gray-600">Terms of service coming soon...</div>} />
            <Route path="/legal" element={<div className="py-20 text-center text-gray-600">Legal information coming soon...</div>} />
            <Route path="/contact" element={<div className="py-20 text-center text-gray-600">Contact page coming soon...</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
