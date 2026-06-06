import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import FeaturedCars from "./components/FeaturedCars";
import Services from "./components/Services";
import Inventory from "./components/Inventory";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <FeaturedCars />
      <Services />
      <Inventory />
      <Contact />
      <Footer />
    </>
  );
}

export default App;