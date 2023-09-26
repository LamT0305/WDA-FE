import "./style/animation.css";
import "./style/carousel.css";
import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/navigator/Nav";
import BodySection from "./components/body/BodySection";
import ProductDetails from "./components/product-detail/prdDetails";
import Review from "./components/review/Review";

function App() {
  return (
    <div>
      <Nav />
      <BodySection />
      <ProductDetails />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
