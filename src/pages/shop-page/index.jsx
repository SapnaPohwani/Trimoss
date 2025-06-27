import React from "react";
import HeroSection from "./hero";
import TablesFurnitureSection from "../Home/table-furniture";

import FeaturedCollections from "../Home/featured";
import MuralsSection from "./murals";
import CondoProject from "./condo-project";
import QuoteSection from "./quote-section";

const ShopPage = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedCollections />
      <TablesFurnitureSection />
      <MuralsSection />
      <CondoProject />
      <QuoteSection />
    </div>
  );
};

export default ShopPage;
