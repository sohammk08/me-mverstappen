import CareerTimeline from "./components/CareerTimeline";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <CareerTimeline />
      <Footer />
    </div>
  );
}

export default App;
