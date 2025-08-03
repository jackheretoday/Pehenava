import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import HomePage from '@/pages/HomePage';
import MarketplacePage from '@/pages/MarketplacePage';
import VRTrialsPage from '@/pages/VRTrialsPage';
import ModelApplicationPage from '@/pages/ModelApplicationPage';
import JoinMarketplacePage from '@/pages/JoinMarketplacePage';
import PersonalStylistPage from '@/pages/PersonalStylistPage';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen lotus-pattern">
      <Helmet>
        <title>Pehenava - Premium Ethnic Wear Marketplace</title>
        <meta name="description" content="Discover exquisite ethnic wear with VR/AR trials, local marketplace, and premium designs made to perfection at Pehenava." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/marketplace" element={<MarketplacePage />} />
          <Route path="/vr-trials" element={<VRTrialsPage />} />
          <Route path="/apply-model" element={<ModelApplicationPage />} />
          <Route path="/join-marketplace" element={<JoinMarketplacePage />} />
          <Route path="/personal-stylist" element={<PersonalStylistPage />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;