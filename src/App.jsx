import CareerTimeline from "./components/CareerTimeline";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Teams from "./components/Teams";

function App() {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <CareerTimeline />
      <Teams />
      <Footer />
    </div>
  );
}

export default App;
