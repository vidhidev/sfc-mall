import React from 'react';
import Hero from './Hero';
import BrandCarousel from './BrandCarousel';
import Stores from './Stores';
import Entertainment from './Entertainment';
import Dining from './Dining';
import Fitness from './Fitness';
import Amenities from './Amenities';
import Events from './Events';
import CustomerReviews from './CustomerReviews';
import About from './About';
import Contact from './Contact';
import InvestorRelations from './InvestorRelations';

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandCarousel />
      <Stores />
      <Entertainment />
      <Dining />
      <Fitness />
      <Amenities />
      <CustomerReviews />
      <Events />
      <About />
      <Contact />
      {/* Optional investor relations section */}
      <InvestorRelations />
    </main>
  );
}
