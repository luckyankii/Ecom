import React from "react";
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories";
import BestDeals from "../components/Route/BestDeals";
import FeatureProducts from "../components/Route/FeatureProducts/FeatureProducts";
import Sponsored from "../components/Route/Sponsored";
import Events from "../components/events/Events";
import Footer from "../components/Layout/Footer";

function HomePage() {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      <Categories />
      <BestDeals />
      <Events />
      <FeatureProducts />
      <Sponsored />
      <Footer />
    </div>
  );
}

export default HomePage;
