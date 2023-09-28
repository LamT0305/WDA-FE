import React from "react";
import "../style/animation.css";
import "../style/animation.css";
import "../App.css";
import Footer from "../components/footer/Footer";
import Nav from "../components/navigator/Nav";
import BodySection from "../components/body/BodySection";
import ProductDetails from "../components/product-detail/prdDetails";
import Review from "../components/review/Review";

const Home: React.FC = () => {
  return (
    <div className="body">
      <Nav />
      <BodySection />
      <ProductDetails />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
